import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe("Pruebas en useCounter", () => {
   test("Debe de retornar los valores por defecto ", () => {
      // result.current es el return de mi useCounter()
      const { result } = renderHook(() => useCounter());

      expect(result.current.counter).toBe(10);
      expect(typeof result.current.increment).toBe("function");
      expect(typeof result.current.decrement).toBe("function");
      expect(typeof result.current.reset).toBe("function");
   });

   test("Debe de tener el counter en 1000 ", () => {
      // result.current es el return de mi useCounter()
      const { result } = renderHook(() => useCounter(1000));

      expect(result.current.counter).toBe(1000);
   });

   test("Debe de incrementar el counter en 1", () => {
      const { result } = renderHook(() => useCounter());
      const { increment } = result.current;

      act(() => {
         increment();
      });

      const { counter } = result.current;
      expect(counter).toBe(11);
   });

   test("Debe de restar el counter en 1", () => {
      const { result } = renderHook(() => useCounter());
      const { decrement } = result.current;

      act(() => {
         decrement();
      });

      const { counter } = result.current;
      expect(counter).toBe(9);
   });

   test("Debe de restablecer al valor por defecto", () => {
      const { result } = renderHook(() => useCounter());
      const { increment, reset } = result.current;

      act(() => {
         increment();
         reset();
      });

      const { counter } = result.current;
      expect(counter).toBe(10);
   });
});
