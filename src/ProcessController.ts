import { RequestManagerInterface, Task } from './types';

export class ProcessController {
  private requestsManager: RequestManagerInterface;
  private maxKaiWorkers: number;
  private maxKantraWorkers: number;
  private activeKaiTasks: Set<string>;
  private activeKantraTasks: Set<string>;

  constructor(requestsManager: RequestManagerInterface, maxKaiWorkers: number, maxKantraWorkers: number) {
    this.requestsManager = requestsManager;
    this.maxKaiWorkers = maxKaiWorkers;
    this.maxKantraWorkers = maxKantraWorkers;
    this.activeKaiTasks = new Set();
    this.activeKantraTasks = new Set();
    this.pollQueue();
  }

  private async pollQueue() {
    while (true) {
      await this.processQueue();
      await this.sleep(1000);
    }
  }

  async processQueue() {
    const queue = this.requestsManager.getProcessQueue();
    while (this.activeKaiTasks.size < this.maxKaiWorkers || this.activeKantraTasks.size < this.maxKantraWorkers) {
      if (queue.length === 0) return;

      const task = queue.shift();
      if (!task) return;

      const fileProcess = this.requestsManager.getFileMap().get(task.file);
      if (!fileProcess || fileProcess.state === 'in progress') continue;

      // using set to make the file tasks unique
      fileProcess.state = 'in progress';
      this.requestsManager.getFileMap().set(task.file, fileProcess);
      this.requestsManager.printFileProcess(task.file);
      console.log(`Processing ${task.action} on file ${task.file}`);

      if (task.action === "Kai" && this.activeKaiTasks.size < this.maxKaiWorkers) {
        this.activeKaiTasks.add(task.file);
        this.processTask(task)
          .then(() => this.activeKaiTasks.delete(task.file))
          .catch(() => this.activeKaiTasks.delete(task.file))
          .finally(() => this.dequeue(task.file));
      } else if (task.action === "Kantra" && this.activeKantraTasks.size < this.maxKantraWorkers) {
        this.activeKantraTasks.add(task.file);
        this.processTask(task)
          .then(() => this.activeKantraTasks.delete(task.file))
          .catch(() => this.activeKantraTasks.delete(task.file))
          .finally(() => this.dequeue(task.file));
      } else {
        queue.push(task); // Requeue if unable to process due to worker limits
      }
    }
  }

  private async processTask(task: Task) {
    const fileProcess = this.requestsManager.getFileMap().get(task.file);
    if (fileProcess) {
      await this.fileOperation(task.file, task.action, fileProcess.controller)
        .then(() => {
          fileProcess.state = 'completed';
          fileProcess.process = 'none';
          this.requestsManager.getFileMap().set(task.file, fileProcess);
          this.requestsManager.printFileProcess(task.file);
          console.log(`Finished ${task.action} on file ${task.file}`);
        })
        .catch((error) => {
          console.error(error);
          fileProcess.state = 'failed';
          this.requestsManager.getFileMap().set(task.file, fileProcess);
          this.requestsManager.printFileProcess(task.file);
          console.log(`Failed ${task.action} on file ${task.file}`);
        });
    }
  }

  private async fileOperation(file: string, action: string, controller: AbortController) {
    // Todo: Redo this with proper call to the fileops component
    return new Promise<void>((resolve, reject) => {
      const signal = controller.signal;
      const timeout = setTimeout(() => {
        resolve();
      }, 2000); // todo: change this

      signal.addEventListener("abort", () => {
        clearTimeout(timeout);
        reject(new Error("Operation aborted"));
      });
    });
  }

  private sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private dequeue(file: string) {
    this.requestsManager.dequeue(file); // Dequeue the specific file task
    this.processQueue(); // Continue processing the next task in the queue
  }
}
