import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Avatar,
} from "@nextui-org/react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import MoonIcon from "../Icons/MoonIcon/MoonIcon";
import SunIcon from "../Icons/SunIcon/SunIcon";
const Navbarr = ({ theme, toggleTheme, user }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const menuItems = [
    { name: "Home", route: "/" },
    { name: "Products", route: "/products" },
    { name: "Cart", route: "/cart" },
    { name: "Profile", route: "/profile" },
    { name: "Log out", route: "/login" },
  ];
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <NavLink to="/">
            <Logo />
            <p className="font-bold text-inherit">LOGO</p>
          </NavLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex gap-4">
          <Button onClick={toggleTheme} isIconOnly variant="bordered">
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          {localStorage.getItem("user") ? (
            <Avatar
              isBordered
              color="secondary"
              src={JSON.parse(localStorage.getItem("user")).photoURL}
            />
          ) : (
            <Button as={Link} href="/login">
              Enter Account
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            {item.name === "Log out" ? (
              <Link
                color="danger"
                className="w-full"
                href={item.route}
                size="lg"
                key={index}
                onClick={logout}
              >
                {item.name}
              </Link>
            ) : (
              <Link
                color={index === menuItems.length - 1 ? "danger" : "foreground"}
                className="w-full"
                href={item.route}
                size="lg"
                key={index}
              >
                {item.name}
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Navbarr;
