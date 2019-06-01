import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

export const getItems = () => dispatch => {
  // this return is going to the itemReducer and checking the action.type
  // return {
  //   type: GET_ITEMS
  // }

  dispatch(setItemsLoading());
  axios
    .get('/api/items')
    .then(res => dispatch({
      type: GET_ITEMS,
      payload: res.data
    }))
}

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id
  }
}

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item
  }
}

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}