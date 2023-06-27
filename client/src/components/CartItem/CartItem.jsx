import { useDispatch } from "react-redux";
import {
  addToCart,
  delFromCart,
} from "../../redux/actions/shoppingCartActions";

/* eslint-disable */
const CartItem = ({ dataCard }) => {
  const dipatch = useDispatch();
  const { id, name, category, description, images, price, quantity } = dataCard;
  let total = quantity * price;
  return (
    <div className="flex flex-row  h-max w-5/6 bg-light-gray rounded-md p-3 ">
      <figure className=" relative  h-fit w-full">
        <span className="absolute bottom-0 left-0 bg-[#FFFFFF60] rounded-lg text-black text-xs m-2 px-3 py-0.5 ">
          {category}
        </span>
        {
          <img
            src="https://picsum.photos/800/600"
            alt={name}
            className="w-auto h-auto rounded-lg object-cover "
          />
        }
      </figure>
      <div className="flex flex-col justify-start">
        <span className="text-md font-bold">{name}</span>
        <span className="text-sm font-light">{description}</span>
        <div className="flex flex-row items-center">
          <button
            className=" flex justify-center items-center bg-[#FFFFFF] w-6 h-6 rounded-full m-2 p-2"
            onClick={() => {
              dipatch(delFromCart(id));
            }}
          >
            -
          </button>
          <span className="text-lg font-medium">{quantity}</span>
          <button
            className="flex justify-center items-center bg-[#FFFFFF] w-6 h-6 rounded-full m-2 p-2"
            onClick={() => {
              dipatch(addToCart(dataCard));
            }}
          >
            +
          </button>
          <span className="m-2">x</span>
          <span className="text-lg font-medium ">${price}</span>
        </div>
        <span className="text-lg font-bold mx-auto ">Total: ${total}</span>
      </div>
    </div>
  );
};

export default CartItem;
