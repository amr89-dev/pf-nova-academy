import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/shoppingCartActions";
import { NavLink } from "react-router-dom";

/* eslint-disable */

const CourseCard = ({ dataCard }) => {
  const { id, name, price, description, images, category } =
    dataCard;
  const dispatch = useDispatch();
  const handleCart = (data) => {
    dispatch(addToCart(data));
  };

  return (
    <div className="relative w-64 h-auto bg-light-gray rounded-md p-3">
      <figure className=" relative  h-auto w-full">
        <span className="absolute bottom-0 left-0 bg-[#FFFFFF60] rounded-lg text-black text-xs m-2 px-3 py-0.5 ">
          {category[0]}
        </span>
        <NavLink to={`/detail/${id}`}>
          <img
            src="https://picsum.photos/800/600"
            alt={name}
            className="w-full rounded-lg object-cover "
          />
        </NavLink>
        <button className="absolute top-0 right-0 flex justify-center items-center bg-[#FFFFFF] w-6 h-6 rounded-full m-2 p-2">
          ♥️
        </button>
      </figure>
      <p className="flex flex-col justify-between">
        <span className="text-md font-bold">{name}</span>
        <span>⭐⭐⭐⭐⭐</span>
        <span className="text-lg font-medium">${price}</span>
        <span className="text-sm font-light">{description}</span>
      </p>
      <button
        className="absolute bottom-0 right-0 flex justify-center items-center bg-[#FFFFFF] w-6 h-6 rounded-full m-2 p-2  cursor-pointer"
        onClick={() => {
          handleCart(dataCard);
        }}
      >
        +
      </button>
    </div>
  );
};

export default CourseCard;
