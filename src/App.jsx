import { createBrowserRouter } from "react-router"
import RootLayOut from "./RootLayOut"
import { RouterProvider } from "react-router-dom"
import Item from "./item/Item"
import Header from "./components/Header"


export default function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<RootLayOut/>,
      children:[
        {
          index:true,
          element:<Header/>
        },
        
        {
          path:'item/:name',
          element:<Item/>
        }
      ]
    }
  ])
  return <RouterProvider router={router} />
}
