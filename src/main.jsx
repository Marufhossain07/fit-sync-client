import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthProvider from './auth/AuthProvider.jsx'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async';
import PackageProvider from './auth/PackageProvider.jsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <PackageProvider>
    <RouterProvider router={router}></RouterProvider>
    </PackageProvider>
    </AuthProvider>
    </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
)
