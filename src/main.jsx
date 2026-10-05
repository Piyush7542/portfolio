// ============================================
// ENTRY POINT - Enhanced
// ============================================

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './assets/main.css';

// Initialize theme from localStorage before render to prevent flash
(function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  const themes = ['dark', 'light', 'ocean', 'sunset', 'forest'];
  const theme = themes.includes(savedTheme) ? savedTheme : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  document.body.style.visibility = 'hidden'; // Will be made visible by App component
})();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);