import { useState } from "react";

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    // якщо ми викликаємо декілька раз у якоїсь функції наш setState, то ми повинні посилатись на наш попередній стейт таким ось колбеком, тоді все буде вірно працювати
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
  };

  const decrement = () => {
    setCount((prevState) => prevState - 1);
    setCount((prevState) => prevState - 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment me</button>
      <button onClick={decrement}>Decrement me</button>
    </div>
  );
};

export default CounterComponent;
