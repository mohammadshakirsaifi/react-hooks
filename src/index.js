import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';             // Custom styles (optional)
import App from './App';          // Main App component
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Commented out reportWebVitals — not needed unless you're measuring performance.
