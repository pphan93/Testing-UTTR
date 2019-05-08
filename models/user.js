module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        notNull: true,
        notEmpty: true,
        len: [5,30]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        notNull: true,
        notEmpty: true,
      }  
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        len: [6,10]
      }  
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        len: [10],
        notNull: true,
        notEmpty: true
      } 
    },
    photo: {
      type: DataTypes.STRING
    }
  });

  User.associate = function(models) {
    User.hasMany(models.Goal);
  };  

  return User;
};
