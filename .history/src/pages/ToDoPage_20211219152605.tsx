import React from "react";
import { ToDoForm } from "../components/ToDoForm";

export const ToDoPage: React.FC = () => {
  const addToDo = (userInput: string) => {};
  return (
    <React.Fragment>
      <ToDoForm addToDo={addToDo} />
    </React.Fragment>
  );
};
