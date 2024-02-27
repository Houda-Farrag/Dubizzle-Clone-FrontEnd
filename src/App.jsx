import { useState } from 'react'

import './App.css'
import Home from './Pages/Home/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppLayout from './AppLayout'
import Property from './Pages/Property/Property'
import { Provider } from 'react-redux'
import StroeConfig from './Store/Store'
import Favorite from './Pages/Favorite/Favorite'

function App() {
  const [count, setCount] = useState(0)

  const routesPage = createBrowserRouter([{
    path: '/', element: <AppLayout></AppLayout>, children: [
      { index: true, element: <Home /> },
      { path: '/favorite', element: <Favorite /> }
    ]
  }, { path: '/property', element: <Property /> }])

  return <>
    <Provider store={StroeConfig} >

      <RouterProvider router={routesPage}>

      </RouterProvider>
    </Provider>

  </>
}

export default App
