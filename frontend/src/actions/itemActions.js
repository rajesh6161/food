import {
  ITEMS_LIST_REQUEST,
  ITEMS_LIST_SUCCESS,
  ITEMS_LIST_FAILS,
  ITEM_BY_ID_REQUEST,
  ITEM_BY_ID_SUCCESS,
  ITEM_BY_ID_FAILS,
} from '../constants/itemsConstants';

import axios from 'axios';

export const listItems = () => async (dispatch) => {
  try {
    dispatch({ type: ITEMS_LIST_REQUEST });

    const { data } = await axios.get('/api/items');

    dispatch({
      type: ITEMS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ITEMS_LIST_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getItemById = (id) => async (dispatch) => {
  try {
    dispatch({ type: ITEM_BY_ID_REQUEST });

    const { data } = await axios.get(`/api/items/${id}`);
    dispatch({
      type: ITEM_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ITEM_BY_ID_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
