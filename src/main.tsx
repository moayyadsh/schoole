import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import LoginPage from './Auth/LoginPage.js'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Page from './Pages/teacher/Page'

const router = createBrowserRouter([{
  path:'/',
  element:<LoginPage/>
  
}
,
{
  path:'/app',
  element:<Page/>

}

])
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
<RouterProvider router={router}/>
  

    </QueryClientProvider>
)
