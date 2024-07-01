const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  //   pour que l'eamil soit unique à chaque utilisateur on doit apposer le paramètre "unique" sauf que pour que mangoose nous donne une erreur qui soit compréhensible on doit installer mangoose-unique-validator
  password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
