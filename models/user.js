const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

// create a user model
class User extends Model {
  // needs to check password
  checkPsw(loginPW) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    something: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    something: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    something: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "gallery",
  }
);

module.exports = User;