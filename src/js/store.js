import { createStore} from "redux";
import moviereducer from "./moviereducer";
const dvt = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store = createStore(moviereducer,dvt)