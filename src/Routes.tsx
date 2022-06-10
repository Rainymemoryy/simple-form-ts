import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { path } from './constants/path'
import CreateTemplate from './pages/CreateTemplatePage/CreateTemplate'
import Home from './pages/CreateTemplatePage/Home'
import NotFound from './pages/CreateTemplatePage/NotFound'

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
            <CreateTemplate />
          </Suspense>
        }
      />
      <Route path={path.notFound} element={<NotFound />} />
    </Routes>
  )
}
