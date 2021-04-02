import {
  ITEMS_LIST_REQUEST,
  ITEMS_LIST_SUCCESS,
  ITEMS_LIST_FAILS,
  ITEM_BY_ID_REQUEST,
  ITEM_BY_ID_SUCCESS,
  ITEM_BY_ID_FAILS,
} from '../constants/itemsConstants';

export const listItems = (state = { items: [] }, action) => {
  switch (action.type) {
    case ITEMS_LIST_REQUEST:
      return { items: [], loading: true };
    case ITEMS_LIST_SUCCESS:
      return { items: action.payload, loading: false };
    case ITEMS_LIST_FAILS:
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};

export const getItemById = (state = { item: { reviews: [] } }, action) => {
  switch (action.type) {
    case ITEM_BY_ID_REQUEST:
      return { ...state, loading: true };
    case ITEM_BY_ID_SUCCESS:
      return { item: action.payload, loading: false };
    case ITEM_BY_ID_FAILS:
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};
