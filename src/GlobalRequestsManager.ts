export type FileAction = "Kai" | "Analysis" | "Stop"

export interface Task {
    filePath: string;
    fileAction: FileAction;
}

export class FileProcess {
    processState: string;
    processType: FileAction;
    hash: string;
    stopController: AbortController

    constructor( processState: string, processType: FileAction, hash: string, stopController: AbortController) {
        this.processState = processState;
        this.processType = processType;
        this.hash = hash;
        this.stopController = stopController;
    }

}

export interface RequestsManagerInterface {
    getRequestsMap(): Map<string, FileProcess>;
    handleRequest(filePath: string, action: FileAction): void;
    getProcessQueue(): Task[];

}

