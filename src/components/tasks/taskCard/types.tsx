export interface ITask {
  _id: string;
  userId: string;
  description: string;
  completed: boolean;
  createDate: Date;
}
