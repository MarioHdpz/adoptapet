/* User model definition */

const mongoose  = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
    firstname: String,
    lastname: String,
    address: String,
    phone: String,
    isAdopted: Boolean
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
