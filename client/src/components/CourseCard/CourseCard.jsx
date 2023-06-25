// eslint-disable-next-line
const CourseCard = ({ name, image, price, category, description }) => {
  return (
    <div className="w-64 h-auto bg-[#d4d3d3] rounded-md p-2 cursor-pointer">
      <figure className=" relative mb-2 h-4/5 w-full">
        <span className="absolute bottom-0 left-0 bg-[#FFFFFF60] rounded-lg text-black text-xs m-2 px-3 py-0.5 ">
          {name || "Categoria"}
        </span>
        <img
          src={
            image ||
            "https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg"
          }
          alt="imgCard"
          className="w-full h-auto rounded-lg object-cover "
        />
        <button className="absolute top-0 right-0 flex justify-center items-center bg-[#FFFFFF] w-6 h-6 rounded-full m-2 p-2">
          +
        </button>
      </figure>
      <p className="flex flex-col justify-between">
        <span className="text-sm font-light">Curso practico React</span>
        <span className="text-sm font-light">
          {description || "Descripcion"}
        </span>
        <span className="text-lg font-medium">$10</span>
      </p>
    </div>
  );
};

export default CourseCard;
