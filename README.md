# **PF NOVA ACADEMY**

## 📋 **MODELOS BASE DE DATOS:**
<br>

**`Usuario:`** Almacena la información de los usuarios registrados en la plataforma, como su nombre, dirección de correo electrónico, contraseña y cualquier otro dato relevante.

**`Curso:`** Representa los cursos disponibles en la plataforma. Puede incluir detalles como el título del curso, descripción, nivel de dificultad, duración, categoría y cualquier otra información relacionada.

**`Módulo:`** Un curso puede estar dividido en varios módulos, cada uno cubriendo un tema específico. Este modelo podría almacenar detalles como el título del módulo, descripción, orden de visualización y una referencia al curso al que pertenece.

**`Lección:`** Representa las lecciones individuales dentro de un módulo. Puede incluir información como el título de la lección, descripción, contenido (texto, videos, archivos adjuntos), orden de visualización y una referencia al módulo al que pertenece.

**`Inscripción:`** Registra la relación entre un usuario y un curso específico en el que se han inscrito. Puede contener información adicional, como la fecha de inscripción, estado de la inscripción, progreso del usuario en el curso, puntajes de exámenes, etc.

**`Comentario o reseña:`** Permite a los usuarios dejar comentarios o reseñas sobre los cursos. Puede incluir detalles como el contenido del comentario, la fecha de publicación, el usuario que lo hizo y una referencia al curso relacionado.

**`Categoría:`** Representa las categorías o etiquetas que se pueden asignar a los cursos para facilitar la búsqueda y la organización. Puede contener campos como el nombre de la categoría, descripción y cualquier otra información relevante.

<br>

## 📋 **RELACIONES:**

<br>

**`Usuario - Curso:`** La relación entre los usuarios y los cursos podría ser una relación de muchos a muchos, ya que un usuario puede inscribirse en múltiples cursos y un curso puede tener múltiples usuarios inscritos. Esto se puede implementar mediante una tabla intermedia, como la tabla "Inscripción", que almacena la información de cada inscripción individual, vinculando los usuarios y los cursos.

**`Curso - Módulo:`** La relación entre los cursos y los módulos sería una relación de uno a muchos, ya que un curso puede tener varios módulos, pero un módulo solo pertenece a un curso. Esto se puede implementar agregando una columna de clave foránea en la tabla "Módulo" que haga referencia a la clave primaria del curso al que pertenece.

**`Módulo - Lección:`** La relación entre los módulos y las lecciones también sería una relación de uno a muchos, ya que un módulo puede tener varias lecciones, pero una lección solo pertenece a un módulo. Esto se puede lograr agregando una columna de clave foránea en la tabla "Lección" que haga referencia a la clave primaria del módulo al que pertenece.

**`Curso - Comentario o reseña:`** La relación entre los cursos y los comentarios o reseñas podría ser una relación de uno a muchos, donde un curso puede tener varios comentarios o reseñas, pero un comentario o reseña solo pertenece a un curso. Esto se puede implementar agregando una columna de clave foránea en la tabla "Comentario o reseña" que haga referencia a la clave primaria del curso relacionado.

**`Curso - Categoría:`** La relación entre los cursos y las categorías podría ser una relación de muchos a muchos, ya que un curso puede pertenecer a varias categorías y una categoría puede tener varios cursos. Esto se puede lograr mediante una tabla intermedia que almacene las relaciones entre los cursos y las categorías, utilizando claves foráneas que hagan referencia a las claves primarias de las tablas correspondientes.