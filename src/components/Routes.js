import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Vaults from "./Vaults";
import VaultDetails from "./VaultDetails";
import Create from "./Create";
import Dashboard from "./Dashboard";
import Manage from "./Manage";

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/dashboard">
                    <Dashboard />
                </Route>

                <Route exact path="/vaults">
                    <Vaults />
                </Route>

                <Route path="/vaults/:symbol">
                    <VaultDetails />
                </Route>

                <Route exact path="/manage">
                    <Manage />
                </Route>

                <Route exact path="/create">
                    <Create />
                </Route>

                <Redirect to="/" />
            </Switch>
        </>
    );
};

export default Routes;
