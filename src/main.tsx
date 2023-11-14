import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainRoutes } from './routes.tsx';
import GlobalStyle from './styles/globalStyle.ts';
import theme from "./styles/designSystem.ts";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './Contexts/UserContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <MainRoutes />
        </ThemeProvider>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
);