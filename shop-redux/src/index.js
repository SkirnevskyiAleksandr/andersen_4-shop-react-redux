import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { legacy_createStore, applyMiddleware } from 'redux';
import { rootReducer } from './redux/rootReducer';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store = legacy_createStore(rootReducer, applyMiddleware(reduxThunk));
store.subscribe(() => { console.log(store.getState()) });

const app = <Provider store={store}> <App /> </Provider>;


export const usersListThunkCreator = () => {
  return async function (dispatch) {

    await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=12')
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: 'GET_USERS_LIST_FROM_API',
          usersList: res
        })
      })
  };
};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter >
    {app}
  </BrowserRouter>
);


