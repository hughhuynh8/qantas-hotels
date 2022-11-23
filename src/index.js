import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const app = <React.StrictMode><App/></React.StrictMode>

ReactDOM.createRoot(document.querySelector('#root')).render(app);