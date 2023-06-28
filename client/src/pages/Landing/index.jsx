import Footer from "../../components/Footer/Footer";
import Carrousel from "../../components/Carrousel";
import Banner from "../../components/Banner/Banner";
import Layout from "../../Layout/";
import SearchBar from "../../components/SearchBar/SearchBar";

const Landing = () => {
  return (
    <Layout>
      <Banner />
      <SearchBar />
      <Carrousel />
      <Footer />
    </Layout>
  );
};

export default Landing;
