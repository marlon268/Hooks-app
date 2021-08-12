import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {
   const { counter, increment } = useCounter(1);

   const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

   const { loading, data } = useFetch(url);

   // !!data transforma null a false
   const { author, quote } = !!data && data[0];

   return (
      <div>
         <h1>BreakingBad Quotes</h1>
         <hr />
         {loading ? (
            <div className="alert alert-info text-center bg-dark text-white">Loading...</div>
         ) : (
            <blockquote className="blockquote text-end">
               <p className="mb-0">{quote}</p>
               <footer className="blockquote-footer mt-1">{author}</footer>
            </blockquote>
         )}
         <button onClick={increment} className="btn btn-dark">
            Siguiente quote
         </button>
      </div>
   );
};
