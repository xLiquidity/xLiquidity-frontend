import React from "react";
import { useParams } from "react-router";
import Header from "./Header";

const VaultDetails = () => {
    const { symbol } = useParams();

    return (
        <div className="flex-1 max-w-7xl w-full pb-12 px-4 sm:px-6 lg:px-8">
            <Header title={`Vault: ${symbol.toUpperCase()}`} />
            <div className="overflow-x-auto">something</div>
        </div>
    );
};

export default VaultDetails;
