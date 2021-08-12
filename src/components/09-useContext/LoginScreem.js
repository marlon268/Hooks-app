import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreem = () => {
   const { setUser } = useContext(UserContext);

   return (
      <div>
         <h1>LoginScreem</h1>
         <hr />
         <button
            className="btn btn-dark"
            onClick={() =>
               setUser({
                  id: 123,
                  name: "Marlon",
                  email: "marlon@gmail.com",
               })
            }
         >
            Login
         </button>
      </div>
   );
};
