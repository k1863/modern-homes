import { createSelector } from "reselect";

export const selectProperty = (state) => state.properties;

export const selectProperties = createSelector(
  [selectProperty],
  (property) => property
);
