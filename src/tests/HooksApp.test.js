import React from "react";
import { shallow } from "enzyme";
import { HooksApp } from "../HooksApp";

describe("Pruebas al componente <HooksApp/>", () => {
   test("Debe de mostrar el componente <HooksApp/>", () => {
      const wrapper = shallow(<HooksApp />);
      expect(wrapper).toMatchSnapshot();
   });
});
