import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { EmojiProvider } from './context/EmojisContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EmojiProvider>
      <App />
    </EmojiProvider>
  </React.StrictMode>
);
