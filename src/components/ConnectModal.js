import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { resetAccountInState } from "../actions/user";
import ConnectButton from "./ConnectButton";
import "./ConnectModal.scss";

const ConnectModal = ({ show, handleClose }) => {
    const dispatch = useDispatch();
    const { account } = useSelector((st) => st.user);
    const [connecting, setConnecting] = useState(false);

    const connections = [
        { name: "Metamask", icon: "metamask.png" },
        { name: "WalletConnect", icon: "walletconnecticon.svg" },
        { name: "Coinbase Wallet", icon: "coinbasewalleticon.svg" },
        { name: "Ledger", icon: "ledger.png" },
        { name: "Trezor", icon: "trezor.png" },
    ];

    const handleConnect = (e) => {
        const { ethereum } = window;

        setConnecting(true);
        ethereum.request({ method: "eth_requestAccounts" });
        setConnecting(false);
    };

    return (
        <>
            <Modal className="ConnectModal" show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {account && "Connected"}
                        {!account && !connecting && "Connect Wallet"}
                        {!account && connecting && "Connecting..."}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="connections">
                        {account && <p>{account}</p>}
                        {!account &&
                            connections.map((conn, idx) => (
                                <ConnectButton
                                    key={idx}
                                    name={conn.name}
                                    icon={conn.icon}
                                    handleClick={handleConnect}
                                />
                            ))}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ConnectModal;
