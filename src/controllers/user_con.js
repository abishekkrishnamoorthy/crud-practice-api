const User = require('../model/user');

const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch users'
    });
  }
};
const create = async (req, res) => {
  try {
    const {name, email} = await req.body;
    const user = await User.create({name , email});    
    res.status(201).json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error(req.body);
    res.status(500).json({
      success: false,
      message: 'Failed to create user
    });
  }
}

module.exports = {
  getUsers,
  create
};
