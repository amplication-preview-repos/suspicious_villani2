export type Task = {
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  isCompleted: boolean | null;
  title: string | null;
  updatedAt: Date;
};
