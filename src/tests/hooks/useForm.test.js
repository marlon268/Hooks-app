import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Pruebas en useForm", () => {
   const initialForm = {
      name: "Marlon",
      email: "Marlon@gmail.com",
   };

   test("Debe de regresar un formulario por defecto", () => {
      // Utilizamos toEqual para comparar objetos{}
      const { result } = renderHook(() => useForm(initialForm));

      const [formValues, handleInputChange, reset] = result.current;

      expect(formValues).toEqual(initialForm);
      expect(typeof handleInputChange).toBe("function");
      expect(typeof reset).toBe("function");
   });

   test("Debe de cambiar el valor de formulario(cambiar name)", () => {
      const { result } = renderHook(() => useForm(initialForm));
      const [, handleInputChange] = result.current;

      act(() => {
         handleInputChange({
            target: {
               name: "name",
               value: "Melisa",
            },
         });
      });

      const [formValues] = result.current;
      expect(formValues).toEqual({ ...initialForm, name: "Melisa" });
   });
   test("Debe de re-establecer el formulario con RESET", () => {
      const { result } = renderHook(() => useForm(initialForm));
      const [, handleInputChange, reset] = result.current;

      act(() => {
         handleInputChange({
            target: {
               name: "name",
               value: "Melisa",
            },
         });
         reset();
      });

      const [formValues] = result.current;
      expect(formValues).toEqual(initialForm);
   });
});
