import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllCourses } from "./redux/actions/coursesActions";
import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";
import Courses from "./pages/Courses";
import Landing from "./pages/Landing";
import MyAccount from "./pages/MyAccount";
import MyOrder from "./pages/MyOrder";
import NotFound from "./pages/NotFound";
import SingIn from "./pages/SingIn";
import SingUp from "./pages/SingUp";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Detail from "./pages/Detail";
import Footer from "./components/Footer/Footer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCourses());
  }, []);

  const AppRouter = () => {
    let routes = useRoutes([
      { path: "/", element: <Landing /> },
      { path: "/home", element: <Home /> },
      { path: "/admin", element: <Admin /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/courses", element: <Courses /> },
      { path: "/account", element: <MyAccount /> },
      { path: "/order", element: <MyOrder /> },
      { path: "/login", element: <SingIn /> },
      { path: "/register", element: <SingUp /> },
      { path: "/detail/:courseId", element: <Detail /> },
      { path: "/*", element: <NotFound /> },
    ]);

    return routes;
  };
  return (
    <div>
      <NavBar />
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;
