import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { AboutScreem } from "./AboutScreem";
import { HomeScreem } from "./HomeScreem";
import { LoginScreem } from "./LoginScreem";
import { NavBar } from "./NavBar";

export const AppRouter = () => {
   return (
      <Router>
         <div>
            <NavBar />
            <div className="container">
               <Switch>
                  <Route exact path="/" component={HomeScreem} />
                  <Route exact path="/about" component={AboutScreem} />
                  <Route exact path="/login" component={LoginScreem} />
                  <Redirect to="/" />
               </Switch>
            </div>
         </div>
      </Router>
   );
};
