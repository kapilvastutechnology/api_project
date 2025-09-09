import { createBrowserRouter } from "react-router"
import RootLayout from "./components/RootLayout"
import Categories from "./categories/Categories"
import { RouterProvider } from "react-router-dom"
import CategoryItems from "./category-items/CategoryItems"
import Meal from "./meal/Meal"

export default function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {
          index:true,
          element:<Categories/>
        },
        {
          path:'category-items/:name',
          element:<CategoryItems/>
        },
        {
          path:'meal/:id',
          element:<Meal/>
        }
        
      ]
    }
  ])
  return <RouterProvider router={router} />
}
