import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware} from 'redux';

import App from './container/App';
import reducer from './reducers';

const createStoreWithMiddleWare = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleWare(reducer)}>
        <App/>
    </Provider>
,document.querySelector('#root'));