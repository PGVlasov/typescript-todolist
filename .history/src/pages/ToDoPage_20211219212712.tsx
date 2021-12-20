import React from "react";
import { ToDoForm } from "../components/ToDoForm";
import { ToDoList } from "../components/ToDoList";

export const ToDoPage: React.FC = () => {
  const addToDo = (userInput: string) => {};

  const removeToDo = (id: number) => {};

  const comleteHandler = (id: number) => {};

  return (
    <React.Fragment>
      <ToDoForm addToDo={addToDo} />
      <ToDoList removeToDo={removeToDo} comleteHandler={comleteHandler} />
    </React.Fragment>
  );
};
