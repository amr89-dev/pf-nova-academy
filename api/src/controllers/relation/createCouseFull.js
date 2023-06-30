// Esta función createCourseWithModulesLessonsAndResources toma dos argumentos:
// courseData que contiene los datos del curso (nombre, categoría, duración, precio)
// y modulesData que es un array de objetos que contienen los datos de los módulos,
// lecciones y recursos asociados a cada módulo.

// Dentro de la función, se crea el curso utilizando el modelo Course.create(courseData).
// Luego, se itera sobre los datos de los módulos y se crean los módulos asociados al curso
// utilizando el modelo Module.create({ ...moduleData, courseId: course.id }). A continuación,
// se itera sobre las lecciones y recursos de cada módulo, creando los registros correspondientes
// en los modelos Lesson y Resource.

// Finalmente, la función devuelve el objeto del curso creado.

// Recuerda que debes tener las relaciones establecidas en los modelos y configuradas correctamente en Sequelize para que esta función funcione correctamente.

const createCourseWithModulesLessonsAndResources = async (
  courseData,
  modulesData
) => {
  try {
    // Crear el curso
    const course = await Course.create(courseData);

    // Crear los módulos para el curso
    for (const moduleData of modulesData) {
      const module = await Module.create({
        ...moduleData,
        courseId: course.id,
      });

      // Crear las lecciones para el módulo
      for (const lessonData of moduleData.lessons) {
        const lesson = await Lesson.create({
          ...lessonData,
          moduleId: module.id,
        });

        // Crear los recursos para la lección
        for (const resourceData of lessonData.resources) {
          await Resource.create({ ...resourceData, lessonId: lesson.id });
        }
      }
    }

    return course;
  } catch (error) {
    // Manejar el error
    console.error(
      "Error al crear el curso con sus módulos, lecciones y recursos:",
      error
    );
    throw error;
  }
};


// Puedes llamar a esta función pasando los datos del curso
//  y los módulos correspondientes. Por ejemplo:

const courseData = {
  name: "Curso de Programación",
  category: 1,
  duration: 10,
  price: 99.99,
};

const modulesData = [
  {
    name: "Introducción a la programación",
    description: "Aprende los conceptos básicos de la programación",
    order: 1,
    lessons: [
      {
        title: "Variables y tipos de datos",
        content:
          "Aprende sobre variables y los diferentes tipos de datos en programación",
        resources: [
          {
            name: "Ejemplos de código",
            type: "PDF",
            link: "https://example.com/code-examples.pdf",
          },
          {
            name: "Tutorial en video",
            type: "Video",
            link: "https://example.com/video-tutorial.mp4",
          },
        ],
      },
      // Otras lecciones...
    ],
  },
  // Otros módulos...
];

createCourseWithModulesLessonsAndResources(courseData, modulesData)
  .then((course) => {
    console.log("Curso creado exitosamente:", course);
  })
  .catch((error) => {
    console.error("Error al crear el curso:", error);
  });


//  Este ejemplo crea un curso con un módulo y una lección,
//  y asociará los recursos correspondientes a la lección.

// Recuerda adaptar los nombres y atributos de los modelos
// y las relaciones a tu implementación específica.