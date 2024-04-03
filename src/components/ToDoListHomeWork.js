import React, { useState } from "react";

const ToDoListHomeWork = () => {
  const [input, setInput] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [count, setCount] = useState(0);

  const onClickListAdd = () => {
    const updatedList = [...toDoList, input];
    setToDoList(updatedList);
    setInput("");
  };

  const onClickCount = () => {
    setCount(count + 1);
  };

  const onChangeAdd = (event) => {
    const value = event.target.value;
    setInput(value);
  };

  const onKeyPressAdd = (event) => {
    if (event.key === "Enter") {
      onClickListAdd();
      onClickCount();
    }
  };

  return (
    <div className="to-do-list">
      <input
        onChange={onChangeAdd}
        onKeyPress={onKeyPressAdd}
        value={input}
        className="input-to-do"
      />
      <p>Список справ: {count}</p>
      <ul>
        {toDoList.map((elem, index) => (
          <li key={`${elem}${index}`}>{`${index + 1}. ${elem}`}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          onClickListAdd();
          onClickCount();
        }}
      >
        Add TO DO
      </button>
    </div>
  );
};

export default ToDoListHomeWork;
