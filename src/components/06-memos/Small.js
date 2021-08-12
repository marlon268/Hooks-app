import React from "react";

export const Small = React.memo(({ value }) => {
   console.log("Cambió");

   return <small>{value}</small>;
});
