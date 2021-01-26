import { ethers } from "ethers";
import { assets } from "../config/config";
import {
    accountLoaded,
    accountUpdated,
    providerLoaded,
    signerLoaded,
    balanceLoaded,
    tokenBalancesLoaded,
} from "../actions/user";

export const getAccount = async (dispatch, window) => {
    const { ethereum } = window;
    if (ethereum) {
        const accounts = await ethereum.request({ method: "eth_accounts" });
        dispatch(accountLoaded(accounts[0]));
    }
};

export const updateAccount = (dispatch, window) => {
    const { ethereum } = window;
    if (ethereum) {
        ethereum.on("accountsChanged", (accounts) => {
            dispatch(accountUpdated(accounts[0]));
        });
    }
};

export const loadProvider = (dispatch) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    dispatch(providerLoaded(provider));
    return provider;
};

export const loadSigner = (dispatch) => {
    const provider = loadProvider(dispatch);
    const signer = provider.getSigner();
    dispatch(signerLoaded(signer));
    return signer;
};

export const loadBalance = async (dispatch, provider, account) => {
    const balance = await provider.getBalance(account);
    const formattedEther = ethers.utils.formatEther(balance);
    dispatch(balanceLoaded(formattedEther));
    return formattedEther;
};

export const loadTokenBalance = async (provider, account, tokenAddress, tokenAbi) => {
    const tokenContract = new ethers.Contract(tokenAddress, tokenAbi, provider);
    const balance = await tokenContract.balanceOf(account);
    return balance;
};

export const loadTokenBalances = async (dispatch, provider, account) => {
    let balances = [];

    try {
        for (const asset of assets) {
            const balance = await loadTokenBalance(
                provider,
                account,
                asset.address,
                asset.abi
            );
            const formattedBalance = ethers.utils.formatUnits(balance, 18);
            balances.push({ asset: asset.symbol, balance: formattedBalance });
        }
    } catch (err) {
        console.log(err);
    }

    dispatch(tokenBalancesLoaded(balances));
    return balances;
};
