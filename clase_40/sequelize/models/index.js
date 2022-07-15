const User = require("./User");
const Tweet = require("./Tweet");

Tweet.belongsTo(User);

module.exports = { User, Tweet };
