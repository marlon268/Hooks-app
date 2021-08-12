import React, { useEffect, useState } from "react";
import { AppRouter } from "./AppRouter";
import { UserContext } from "./UserContext";

const init = () => {
   return JSON.parse(localStorage.getItem("users")) || {};
};

export const MainApp = () => {
   const [user, setUser] = useState(init());

   useEffect(() => {
      localStorage.setItem("users", JSON.stringify(user));
   }, [user]);

   return (
      <UserContext.Provider
         value={{
            user,
            setUser,
         }}
      >
         <AppRouter />
      </UserContext.Provider>
   );
};
