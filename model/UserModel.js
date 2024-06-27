const User = require("../schema/userSchema");

const createUser = async (userData) => {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
};
