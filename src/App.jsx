import { createBrowserRouter } from "react-router"
import RootLayout from "./components/RootLayout"
import { RouterProvider } from "react-router-dom"
import Home from "./home/Home"

export default function App() {
  const router = createBrowserRouter([
    { 
      path:'/',
      element:<RootLayout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },

      ]
    }
  ])
  return <RouterProvider router={router} />
}
