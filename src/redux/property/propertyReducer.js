import { searchPropertyItem } from "./propertyUtils";
import PropertyActionTypes from "./propertyActionTypes";

const INITIAL_STATE = {
  properties: null,
};

const propertyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PropertyActionTypes.UPDATE_PROPERTIES:
      return {
        ...state,
        properties: action.payload,
      };
    case PropertyActionTypes.SEARCH_PROPERTIES:
      return {
        ...state,
        collections: searchPropertyItem(state.properties, action.payload),
      };
    default:
      return state;
  }
};

export default propertyReducer;
