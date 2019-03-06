import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux' ;
import { createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import App from './component/App';

import reducers from './reducers';

const createStoreWithMiddleWare = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleWare(reducers)}>
        <App/>
    </Provider>
, document.getElementById('root'));