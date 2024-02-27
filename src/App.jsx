import { useState } from 'react'

import './App.css'
import Home from './Pages/Home/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppLayout from './AppLayout'
import Property from './Pages/Property/Property'
import { Provider } from 'react-redux'
import StroeConfig from './Store/Store'
import Favorite from './Pages/Favorite/Favorite'
import Profile  from './Pages/profile/Profile'
import Chat from './Pages/chat/Chat';
import Phone from './Pages/phoneComponent/phone';
import Mylog from './Pages/mylog/mylog';
function App() {
  const [count, setCount] = useState(0)

  const routesPage = createBrowserRouter([{
    path: '/', element: <AppLayout></AppLayout>, children: [
      { index: true, element: <Home /> },
      { path: 'favorite', element: <Favorite /> },
      { path: 'profile', element: <Profile/> },
    
    ]
  }, { path: '/property', element: <Property /> },{ path: 'chat', element: <Chat /> },{path:'login',element:<Mylog/>},{path:'phone',element:<Phone/>}])

  return <>
    <Provider store={StroeConfig} >

      <RouterProvider router={routesPage}>

      </RouterProvider>
    </Provider>

  </>
}

export default App
