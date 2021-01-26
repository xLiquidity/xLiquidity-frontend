import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import VaultWrapper from "./VaultWrapper";
import VaultDetails from "./VaultDetails";

const Routes = () => {
    return (
        <div className="Routes">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/vaults">
                    <VaultWrapper />
                </Route>

                <Route path="/vaults/:symbol">
                    <VaultDetails />
                </Route>

                <Redirect to="/" />
            </Switch>
        </div>
    );
};

export default Routes;
