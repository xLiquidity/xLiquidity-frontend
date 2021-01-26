import React from "react";
import { useSelector } from "react-redux";
import { formatBalance } from "../helpers";
import VaultAccordion from "./VaultAccordion";
import "./Vaults.scss";

const Vaults = () => {
    const { balance, balances } = useSelector((st) => st.user);
    const vaults = [
        {
            symbol: "eth",
            icon: "eth-icon.png",
            deposited: 0,
            availableToDeposit: formatBalance(balance),
            growth: 0,
            totalAssets: 0,
        },
        {
            symbol: "dai",
            icon: "dai-logo.png",
            deposited: 0,
            availableToDeposit: 0,
            growth: 0,
            totalAssets: 0,
        },
        {
            symbol: "usdc",
            icon: "usdc-icon.png",
            deposited: 0,
            availableToDeposit: 0,
            growth: 0,
            totalAssets: 0,
        },
        {
            symbol: "wbtc",
            icon: "wbtc-icon.png",
            deposited: 0,
            availableToDeposit: 0,
            growth: 0,
            totalAssets: 0,
        },
    ];

    return (
        <div className="Vaults">
            <div className="vaults-header">
                <div>Asset</div>
                <div>Deposited</div>
                <div>Growth</div>
                <div>Total Assets</div>
                <div>Available To Deposit</div>
                <div>Performance</div>
            </div>
            {vaults.map((vault) => (
                <VaultAccordion
                    key={vault.symbol}
                    symbol={vault.symbol}
                    deposited={vault.deposited}
                    availableToDeposit={vault.availableToDeposit}
                    growth={vault.growth}
                    totalAssets={vault.totalAssets}
                    icon={vault.icon}
                />
            ))}
        </div>
    );
};

export default Vaults;
