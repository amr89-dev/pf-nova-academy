import Layout from "../../Layout";
import CourseCards from "../../components/CourseCards/CourseCards";
//eslint-disable-next-line
const Courses = ({ courses }) => {
  return (
    <Layout>
      <CourseCards courses={courses} />
    </Layout>
  );
};

export default Courses;
