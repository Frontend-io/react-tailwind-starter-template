import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";;
import ProtectedRoute from './protectedRoute'
import { NotFound } from "../../pages";


const RouterMain = () => {
  const routes = []
   
  return (
    <Switch>
      {
        routes.map((r,i)=> (
          r.protected ?
            <ProtectedRoute key={i} {...r} />
          :
            <Route key={i} {...r}/>
        ))
      }
      <Redirect from='/' exact to="dashboard" />
      <Route path="*" render={(routerProps) => <NotFound {...routerProps} />} />
    </Switch>
  );
};

export default RouterMain;

