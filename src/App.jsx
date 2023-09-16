import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import ProductDetail from "./Components/ProductDetail";
import Products from "./Components/Products";
import Navbar from "./Components/Navbar";

export default function App() {
  const [theme, setTheme] = React.useState(() => {
    /* if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } */
    return "light";
  });

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={ProductDetail} />
      </Switch>
    </>
  );
}
