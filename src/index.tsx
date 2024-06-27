import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext, AuthProvider } from './context/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SettingsProvider } from './context/SettingsContext';
import './utils/i18/i18n';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <SettingsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SettingsProvider>
    </AuthProvider>
  </QueryClientProvider>
);
