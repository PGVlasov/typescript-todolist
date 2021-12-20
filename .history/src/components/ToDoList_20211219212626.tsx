import { IToDo } from "../interFaces";

type ToDoListProps = {
  todos: IToDo[];
  toggleComplete: (id: number) => void;
  removeToDo: (id: number) => void;
};

export const ToDoList: React.FC = () => {
  return <div></div>;
};
