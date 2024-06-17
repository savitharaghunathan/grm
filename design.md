
# Design Approach for Requests Processor

## Summary

We need a component to manage the requests on a large number of files asynchronously. Each file has an associated state, process, and hash. The component should be able to handle the follwing operations,

1. Process the async requests - track the requests and fire off the requested process on the file
2. Handle hundreds of files efficiently with concurrent asynchronous operations.
3. Track the state of each file.
4. Update the file's state based on the process 
5. Kill the file process immediately when a stop command is issues, prioritizing this command.
6. Support max workers for Kantra and Kai based on the resources available or user provided config

There can be hundreds of files and, the solution must be efficient and capable of handling concurrent asynchronous operations.

## Motivation

Create an efficient and scalable system to manage asynchronous operations on a large number of files. This component should ensure that file processing can be stopped immediately when required, with a priority to stop commands.

## Goals

* Manage the incoming async requests, kick off the process mentioned on the file
* Efficiently manage the state of a large number of files.
* Kill the file processes when a stop command is issued and prioritize this opetion.
* Ensure scalability to handle hundreds of files.
* Support max workers for Kantra and Kai based on the resources available or user provided config

## Non-Goals

* Persisting the state of filesif IDE restarts.

## Design

## Approach 1: Map and Queue 

This approach with have two sub components -  GlobalRequestsManager and ProcessController

### GlobalRequestsManager


This component manage the global map which has files and their corresponding state (fileMap) and the global task queue (processQueue). This approach uses a `Map` to store and manage file information. Each file's data (state, process, hash, etc.) is encapsulated in a `FileProcess` object. It allows for efficient access and updates based on the file's name.


```
+-----------------------+
|      RequestsManager      |
+-----------------------+
| - fileMap: Map<string, FileProcess> |
| - processQueue: Task[]              |
+-----------------------+


+--------------+
| FileProcess  |
+--------------+
| - state: string |
| - process: string | null |
| - hash: string          |
| - abortController: AbortController |
+--------------+
```

Each file can be associated with only one process at given point of time. The state of the process for each file is tracked in the map. 

Each user requests will be captuted as a task. The Task object will have the file name and the processtype. 

```
+-----------+
|   Task    |
+-----------+
| - fileName: string      |
| - action: FileAction |
+-----------+


type FileAction = "Kai" | "Kantra" | "Stop" | "None";

```

The total number of Kantra processes are determined by the avialbale resources. The user can supply a config with number of workers for Kantra and Kai. Based on the available resources, the minimum value would be taken.

```  
const maxKaiWorkers = Math.min(userConfig.kaiWorkers, Math.floor(availableMemory / 1000000000)); // 1GB per worker
const maxKantraWorkers = Math.min(userConfig.kantraWorkers, Math.floor(availableMemory / 1000000000)); // 1GB per worker
```
  

### ProcessController 

Manages the execution of requests in the `processQueue`. Uses polling mechanism to constantly check the items in the queue and sends it to `FileOps` component for further processing


```
+--------------+
| ProcessController  |
+--------------+
| - requestsManager: RequestManagerInterface |
| - maxKaiWorkers: number|
| - maxKantraWorkers: number |
| - activeKaiTasks: Set<string>         |
| - activeKantraTasks: Set<string> |
+--------------+
```

ProcessController has two Sets to manage the rate limitting of 'Kai' & 'Kantra' processes based on the number of workers available. Each task is processed and the state of the file process gets updated in every stage. 
    
### Details 

![initialapproach_requestsManager](https://hackmd.io/_uploads/SyxpTe0SR.png)


The user can send requests to perform actions (Kai, Kantra, Stop) on files (File A, File B, File C, ..., File N). The system receives a request consisting of the file and the action to be performed.If the action is `Stop` the process, the system proceeds to stop the process using AbortController. It will then update the file status in the map and dequeue from the processQueue 

If not, then system checks if a process is already running on the file. If a process is already running then it returns an error and ends the request handling for that file.
If not, it updates the map with the new process information and adds the task to the queue. 


The Process Controller constantly watches the queue and processes items in it.Once the process is done, the map gets updated and the process gets dequeued. 

### Advantages:
* Using Map provides efficient lookup 
* Queue helps with tracking the requests

### Disadvantages:

* Can possibly combine two components into one and avoid the overhead but it will not be efficient in terms of lookups
* Could be resourse intensive 


---



### NOT UPDATED YET: Alternate design - Using priorityQueue

![Screenshot 2024-06-05 at 12.04.54 PM](https://hackmd.io/_uploads/Hk0upZCVA.png)


This approach will have two sub-components: RequestsManager and ProcessController.

### RequestsManager

This component manages the task queue (processQueue) using a priority queue. Each file's data (state, process, hash, etc.) is encapsulated in a Request object, which allows for efficient access and updates based on the file's name.
```

+-----------------------+
|    RequestsManager    |
+-----------------------+
| - processQueue: PriorityQueue<Request> |
+-----------------------+

+-----------+
|   Request  |
+-----------+
| - fileName: string      |
| - processType: string |
| - priority: number       |
| - state: string   |
| - hash: string           |
+-----------+

+--------------------+
| ProcessController  |
+--------------------+
| - taskManager: RequestsManager |
+--------------------+

```
### ProcessController

Manages the execution of requests in the processQueue. Uses a polling mechanism to constantly check the items in the queue and sends them to the FileOps component for further processing.

### Details

When the user sends requests to perform action on file, the component receives a request consisting of the file and the action to be performed. If the action is Stop, then the request gets enqueued with high priority, updates the file status to aborted, and dequeues the task.

Otherwise, if a process is already running on the file,return an error and ends the request handling for that file. If no process is running, the compoment enqueues the request.

The ProcessController constantly watches the priority queue and processes items based on their priority. The ProcessController runs the process on the file using the FileOps component.Once the process is completed, the state of the request in the priority queue gets updated and the request gets dequeued.

### Advantages
* Using a priority queue ensures that high-priority tasks, such as stop commands, are processed immediately.
* Efficient management of state and processes without the need for an additional map structure.

### Disadvantages
* Without a map for quick lookups, state management relies entirely on the queue, which could become complex with a large number of tasks.
* Managing state updates and priority adjustments within the queue might introduce additional overhead.



-----
 ## Literature review:
 AbortController: 
*  https://ckeditor.com/blog/Aborting-a-signal-how-to-cancel-an-asynchronous-task-in-JavaScript/ 
*  https://blog.logrocket.com/complete-guide-abortcontroller-node-js/#use-abortcontroller-fs-readfile
*  https://devsmitra.medium.com/how-to-cancel-javascript-api-request-with-abortcontroller-c47a0a4d707f - Idea is to extend this to fileOps
*  https://dev.to/nas5w/how-to-abort-a-fetch-request-in-javascript-using-abortcontroller-3jc3 
 