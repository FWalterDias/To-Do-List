import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainRoutes } from './routes.tsx';
import GlobalStyle from './styles/globalStyle.ts';
import theme from "./styles/designSystem.ts";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './Contexts/UserContext.tsx';
import { ErrorProvider } from "./Contexts/ErrorsContext.tsx";
import { ModalProvider } from "./Contexts/ModalContext";
import { TasksProvider } from "./Contexts/TasksContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <ErrorProvider>
        <ModalProvider>
          <TasksProvider >
            <BrowserRouter>
              <ThemeProvider theme={theme}>
                <GlobalStyle />
                <MainRoutes />
              </ThemeProvider>
            </BrowserRouter>
          </TasksProvider>
        </ModalProvider>
      </ErrorProvider>
    </UserProvider>
  </React.StrictMode>,
);