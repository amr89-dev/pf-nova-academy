import { useEffect, useState } from "react";
import axios from "axios";
import { useRoutes } from "react-router-dom";
import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";
import Courses from "./pages/Courses";
import Landing from "./pages/Landing";
import MyAccount from "./pages/MyAccount";
import MyOrder from "./pages/MyOrder";
import NotFound from "./pages/NotFound";
import SingIn from "./pages/SingIn";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

useState;
const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then(({ data }) => setProducts(data));
  }, []);

  const AppRouter = () => {
    let routes = useRoutes([
      { path: "/", element: <Landing /> },
      { path: "/home", element: <Home /> },
      { path: "/admin", element: <Admin /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/courses", element: <Courses courses={products} /> },
      { path: "/account", element: <MyAccount /> },
      { path: "/order", element: <MyOrder /> },
      { path: "/login", element: <SingIn /> },
      { path: "/*", element: <NotFound /> },
    ]);

    return routes;
  };
  return (
    <div>
      <NavBar />
      <AppRouter />
    </div>
  );
};

export default App;
