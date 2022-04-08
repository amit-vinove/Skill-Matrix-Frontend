import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { QueryClient, QueryClientProvider } from "react-query";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <App/>
    </QueryClientProvider>

  </React.StrictMode>,
  document.getElementById('root')
);


