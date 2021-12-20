import React, { useState } from "react";

interface ToDoFormProps {
  addToDo(userInput: string): void;
}

export const ToDoForm: React.FC<ToDoFormProps> = (props) => {
  const [userInput, setUserInput] = useState("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const keyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.addToDo(userInput);
      setUserInput("");
    }
  };

  return (
    <div className="input-field mt2">
      <input
        type="text"
        id="title"
        value={userInput}
        placeholder="введите задание...."
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
      />
      <label htmlFor="title" className="active">
        Введите задание
      </label>
    </div>
  );
};
