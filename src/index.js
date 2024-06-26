import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/pages/App';
import '../src/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

