/* import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store"; */
// import "./index.css";
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const courses = useSelector((state) => state.coursesReducer.courses);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const filteredCourses = courses.filter((course) => {
    return course.name && course.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
useEffect(() => {
    console.log('Término de búsqueda actualizado:', searchTerm);
    console.log(filteredCourses)
  }, [searchTerm]);
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gradient-to-br">
      <div className="relative rounded-2xl bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:px-10">
        <div className="mx-auto max-w-md">
          <form action="" className="relative mx-auto w-max">
            <input
              type="search"
              className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4"
              onChange={handleSearch}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </form>
          <div>
            {filteredCourses.map((course) => (
              <div key={course.id}>{course.name}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
// import { useState } from 'react';
// import { useSelector } from 'react-redux';

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const courses = useSelector((state) => state.coursesReducer.courses);

//   const handleSearch = (event) => {
//     const { value } = event.target;
//     setSearchTerm(value);
//   };

//   const filteredCourses = courses.filter(course => {
//     return course.nombre.toLowerCase().includes(searchTerm.toLowerCase());
//   });

//   return (
//     <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gradient-to-br">
//       <div className="relative rounded-2xl bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:px-10">
//         <div className="mx-auto max-w-md">
//           <form action="" className="relative mx-auto w-max">
//             <input
//               type="search"
//               className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4"
//               onChange={handleSearch}
//             />
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;
