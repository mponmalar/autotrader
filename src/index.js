import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Root from './routes/root';
import ErrorPage from './error-page';

import reportWebVitals from './reportWebVitals';
import GoogleAuth from './routes/GoogleAuth';
import Home from './components/Home';

import { store } from './store';
import { Provider } from 'react-redux';
import GetAccounts from './components/accounts/GetAccounts';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'GetAccounts',
        element: <GetAccounts />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
