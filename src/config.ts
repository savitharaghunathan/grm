import * as os from 'os';

export interface Config {
  maxKaiWorkers: number;
  maxKantraWorkers: number;
}

export const getConfig = (): Config => {
  const availableMemory = os.totalmem();
  const userConfig = getUserConfig();

  // Todo: determine number of workers based on memory and user config
  const maxKaiWorkers = Math.min(userConfig.kaiWorkers, Math.floor(availableMemory / 1000000000)); // 1GB per worker
  const maxKantraWorkers = Math.min(userConfig.kantraWorkers, Math.floor(availableMemory / 1000000000)); // 1GB per worker

  return {
    maxKaiWorkers,
    maxKantraWorkers,
  };
};

const getUserConfig = () => {
  // todo: get user config 
  // returning a constant value now 
  return {
    kaiWorkers: 4,
    kantraWorkers: 4,
  };
};
