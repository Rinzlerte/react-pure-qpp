import ReactDOM from 'react-dom/client'
import Duv from './components/Duv'
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import App from './components/App'
import ThemeProvider from './theme/ThemeProvaider'
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);