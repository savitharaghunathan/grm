import { GlobalRequestsManager } from './GlobalRequestsManager';
import { ProcessController } from './ProcessController';

const requestsManager = new GlobalRequestsManager();
const processController = new ProcessController(requestsManager, 2, 1);

// Example requests
requestsManager.handleRequest("FileA", "Kai");
requestsManager.handleRequest("FileJ", "Kantra");
requestsManager.handleRequest("FileJ", "Kai");
requestsManager.handleRequest("FileA", "Stop");
requestsManager.handleRequest("FileB", "Kantra");
requestsManager.handleRequest("FileC", "Kai");
requestsManager.handleRequest("FileD", "Kai");
requestsManager.handleRequest("FileE", "Kantra");
requestsManager.handleRequest("FileF", "Kai");
requestsManager.handleRequest("FileA", "Kantra");
requestsManager.handleRequest("FileG", "Kantra");
requestsManager.handleRequest("FileG", "Stop");
requestsManager.handleRequest("FileH", "Kai");

const fileMap = requestsManager.getFileMap();
// print map
console.log("Current file map:", fileMap); 
