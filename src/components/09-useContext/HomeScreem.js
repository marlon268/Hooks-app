import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const HomeScreem = () => {

   const { user } = useContext(UserContext);


   return (
      <div>
         <h1>HomeScreem</h1>
         <hr />

         <pre>{JSON.stringify(user, null, 3)}</pre>
      </div>
   );

};
