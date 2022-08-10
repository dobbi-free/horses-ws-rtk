import horses from "./reducers/horsesSlice";
import {combineReducers} from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  horses,
});
