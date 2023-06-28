import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Detail = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});

  const getUser = async () => {
    // console.log(useParams())
    console.log(courseId)
    const response = await axios.get(
      `http://localhost:3001/courseForSale/${courseId}`
    );
    const course = response.data;
    setCourse(course);
    return course;
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    // <div>
    //   <div>
    //     <h1>{course.name}</h1>
    //     <p>{course.description}</p>
    //     <h2>{course.duration}</h2>
    //     <h1>{course.price}</h1>
    //   </div>
    //   <div>
    //     <img src={"https://picsum.photos/800/600?random=1"} alt={course.name} />
    //   </div>
    // </div>
    <div className="p-4 bg-gray-100">
      <div>
        <img
          className="object-cover w-full h-48"
          src="https://picsum.photos/800/600?random=1"
          alt={course.name}
        />
      </div>
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2">{course.name}</h1>
          <p className="text-gray-600 bg-gray-100">{course.description}</p>
          <h2 className="mt-4 text-lg font-semibold">
            Duration: {course.duration} hours
          </h2>
          <h1 className="mt-4 text-2xl font-bold">${course.price}</h1>
        </div>
      </div>
    </div>
  );
};

export default Detail;
