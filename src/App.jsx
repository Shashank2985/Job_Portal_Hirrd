import React from 'react'
import './App.css'
import { Button } from './components/ui/button.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/AppLayout.jsx'
import LandingPage from './pages/LandingPage.jsx'
import Onboarding from './pages/Onboarding.jsx'
import JobListing from './pages/JobListing.jsx'
import PostJob from './pages/PostJob.jsx'
import MyJobs from './pages/MyJobs.jsx'
import SavedJobs from './pages/SavedJobs.jsx'
import JobPage from './pages/JobPage.jsx'
import { ThemeProvider } from "./components/theme-provider";
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/onboarding",
          element: (
            <ProtectedRoute>
              <Onboarding />
            </ProtectedRoute>
          ),
        },
        {
          path: "/jobs",
          element: (
            <ProtectedRoute>
              <JobListing />
            </ProtectedRoute>
          ),
        },
        {
          path: "/post-job",
          element: (
            <ProtectedRoute>
              <PostJob />
            </ProtectedRoute>
          ),
        },
        {
          path: "/my-jobs",
          element: (
            <ProtectedRoute>
              <MyJobs />
            </ProtectedRoute>
          ),
        },
        {
          path: "/saved-jobs",
          element: (
            <ProtectedRoute>
              <SavedJobs />
            </ProtectedRoute>
          ),
        },
        {
          path: "/job/:id",
          element: (
            <ProtectedRoute>
              <JobPage />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
