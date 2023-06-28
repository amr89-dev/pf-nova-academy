import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const courses = useSelector((state) => state).coursesReducer.courses;
  let coursesFlat = courses.map((el) => {
    return {
      id: el.id,
      name: el.name
        .replace(/[,.-]/g, "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""),
      description: el.description
        .replace(/[,.-]/g, "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""),
      category: el.category
        .join(" ")
        .replace(/[,.-]/g, "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""),
    };
  });

  const [term, setTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  const filterCourse = (value) => {
    let filter = coursesFlat.filter((el) => {
      return (
        el.name.includes(value) ||
        el.description.includes(value) ||
        el.category.includes(value)
      );
    });
    setFilteredCourses(filter);
  };

  useEffect(() => {
    filterCourse(term);
  }, [term]);

  const handleChange = (e) => {
    const value = e.target.value;
    setTerm(value);
  };

  return (
    <div>
      <input
        type="text"
        list="datalist-options"
        placeholder="Buscar un curso"
        onChange={handleChange}
        className="border mb-8"
        value={term}
      />
      {filteredCourses.length > 0 && (
        <div className="flex flex-row flex-wrap">
          {filteredCourses.map((el) => (
            <div className="border p-2" key={el.id}>
              <Link>{el.name}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
