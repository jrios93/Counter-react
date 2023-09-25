import { useCounter } from "../hooks/useCounter";
export const ContadorComponent = () => {
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <>
      <h1>Contador: {counter}</h1>
      <button className="btn-primary" onClick={() => increment()}>
        +1
      </button>
      <button className="btn-danger" onClick={() => reset()}>
        Reset
      </button>
      <button className="btn-primary" onClick={() => decrement()}>
        -1
      </button>
    </>
  );
};
