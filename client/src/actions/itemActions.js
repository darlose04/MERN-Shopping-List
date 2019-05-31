import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

export const getItems = () => {
  // this return is going to the itemReducer and checking the action.type
  return {
    type: GET_ITEMS
  }
}

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id
  }
}