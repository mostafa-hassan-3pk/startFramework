import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
export default function App() {
  const route = createBrowserRouter([
    { path:"/", element: <Layout /> , children:[
      { path:"/", element: <Home /> },
      { path:'/home', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/portfolio', element: <Portfolio /> },
      { path: '/contact', element: <Contact /> }
      ] },
  ])
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  )
} 