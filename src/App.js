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
        <div className="min-h-screen flex flex-col">
            <Navigation />
            <div className="relative flex-1 flex bg-gray-100 dark:bg-gray-900">
                <div className="flex flex-col w-0 flex-1">
                    <main className="flex flex-col items-center flex-1 relative z-0 pb-6 focus:outline-none md:pb-6">
                        <Routes />
                    </main>
                </div>
            </div>
        </div>
    );
}

export default App;
