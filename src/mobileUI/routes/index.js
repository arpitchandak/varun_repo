import React from "react";
import { Switch ,Route} from "react-router-dom";
import LoginMOBILE from "../screens/LoginMOBILE";


export default function RoutesMOB() {
  return (
    <Switch>
        <Route exact path="/" component={LoginMOBILE} />
    </Switch>
  );
}