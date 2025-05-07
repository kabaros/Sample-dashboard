import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DataProvider } from '@dhis2/app-runtime';
import App from './App.jsx';
import './index.css';

const FULL_ROUTE = window.location.href;
export const SERVER_URL = FULL_ROUTE.substring(0, FULL_ROUTE.indexOf('/api/apps'));

createRoot(document.getElementById('root')).render(
      <StrictMode>
            <DataProvider baseUrl={SERVER_URL}>
                  <App />
            </DataProvider>
      </StrictMode>
);
