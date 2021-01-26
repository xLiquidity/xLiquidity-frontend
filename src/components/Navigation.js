import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Navbar, Nav, Image } from "react-bootstrap";
import {
    showConnectModalInState,
    hideConnectModalInState,
} from "../actions/application";
import { formatAddress } from "./helpers";
import ConnectModal from "./ConnectModal";
import "./Navigation.scss";

const Navigation = () => {
    const dispatch = useDispatch();
    const { account } = useSelector((st) => st.user);
    const { showConnectModal } = useSelector((st) => st.application);
    const handleShowModal = () => dispatch(showConnectModalInState());
    const handleCloseModal = () => dispatch(hideConnectModalInState());

    const connectRender = (
        <Nav.Item>
            <button onClick={handleShowModal}>
                {account ? formatAddress(account) : "Connect"}
            </button>
            <ConnectModal show={showConnectModal} handleClose={handleCloseModal} />
        </Nav.Item>
    );

    return (
        <div className="Navigation">
            <Navbar>
                <Navbar.Brand className="nav-brand" as={Link} to="/">
                    xLiquidity
                </Navbar.Brand>
                <Nav className="mr-auto nav-menu">
                    <Nav.Link as={Link} to="/vaults">
                        Vaults
                    </Nav.Link>
                </Nav>
                <Nav className="connect-button ml-auto">{connectRender}</Nav>
            </Navbar>
        </div>
    );
};

export default Navigation;
