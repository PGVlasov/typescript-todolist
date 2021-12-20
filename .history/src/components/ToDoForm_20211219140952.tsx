import React, { useState } from "react";

interface ToDoFormProps {
  addToDo(userInput: string): void;
}

export const ToDoForm: React.FC<ToDoFormProps> = (props) => {
  const [userInput, setUserInput] = useState("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {};
  return;
  <div className="input-field mt2">
    <input
      type="text"
      value={userInput}
      placeholder="введите значение"
      onChange={changeHandler}
    />
    <label htmlFor="title" className="active">
      Введите задание
    </label>
  </div>;
};
