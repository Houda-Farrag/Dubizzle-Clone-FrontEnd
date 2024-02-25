import { useState } from 'react'

import './App.css'
import Home from './Pages/Home/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppLayout from './AppLayout'

function App() {
  const [count, setCount] = useState(0)

  const routesPage = createBrowserRouter([{
    path: '/', element: <AppLayout></AppLayout>, children: [
      { index: true, element: <Home /> }]
  }])

  return <>

    <RouterProvider router={routesPage}>

    </RouterProvider>

  </>
}

export default App
