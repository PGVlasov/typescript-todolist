import React, { useState } from "react";
import { ToDoForm } from "../components/ToDoForm";
import { ToDoList } from "../components/ToDoList";

export const ToDoPage: React.FC = () => {
  const [todos, setToDos] = useState([]);

  const addToDo = (userInput: string) => {};

  const removeToDo = (id: number) => {};

  const comleteHandler = (id: number) => {};

  return (
    <React.Fragment>
      <ToDoForm addToDo={addToDo} />
      <ToDoList
        todos={todos}
        removeToDo={removeToDo}
        comleteHandler={comleteHandler}
      />
    </React.Fragment>
  );
};
