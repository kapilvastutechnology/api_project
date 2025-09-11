import { Outlet } from "react-router";
import Home from "./components/home/Home";
export default function RootLayOut() {
  return (
    <div>
        <Home/>
      <Outlet/>
    </div>
  )
}
