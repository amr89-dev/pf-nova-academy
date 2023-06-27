import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Detail = () => {
  const { courseId } = useParams();

  const getUser = async () => {
    const response = await axios.get(`http://localhost:3001/courseForSale/${courseId}`);
    console.log(response);
    return response;
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <div>
        <h1>COMPONENTE DETAIL</h1>
      </div>
      <div></div>
    </div>
  );
};

export default Detail;
