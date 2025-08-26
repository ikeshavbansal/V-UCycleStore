import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from '@/components/layout/AppLayout'
import Home from '@/pages/Home'
import Catalog from '@/pages/Catalog'
// import Configurator from '@/pages/Configurator'
// import NotFound from '@/pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'catalog', element: <Catalog /> },
    //   { path: 'configurator/:modelId', element: <Configurator /> },
    //   { path: '*', element: <NotFound /> },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
