import { useDispatch, useSelector } from "react-redux";
import Layout from "../../Layout";
import CartItem from "../../components/cartItem/CartItem";
import { clearCart } from "../../redux/actions/shoppingCartActions";

const Checkout = () => {
  const coursesCart = useSelector((state) => state).shoppingCartReducer.cart;
  const dispatch = useDispatch();
  console.log(coursesCart);
  /*  let courses = [
    {
      id: 1,
      name: "Curso de Matemáticas Avanzadas",
      category: ["Ciencias Naturales"],
      duration: "8 semanas",
      description: "Aprende conceptos avanzados de matemáticas con este curso.",
      images: ["https://example.com/math-course.jpg"],
      price: 150,
      createdAt: "2023-06-27T03:26:57.963Z",
      updatedAt: "2023-06-27T03:26:57.963Z",
      idProfile: 1,
      quantity: 2,
      Profile: {
        profileId: 1,
        name: "John Doe",
        userId: 1,
      },
    },
    {
      id: 2,
      name: "Curso de Matemáticas Avanzadas",
      category: ["Programación"],
      duration: "8 semanas",
      description: "Aprende conceptos avanzados de matemáticas con este curso.",
      images: ["https://example.com/math-course.jpg"],
      price: 150,
      createdAt: "2023-06-27T03:26:57.963Z",
      updatedAt: "2023-06-27T03:26:57.963Z",
      idProfile: 1,
      quantity: 2,
      Profile: {
        profileId: 1,
        name: "John Doe",
        userId: 1,
      },
    },
    {
      id: 3,
      name: "Curso de Programación Python",
      category: ["Historia"],
      duration: "6 semanas",
      description:
        "Aprende a programar en Python desde cero con este curso práctico.",
      images: ["https://example.com/python-course.jpg"],
      price: 100,
      createdAt: "2023-06-27T03:26:57.963Z",
      updatedAt: "2023-06-27T03:26:57.963Z",
      idProfile: 1,
      quantity: 1,
      Profile: {
        profileId: 1,
        name: "John Doe",
        userId: 1,
      },
    },
  ]; */
  return (
    <Layout>
      <button
        className="flex justify-center items-center bg-primary-purple rounded-full m-2 p-2"
        onClick={() => {
          dispatch(clearCart());
        }}
      >
        Limpiar carrito
      </button>
      {coursesCart.map((el) => (
        <CartItem key={el.id} dataCard={el} />
      ))}
    </Layout>
  );
};

export default Checkout;
