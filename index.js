// ============================
// Entry Point of React App
// ============================
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Import React Query essentials
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Import React Router
import { BrowserRouter } from 'react-router-dom'

// Create a single QueryClient (React Query's "brain" for caching)
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  // Provide QueryClient globally to your app
  <QueryClientProvider client={queryClient}>
    {/* Enable routing */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
)

/*QueryClient = React Query's brain 🧠 (manages cache & refetching).

QueryClientProvider = Makes React Query available everywhere.

BrowserRouter = Handles routes like /users or /user/1*/