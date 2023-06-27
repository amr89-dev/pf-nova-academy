import { useSelector } from "react-redux";
import Layout from "../../Layout";

const Checkout = () => {
  const cart = useSelector((state) => state).shoppingCartReducer.cart;
  console.log(cart);
  return (
    <Layout>
      <h2>Checkout</h2>
    </Layout>
  );
};

export default Checkout;
