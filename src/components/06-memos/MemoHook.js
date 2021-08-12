import React, { useMemo, useState } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import { useCounter } from "../../hooks/useCounter";

import "../02-useEffect/effects.css";

export const MemoHook = () => {
   const { counter, increment } = useCounter(2000);
   const [show, setShow] = useState(true);

   const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

   return (
      <div>
         <h1>MemoHook</h1>
         <h3>
            counter: <small>{counter}</small>
         </h3>
         <hr />

         <p>{memoProcesoPesado}</p>

         <button className="btn btn-dark m-2" onClick={increment}>
            +1
         </button>

         <button
            className="btn btn-outline-dark"
            onClick={() => {
               setShow(!show);
            }}
         >
            Show/Hide {JSON.stringify(show)}
         </button>
      </div>
   );
};
