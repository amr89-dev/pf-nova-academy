/* eslint-disable */
const CourseCard = ({ dataCard }) => {
  const { title, price, description, images, category } = dataCard;
  return (
    <div className="w-64 h-auto bg-light-gray rounded-md p-3 cursor-pointer">
      <figure className=" relative  h-auto w-full">
        <span className="absolute bottom-0 left-0 bg-[#FFFFFF60] rounded-lg text-black text-xs m-2 px-3 py-0.5 ">
          {category.name}
        </span>
        <img
          src={images[0]}
          alt={title}
          className="w-full rounded-lg object-cover "
        />
        <button className="absolute top-0 right-0 flex justify-center items-center bg-[#FFFFFF] w-6 h-6 rounded-full m-2 p-2">
          ♥️
        </button>
      </figure>
      <p className="flex flex-col justify-between">
        <span className="text-md font-bold">{title}</span>
        <span>⭐⭐⭐⭐⭐</span>
        <span className="text-lg font-medium">${price}</span>
        <span className="text-sm font-light">{description}</span>
      </p>
    </div>
  );
};

export default CourseCard;
