import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

import "./syles.css";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

// lo que retorna la funcion init va a ser lo que se introduzca en el estado inicial (initialstate)
const init = () => {
   return JSON.parse(localStorage.getItem("todos")) || [];

   /* return [
      {
         id: new Date().getTime(),
         desc: "Aprender React",
         done: false,
      },
   ]; */
};

export const TodoApp = () => {
   const [todos, dispatch] = useReducer(todoReducer, [], init);

   // el local storage solo guarda strings
   useEffect(() => {
      // lo pasamos por JSON.stringify para transformar el odjeto en un string
      localStorage.setItem("todos", JSON.stringify(todos));
   }, [todos]);

   // handleDelete elimina un objeto de mi arreglo de estado pasandole el todo.id
   const handleDelete = (todoId) => {

      const action = {
         type: "delete",
         payload: todoId,
      };

      dispatch(action);

   };

   // handleToggle tacha una tarea cambiando el estado de done:false a done:true
   const handleToggle = (todoId) => {
      dispatch({
         type: "toggle",
         payload: todoId,
      });
   };

   const handleAddTodo = (newTodo) => {
      dispatch({
         type: "add",
         payload: newTodo,
      });
   };

   // handleSubmid Agrega un nuevo elemento a mi arreglo de estado

   return (
      <div>
         <h1>TodoApp ( {todos.length} )</h1>
         <hr />
         <div className="row">
            <div className="col-7">
               <TodoList
                  todos={todos}
                  handleDelete={handleDelete}
                  handleToggle={handleToggle}
               />
            </div>
            <div className="col-5">
               <TodoAdd handleAddTodo={handleAddTodo} />
            </div>
         </div>
      </div>
   );
};
