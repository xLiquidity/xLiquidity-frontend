import React from "react";
import { useParams } from "react-router";

const VaultDetails = () => {
    const { symbol } = useParams();

    return (
        <div className="VaultDetails pt-5">
            <h1>Looking at {symbol} vault details page</h1>
        </div>
    );
};

export default VaultDetails;
