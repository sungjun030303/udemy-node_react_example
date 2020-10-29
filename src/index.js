import React from 'react';
import ReactDOM from 'react-dom';


import { createStore , applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import './index.css';

import reducer from './reducers'
import App from './components/event_index';
import eventNew from './components/event_new'
import eventShow from './components/event_show'

//import registerServiceWorker from './registerServiceWorker';

import thunk from 'redux-thunk'
import { BrowserRouter, Route,Switch} from 'react-router-dom'

import { composeWithDevTools } from 'redux-devtools-extension'

import reportWebVitals from './reportWebVitals';

const enhancer = process.env.NODE_ENV === 'development' ?
  composeWithDevTools( applyMiddleware(thunk)  ):applyMiddleware(thunk)

//const store = createStore( reducer , applyMiddleware(thunk) )
const store = createStore( reducer , enhancer )

ReactDOM.render(
  <Provider store ={store} >
    <BrowserRouter>
      <Switch>
        <Route path="/events/new"component={eventNew} />
        <Route path="/events/:id"component={eventShow} />
        <Route exact path="/"component={App} />
        <Route exact path="/events"component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')

  // <React.StrictMode>
  //  <App />
  // </React.StrictMode>,
  //document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
