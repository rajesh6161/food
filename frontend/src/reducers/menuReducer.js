import {
    MENU_LIST_REQUEST,
    MENU_LIST_SUCCESS,
    MENU_LIST_FAILS,
} from '../constants/menuConstants';

const initialState = {
    menuItems: [],
    loading: false,
    error: null,
};
export const menuItems = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case MENU_LIST_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case MENU_LIST_SUCCESS:
            return {
                ...state,
                menuItems: payload,
                loading: false,
            };
        case MENU_LIST_FAILS:
            return {
                ...state,
                loading: false,
            };

        default:
            return state;
    }
};