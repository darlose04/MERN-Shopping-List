// this is where the app state is going to go
// where we check our actions (from the actions file)
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';
import uuid from 'uuid';

const initialState = {
  // don't want this static data in the array since the data is going to be coming from the backend
  items: [
    // { id: uuid(), name: 'Eggs'},
    // { id: uuid(), name: 'Milk'},
    // { id: uuid(), name: 'Steak'},
    // { id: uuid(), name: 'Water'}
  ],
  loading: false
}

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      }
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      }
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}