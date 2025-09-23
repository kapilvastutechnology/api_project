import {Navbar,
   NavbarBrand,
   NavbarContent,
   NavbarItem
  } from "@heroui/react";
import { Link, NavLink } from "react-router";
export default function Header() {
  return (
     <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
       <NavLink to={'/add-user'}>Add User</NavLink>
      </NavbarContent>
    </Navbar>
  )
}
