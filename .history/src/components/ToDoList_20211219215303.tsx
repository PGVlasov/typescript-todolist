import { IToDo } from "../interFaces";

type ToDoListProps = {
  todos: IToDo[];
  completeHandler: (id: number) => void;
  removeToDo: (id: number) => void;
};

export const ToDoList: React.FC<ToDoListProps> = (todos, completeHandler) => {
  return <div></div>;
};
