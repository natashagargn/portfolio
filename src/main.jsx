import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Education from './components/Education.jsx'
import Project from './components/Project.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import Certification from './components/Certification.jsx'

const router=createBrowserRouter(
  [
    {
      path : '/',
      element : <App />,
      children : [
        {
          path : "",
          element : <Home />
        },
        {
          path : "education",
          element : <Education />
        },
        {
          path : "skills",
          element : <Skills />
        },
        {
          path : "project",
          element : <Project />
        },
        {
          path : "certification",
          element : <Certification />
        },
        {
          path : "contact",
          element : <Contact />
        },
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
