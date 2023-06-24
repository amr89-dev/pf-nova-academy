import { useRoutes } from "react-router-dom";
import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";
import Courses from "./pages/Courses";
import Landing from "./pages/Landing";
import MyAccount from "./pages/MyAccount";
import MyOrder from "./pages/MyOrder";
import NotFound from "./pages/NotFound";
import SingIn from "./pages/SingIn";

const AppRouter = () => {
  let routes = useRoutes([
    { path: "/", element: <Landing /> },
    { path: "/admin", element: <Admin /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "/courses", element: <Courses /> },
    { path: "/account", element: <MyAccount /> },
    { path: "/order", element: <MyOrder /> },
    { path: "/signin", element: <SingIn /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};
const App = () => {
  return <div>{<AppRouter />}</div>;
};

export default App;
