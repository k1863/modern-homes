import { combineReducers } from "redux";
import userReducer from "./user/userReducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import propertyReducer from "./property/propertyReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["property"],
};

const rootReducer = combineReducers({
  user: userReducer,
  properties: propertyReducer,
});

export default persistReducer(persistConfig, rootReducer);
