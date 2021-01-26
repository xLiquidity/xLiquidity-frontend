import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Routes from "./components/Routes";
import Navigation from "./components/Navigation";
import {
    getAccount,
    updateAccount,
    loadProvider,
    loadSigner,
    loadBalance,
    loadTokenBalances,
} from "./interactions/interactions";
import "./App.scss";
import { daiContractAddress } from "./config/config";

function App() {
    const dispatch = useDispatch();
    const { account, balance } = useSelector((st) => st.user);
    const tokenAddress = daiContractAddress;

    useEffect(() => {
        async function loadInitDetails() {
            getAccount(dispatch, window);
            updateAccount(dispatch, window);
            const provider = loadProvider(dispatch);
            const signer = loadSigner(dispatch);
            loadBalance(dispatch, provider, account);
            loadTokenBalances(dispatch, provider, account);
        }
        loadInitDetails();
    }, [updateAccount, dispatch, account]);

    return (
        <div className="App">
            <Navigation />
            <Routes />
        </div>
    );
}

export default App;
