import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reducer = () => {};
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
