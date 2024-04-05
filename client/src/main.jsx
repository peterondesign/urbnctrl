import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import axiosInstance from './config/axioxConfig.js';
import { configure } from 'axios-hooks';

window.React = React;
configure({ axios: axiosInstance });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
