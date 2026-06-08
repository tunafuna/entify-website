import React from 'react';
import ReactDOM from 'react-dom/client';
import './tokens.css';
import './global.css';
import { Homepage } from './pages/Homepage/Homepage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);
