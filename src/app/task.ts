import { ParentTask } from '../app/ParentTask';
export class Task{
    taskId:Number;
    task:String;
    priority:Number;
    parentTask:ParentTask;
    parentId:Number;
    startDate:Date;
    endDate:Date;

    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}