import { RequestsManager } from './GlobalRequestsManager';
import { ProcessController } from './ProcessController';

const requestsManager = new RequestsManager();
const processController = new ProcessController(requestsManager, 2, 1);

// Example requests
requestsManager.handleRequest("FileA", "Kai");
requestsManager.handleRequest("FileJ", "Kantra");
requestsManager.handleRequest("FileJ", "Kai");
requestsManager.handleRequest("FileA", "Stop");

// Access the fileMap from another module
const fileMap = requestsManager.getFileMap();
console.log("Current file map:", fileMap);
