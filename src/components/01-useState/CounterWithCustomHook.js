import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./counter.css";

export const CounterWithCustomHook = () => {
   const { state: counter, increment, decrement, reset } = useCounter(100);
   return (
      <>
         <h1>Counter with hook: {counter}</h1>
         <hr />

         <button onClick={() => increment()} className="btn btn-dark">
            +1
         </button>
         <button onClick={() => reset()} className="btn btn-dark reset">
            Reset
         </button>
         <button onClick={() => decrement()} className="btn btn-dark">
            -1
         </button>
      </>
   );
};
