import React from 'react';
import ReactDOM from 'react-dom/client'; // Исправлено для React 18+
import './index.css'; // Будет сгенерирован Tailwind CSS
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();