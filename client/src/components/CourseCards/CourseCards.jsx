import CourseCard from "../CourseCard/CourseCard";
/* eslint-disable */

const CourseCards = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {courses?.map((el) => {
        return <CourseCard key={el.id} dataCard={el} />;
      })}
    </div>
  );
};

export default CourseCards;
