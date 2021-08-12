import React from "react";
import { shallow } from "enzyme";
import { TodoList } from "../../../components/08-useReducer/TodoList";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en <TodoList/>", () => {
   const handleDelete = jest.fn();
   const handleToggle = jest.fn();

   const wrraper = shallow(
      <TodoList todos={demoTodos} handleDelete={handleDelete} handleToggle={handleToggle} />
   );

   test("Debe de mostrarse correctamente", () => {
      expect(wrraper).toMatchSnapshot();
   });

   test("Debe de tener dos <TodoListItem/>", () => {
      expect(wrraper.find("TodoListItem").length).toBe(demoTodos.length);

      expect(wrraper.find("TodoListItem").at(0).prop("handleDelete")).toEqual(expect.any(Function));
   });
});
