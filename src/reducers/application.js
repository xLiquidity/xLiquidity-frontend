import { SHOW_CONNECT_MODAL, HIDE_CONNECT_MODAL, RESET_APP } from "../actions/types";

const INITIAL_STATE = { showConnectModal: false };

export default function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SHOW_CONNECT_MODAL:
            return { ...state, showConnectModal: true };
        case HIDE_CONNECT_MODAL:
            return { ...state, showConnectModal: false };

        case RESET_APP:
            return INITIAL_STATE;

        default:
            return state;
    }
}
