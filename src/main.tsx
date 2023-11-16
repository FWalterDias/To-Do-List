import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainRoutes } from './routes.tsx';
import GlobalStyle from './styles/globalStyle.ts';
import theme from "./styles/designSystem.ts";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext.tsx';
import { ErrorProvider } from "./contexts/ErrorsContext.tsx";
import { ModalProvider } from "./contexts/ModalContext.tsx";
import { TasksProvider } from "./contexts/TasksContext.tsx";
import { FilterProvider } from './contexts/FilterContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <ErrorProvider>
        <ModalProvider>
          <TasksProvider >
            <FilterProvider>
              <BrowserRouter>
                <ThemeProvider theme={theme}>
                  <GlobalStyle />
                  <MainRoutes />
                </ThemeProvider>
              </BrowserRouter>
            </FilterProvider>
          </TasksProvider>
        </ModalProvider>
      </ErrorProvider>
    </UserProvider>
  </React.StrictMode>,
);