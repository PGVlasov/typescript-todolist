import { IToDo } from "../interFaces";

type ToDoListProps = {
  todos: IToDo[];
  comleteHandler: (id: number) => void;
  removeToDo: (id: number) => void;
};

export const ToDoList: React.FC<ToDoListProps> = () => {
  return <div></div>;
};
