import { useSelector } from "react-redux";
import Layout from "../../Layout";
import CourseCards from "../../components/CourseCards/CourseCards";
//eslint-disable-next-line

const Courses = () => {
  const courses = useSelector((state) => state).coursesReducer.courses;

  return (
    <Layout>
      <CourseCards courses={courses} />
    </Layout>
  );
};

export default Courses;
