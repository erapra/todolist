import { combineReducers, createStore, applyMiddleware } from "redux";
import listReducer from "./listReducer";
import currentuserReducer from "./currentuserReducer";
import listMiddleWare from "./middleware/listMiddleware";
//import { composeEnhancers } from "redux-devtools-extension";

const rootReducer = combineReducers({
  currentUser: currentuserReducer,
  list: listReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const preInitialState = () => {
  if (
    localStorage.getItem("list") &&
    JSON.stringify(localStorage.getItem("list"))
  ) {
    const newList = JSON.parse(localStorage.getItem("list"));
    return { currentUser: "", list: newList };
  } else {
    return { currentUser: "", list: [] };
  }
};

const store = createStore(
  rootReducer,
  preInitialState(),
  composeEnhancers(applyMiddleware(listMiddleWare))
);
export default store;
