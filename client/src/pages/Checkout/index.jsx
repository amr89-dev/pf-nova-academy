import { useDispatch, useSelector } from "react-redux";
import Layout from "../../Layout";
import CartItem from "../../components/cartItem/CartItem";
import { clearCart } from "../../redux/actions/shoppingCartActions";
import axios from "axios";

const Checkout = () => {
  const coursesCart = useSelector((state) => state).shoppingCartReducer.cart;

  const dispatch = useDispatch();
  let totalPrice = coursesCart.reduce((acumulador, el) => {
    const subtotal = el.quantity * el.price;
    return acumulador + subtotal;
  }, 0);

  let dataToPayment = coursesCart.map((el) => {
    return {
      id: el.id,
      title: el.name,
      currency_id: "ARS",
      picture_url: el.images[0],
      description: el.description,
      category_id: el.category[0],
      quantity: el.quantity,
      unit_price: el.price,
    };
  });

  const handlePayment = async (products) => {
    await axios
      .post("http://localhost:3001/mercadopago", products)
      .then(({ data }) => {
        window.location.href = data.response.body.init_point;
      });
  };

  return (
    <Layout>
      <div className="flex flex-row items-center ">
        <button
          className="flex justify-center items-center bg-primary-purple rounded-full m-2 p-2"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Limpiar carrito
        </button>
        <span className="font-extrabold">Total compra: ${totalPrice}</span>
        <button
          className="flex justify-center items-center bg-second-blue rounded-full m-2 p-2"
          onClick={() => {
            handlePayment(dataToPayment);
          }}
        >
          Pagar
        </button>
      </div>
      {coursesCart.map((el) => (
        <CartItem key={el.id} dataCard={el} />
      ))}
    </Layout>
  );
};

export default Checkout;
