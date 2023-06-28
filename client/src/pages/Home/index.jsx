import { useNavigate } from "react-router-dom";
import Layout from "../../Layout";

const Home = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  if (username && password) {    
    navigate("/home");
  }
  return (
    <Layout>
      <h2>HOME</h2>
    </Layout>
  );
};

export default Home;
