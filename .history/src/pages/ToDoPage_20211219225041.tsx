import React, { useState } from "react";
import { ToDoForm } from "../components/ToDoForm";
import { ToDoList } from "../components/ToDoList";
import { IToDo } from "../interFaces";

export const ToDoPage: React.FC = () => {
  const [todos, setToDos] = useState<IToDo[]>([]);

  const addToDo = (userInput: string) => {
    if (userInput) {
      const newItem: IToDo = {
        id: Math.random(),
        task: userInput,
        complete: false,
      };
      setToDos((prev) => [...prev, newItem]);
    }
  };

  const removeToDo = (id: number) => {
    const shouldRemove = confirm("Вы уверены что хотите удалит задание?");

    if (shouldRemove) {
      setToDos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  const completeHandler = (id: number) => {
    setToDos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      )
    );
  };

  return (
    <React.Fragment>
      <ToDoForm addToDo={addToDo} />
      <ToDoList
        todos={todos}
        removeToDo={removeToDo}
        completeHandler={completeHandler}
      />
    </React.Fragment>
  );
};
