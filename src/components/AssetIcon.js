import React from "react";
import { Image } from "react-bootstrap";
import "./AssetIcon.scss";

const AssetIcon = ({ icon }) => {
    return (
        <div className="AssetIcon">
            <Image src={process.env.PUBLIC_URL + `/assets/${icon.toLowerCase()}`} />
        </div>
    );
};

export default AssetIcon;
