
const cursos = [
  {
    name: "Curso de Matemáticas Avanzadas",
    category: ["Matemáticas"],
    description: "Aprende conceptos avanzados de matemáticas con este curso.",
    price: 150,
    duration: "8 semanas",
    images: ["https://example.com/math-course.jpg"],
  },
  {
    name: "Curso de Biología Molecular",
    category: ["Ciencias Naturales"],
    description: "Descubre los secretos de la biología molecular en este curso especializado.",
    price: 180,
    duration: "10 semanas",
    images: ["https://example.com/biology-course.jpg"],
  },

  {
    name: "Curso de Programación Python",
    category: ["Programación"],
    description: "Aprende a programar en Python desde cero con este curso práctico.",
    price: 100,
    duration: "6 semanas",
    images: ["https://example.com/python-course.jpg"],
  },
  {
    name: 'Curso de Matemáticas Avanzadas',
    category: ['Matemáticas'],
    description: 'Aprende conceptos avanzados de matemáticas con este curso.',
    price: 150,
    duration: '8 semanas',
    images: ['https://example.com/math-course.jpg']
  },
  {
    name: 'Curso de Física Cuántica',
    category: ['Ciencias Naturales'],
    description: 'Explora los fundamentos de la física cuántica en este curso.',
    price: 200,
    duration: '6 semanas',
    images: ['https://example.com/quantum-physics-course.jpg']
  },
];



const category = [
  { name: "Matemáticas" },
  { name: "Ciencias Naturales" },
  { name: "Historia" },
  { name: "Idiomas" },
  { name: "Programación" },
  { name: "Arte y Diseño" },
  { name: "Literatura" },
  { name: "Economía" },
  { name: "Psicología" },
  { name: "Música" },
];

// El arreglo 'educationCategories' contiene 10 objetos de categoría relacionados a una plataforma educativa
const users = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "Password123",
  },
  {
    name: "Alice Smith",
    email: "alice.smith@example.com",
    password: "Password456",
  },
  {
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    password: "Password789",
  },
  
];

const generateCourseObjects = (courses, count) => {
  const generatedCourses = [];

  const categoryNames = category.map(cat => cat.name);

  for (let i = 0; i < count; i++) {
    const randomCourse = courses[Math.floor(Math.random() * courses.length)];
    const randomCategory = categoryNames[Math.floor(Math.random() * categoryNames.length)];

    const course = {
      name: randomCourse.name,
      category: [randomCategory],
      description: randomCourse.description,
      price: randomCourse.price,
      duration: randomCourse.duration,
      images: randomCourse.images,
    };

    generatedCourses.push(course);
  }

  return generatedCourses;
};


const generatedCourses = generateCourseObjects(cursos, 40);


module.exports = { cursos, category, users,generateCourseObjects,generatedCourses };
