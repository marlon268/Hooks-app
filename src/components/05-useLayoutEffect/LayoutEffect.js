import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";

export const LayoutEffect = () => {
   const { counter, increment } = useCounter(1);

   const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

   const { data } = useFetch(url);

   // !!data transforma null a false
   const { quote } = !!data && data[0];

   const pTag = useRef();
   const [boxSize, setBoxSize] = useState({});

   useLayoutEffect(() => {
      setBoxSize(pTag.current.getBoundingClientRect());
   }, [quote]);

   return (
      <div>
         <h1>Layout Effect</h1>
         <hr />

         <blockquote className="blockquote text-end">
            <p ref={pTag} className="mb-0">
               {quote}
            </p>
         </blockquote>

         <pre>{JSON.stringify(boxSize, null, 3)}</pre>

         <button onClick={increment} className="btn btn-dark">
            Siguiente quote
         </button>
      </div>
   );
};
