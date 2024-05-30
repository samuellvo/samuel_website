import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './Misc/reportWebVitals';

// i like this font
const link = document.createElement('link')
link.rel = 
link.href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
document.head.appendChild(link);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
