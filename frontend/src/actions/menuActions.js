import {
    MENU_LIST_REQUEST,
    MENU_LIST_SUCCESS,
    MENU_LIST_FAILS,
} from '../constants/menuConstants';

import axios from 'axios';

export const getMenuItems = () => async(dispatch) => {
    try {
        dispatch({ type: MENU_LIST_REQUEST });

        const { data } = await axios.get('/api/menu');

        dispatch({
            type: MENU_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: MENU_LIST_FAILS,
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message,
        });
    }
};