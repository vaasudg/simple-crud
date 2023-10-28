// @ts-nocheck
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { EmpProvider } from './context/EmployeeContext'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EmpForm from './Components/EmpForm'
import View from './Components/View'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/:id',
    element: <View />
  },
  {
    path: 'add',
    element: <EmpForm />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <EmpProvider>
      <RouterProvider router={router} />
    </EmpProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
