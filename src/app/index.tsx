import React from 'react';
import { createRoot } from 'react-dom/client';

import './styles/global.css'

import App from './App';

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(<App />);
});