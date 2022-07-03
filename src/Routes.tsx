import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { path } from './constants/path'
import CreateTemplatePage from './pages/CreateTemplatePage'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ResponseFormPage from './pages/ResponseFormPage'

// const Home = lazy(() => import('./pages/Home/Home'))

const Fallback = () => <div></div>

export default function RoutesApp() {
  return (
    <Routes>
      <Route
        path={path.home}
        element={
          <Suspense fallback={<Fallback />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path={path.createTemplate}
        element={
          <Suspense fallback={<Fallback />}>
            <CreateTemplatePage />
          </Suspense>
        }
      />
      <Route
        path={path.response}
        element={
          <Suspense fallback={<Fallback />}>
            <ResponseFormPage />
          </Suspense>
        }
      />
      <Route path={path.notFound} element={<NotFound />} />
    </Routes>
  )
}
