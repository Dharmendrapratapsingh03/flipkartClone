import { createStore, combineReducers, applyMiddleware } from 'redux';
import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducer';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//import { getProductsReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';

const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductsDetails: getProductDetailsReducer,
    cart: cartReducer
});

const middleware = [thunk];

const store = createStore(
      reducer,
      composeWithDevTools(applyMiddleware(...middleware))
)