import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import ProductDetail from "./Components/Products/ProductDetail";
import Products from "./Components/Products/Products";
import Navbar from "./Components/Navbar/Navbar";
import SignIn from "./Components/Auth/SignIn/SignIn";

export default function App() {
  const [theme, setTheme] = React.useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || "light";
  });
  const [user, setUser] = React.useState(null);

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} user={user} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route
          exact
          path="/login"
          render={(props) => (
            <SignIn {...props} setUser={setUser} user={user} />
          )}
        />
      </Switch>
    </>
  );
}
