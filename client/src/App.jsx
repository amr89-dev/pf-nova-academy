import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";
import Courses from "./pages/Courses";
import Landing from "./pages/Landing";
import MyAccount from "./pages/MyAccount";
import MyOrder from "./pages/MyOrder";
import NotFound from "./pages/NotFound";
import SingIn from "./pages/SingIn";

const App = () => {
  return (
    <div>
      <Admin />
      <Landing />
      <Checkout />
      <Courses />
      <MyAccount />
      <MyOrder />
      <SingIn />
      <NotFound />
    </div>
  );
};

export default App;
