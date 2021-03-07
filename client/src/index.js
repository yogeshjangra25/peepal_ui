import React from 'react';
import ReactDOM  from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'

import App from './component/App';
import reducer from './reducer'

const store = createStore(reducer, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.querySelector('#root')
);