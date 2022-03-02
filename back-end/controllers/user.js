const config = require("../config");
const Users = require("../constants/data-Users.json");
const Transactions = require("../constants/data-TransactionHistory.json");

const getUsers = async (req, res) => {
  try {
    res.send({ success: true, data:{ Users } });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

const userDetail = async (req, res) => {
  try {
    const { id } = req.params || {};
    const user = Users.filter((e)=> e.id === parseInt(id))
    const transaction = Transactions.filter((e)=> e.userId === parseInt(id))
    res.send({ success: true, data: {user, transaction} });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = {
  userDetail,
  getUsers
};
