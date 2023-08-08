import ReactDOM from 'react-dom/client'
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import App from './app/App'
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvaider'
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