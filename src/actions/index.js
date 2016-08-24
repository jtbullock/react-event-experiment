import { GetStatusTask, GetDemographicsTask } from '../data/task-data';

export function selectTask(taskName) {

  if(taskName == 'Employment Status Info') {
    return {
      type: 'TASK_SELECTED',
      payload: GetStatusTask()
    }
  }

  if(taskName == 'Home Contact Info') {
    return {
      type: 'TASK_SELECTED',
      payload: GetDemographicsTask()
    }
  }
}