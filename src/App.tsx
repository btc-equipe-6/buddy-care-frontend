import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import {  GlobalStyles } from 'assets/styles/global';
import Header from 'components/Header';
import { AuthProvider } from 'context/AuthContext';

const queryClient = new QueryClient();

function App() {
  return (
    <AuthProvider>
          <ThemeProvider theme={theme}>
      <BrowserRouter>
          <GlobalStyles/>
          <Header />

          <QueryClientProvider client={queryClient}>
              <Router />
            </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
    </AuthProvider>
    );
}

export default App;
