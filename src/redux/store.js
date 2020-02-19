import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import root_reducer from './root_reducer';

const store = createStore(root_reducer, applyMiddleware(thunk));
export default store;