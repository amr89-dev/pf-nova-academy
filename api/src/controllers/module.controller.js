const createModule = (req, res) => {
    res.json("ruta que crea un usuario")
}

const getUsers = (req, res) => {
    res.json("ruta que obtiene todos los usuarios")
}

const getUserById = (req, res) => {
    res.json("ruta que obtiene usuario por ID")
}

const updateUserById = (req, res) => {
    res.json("ruta que actualiza usuario")
}

const deleteUserById = (req, res) => {
    res.json("ruta que elimina usuario")
}