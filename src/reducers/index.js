import { combineReducers } from "redux";

import profiles from "./reducer_profiles";
import input from "./reducer_input";
import loading from "./reducer_loading";
import settings from "./reducer_settings";
import error from "./reducer_error";
import picking from "./reducer_picking";
import removedItems from "./reducer_removed_items";
import winners from "./reducer_winners";

const rootReducer = combineReducers({
  input,
  profiles,
  winners,
  loading,
  picking,
  error,
  removedItems,
  settings
});

export default rootReducer;
