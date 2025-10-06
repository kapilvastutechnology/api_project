import { createBrowserRouter } from "react-router"
import RootLayout from "./components/RootLayout"
import { RouterProvider } from "react-router-dom"
import Home from "./home/Home"
import UserEdit from "./users/UserEdit"
import UserAdd from "./users/UserAdd"
export default function App() {

  const users = [
    {id:1, name:'ram'},
    {id:2, name:'hari'}
  ];

  const newUser = users.map((user)=>{
    return user.id===1?{id:1, name:'hari'}:user;
  });
  console.log(newUser);

  const router = createBrowserRouter([
    { 
      path:'/',
      element:<RootLayout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'add-user',
          element:<UserAdd/>
        },
        
        {
          path: 'edit-user/:id',
          element: <UserEdit />
        },

      ]
    }
  ])
  return <RouterProvider router={router} />
}


