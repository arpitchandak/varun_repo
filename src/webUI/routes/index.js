import React from "react";
import { Switch ,Route} from "react-router-dom";
import LoginWEB from '../screens/LoginWEB'


export default function Routes() {
  return (
    <Switch>
        <Route exact path="/" component={LoginWEB} />
    </Switch>
  );
}