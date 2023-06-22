const createCourse = (req, res) => {
    res.json("ruta que crea un curso")
}

const getCourses = (req, res) => {
    res.json("ruta que obtiene todos los cursos")
}

const getCoursById = (req, res) => {
    res.json("ruta que obitene curso por ID")
}

const updateCourseById = (req, res) => {
    res.json("ruta que actualiza cursos")
}

const deleteCourseById = (req, res) => {
    res.json("ruta que elimina cursos")
}

module.exports = {
    createCourse,
    getCourses,
    getCoursById,
    updateCourseById,
    deleteCourseById
}