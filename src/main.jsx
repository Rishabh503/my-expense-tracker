import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router'
import { ShownExpenses } from './pages/ShownExpenses.jsx'
import { RealExpenses } from './pages/RealExpenses.jsx'
import { RouterProvider } from 'react-router-dom'
import { Savings } from './pages/Savings.jsx'
import { WeeklyView } from './pages/WeeklyView.jsx'
import FrontPage from './pages/faltu.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<App/>}>
    {/* <Route path='/real' element ={<RealExpenses/>}/> */}
    <Route path='' element ={<RealExpenses/>}/>
      <Route path='/shown' element ={<ShownExpenses/>}/>
      <Route path='/savings' element ={<Savings/>}/>
      <Route path='/weekly-view' element ={<WeeklyView/>}/>
   </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)

