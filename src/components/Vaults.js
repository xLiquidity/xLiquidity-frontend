import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatBalance } from "../helpers";
import Header from "./Header";
import VaultTable from "./VaultTable";

const Vaults = () => {
    const { balance, balances } = useSelector((st) => st.user);
    const vaults = [
        {
            symbol: "eth",
            icon: "eth-icon.png",
            deposited: 0,
            availableToDeposit: formatBalance(balance),
            growth: 0,
            aum: 0,
        },
        {
            symbol: "dai",
            icon: "dai-logo.png",
            deposited: 0,
            availableToDeposit: 0,
            growth: 0,
            aum: 0,
        },
        {
            symbol: "usdc",
            icon: "usdc-icon.png",
            deposited: 0,
            availableToDeposit: 0,
            growth: 0,
            aum: 0,
        },
        {
            symbol: "wbtc",
            icon: "wbtc-icon.png",
            deposited: 0,
            availableToDeposit: 0,
            growth: 0,
            aum: 0,
        },
    ];

    return (
        <div className="flex-1 max-w-7xl w-full pb-12 px-4 sm:px-6 lg:px-8">
            <Header title={"Vaults"} />
            <div className="overflow-x-auto">
                <VaultTable vaults={vaults} />
            </div>
        </div>
    );
};

export default Vaults;
