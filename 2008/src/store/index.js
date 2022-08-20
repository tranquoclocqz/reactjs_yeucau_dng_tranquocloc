import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import authReducer from './auth/reducer';
import postReducer from './post/reducer';
import categoryReducer from './category/reducer';
import logger from 'redux-logger'


const rootReducer = combineReducers({
  Post: postReducer,
  Auth: authReducer,
  Category: categoryReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;