import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import {  GlobalStyles } from 'assets/styles/global';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <GlobalStyles/>
          <QueryClientProvider client={queryClient}>
              <Router />
            </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
