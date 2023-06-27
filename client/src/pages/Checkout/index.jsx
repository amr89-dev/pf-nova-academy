import { useSelector } from "react-redux";
import Layout from "../../Layout";
import CourseCard from "../../components/CourseCard/CourseCard";

const Checkout = () => {
  const coursesCart = useSelector((state) => state).shoppingCartReducer.cart;

  console.log(coursesCart);
  return (
    <Layout>
      {coursesCart?.map((el) => (
        <CourseCard key={el.idCourseForSale} dataCard={el} />
      ))}
    </Layout>
  );
};

export default Checkout;
