import PropertyActionTypes from "./propertyActionTypes";

export const updateProperties = (propertiesMap) => ({
  type: PropertyActionTypes.UPDATE_PROPERTIES,
  payload: propertiesMap,
});

export const searchProperties = (propertiesMap) => ({
  type: PropertyActionTypes.SEARCH_PROPERTIES,
  payload: propertiesMap,
});
