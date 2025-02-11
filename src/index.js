import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Store from './store/Store';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
      <ToastContainer
      pauseOnHover
     
      autoClose={1500}
      toastStyle={{
        fontSize:'14px',
        background: 'var(--background)',
        color: 'var(--textWhite)',
      }}
      closeButton={true}
      />
    </Provider>
  </React.StrictMode>
);

