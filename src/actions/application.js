import { SHOW_CONNECT_MODAL, HIDE_CONNECT_MODAL, RESET_APP } from "./types";

export function showConnectModalInState() {
    return async function (dispatch) {
        return dispatch(showConnectModal());
    };
}

export function hideConnectModalInState() {
    return async function (dispatch) {
        return dispatch(hideConnectModal());
    };
}

function showConnectModal() {
    return {
        type: SHOW_CONNECT_MODAL,
    };
}

function hideConnectModal() {
    return {
        type: HIDE_CONNECT_MODAL,
    };
}

export function resetAppInState() {
    return {
        type: RESET_APP,
    };
}
