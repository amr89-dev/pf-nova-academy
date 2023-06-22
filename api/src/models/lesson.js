const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Lesson",
    {id_lesson: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(100)
    },
    content: {
      type: DataTypes.TEXT
    },
    course_id: {
      type: DataTypes.INTEGER
    },
    module_id: {
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'Lesson',
    timestamps: false
  },
    { timestamps: false }
  );
};
