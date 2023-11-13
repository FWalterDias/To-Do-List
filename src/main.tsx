import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainRoutes } from './routes.tsx';
import GlobalStyle from './styles/globalStyle.ts';
import theme from "./styles/designSystem.ts";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainRoutes />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
