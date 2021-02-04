import React from "react";
import AssetIcon from "./AssetIcon";

const ConnectButton = ({ name, icon, handleClick }) => {
    return (
        <div className="ConnectButton">
            <button onClick={handleClick} value={name}>
                <div className="connect-button-name">{name}</div>
                <AssetIcon icon={icon} />
            </button>
        </div>
    );
};

export default ConnectButton;
