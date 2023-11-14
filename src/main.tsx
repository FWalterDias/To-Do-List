import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainRoutes } from './routes.tsx';
import GlobalStyle from './styles/globalStyle.ts';
import theme from "./styles/designSystem.ts";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './Contexts/UserContext.tsx';
import { ErrorProvider } from "./Contexts/ErrorsContex.tsx";
import { ModalProvider } from "./Contexts/ModalContext";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <ErrorProvider>
        <ModalProvider>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <MainRoutes />
            </ThemeProvider>
          </BrowserRouter>
        </ModalProvider>
      </ErrorProvider>
    </UserProvider>
  </React.StrictMode>,
);