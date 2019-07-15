export default (sequelize, DataTypes) => {
  const Message = sequelize.define('message', {
    message: DataTypes.STRING,
    date: DataTypes.BIGINT
  });

  Message.associate = (models) => {};

  Message.associate = (models) => {};

  return Message;
};
