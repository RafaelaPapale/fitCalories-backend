const mongoose = require('mongoose');

const uri = `mongodb+srv://root:root@fitcalories-backend.fgkuh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const { Schema } = mongoose;

const UserSchema = new Schema({
  id: {
    type: String,
    index: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  nome: String,
  senha: String,
  peso: Number,
  idade: Number,
  altura: Number,
  imc: Number,
});

const UserModel = mongoose.model('UserModel', UserSchema);

const FoodSchema = new Schema({
  id: {
      type: String,
      index: true,
      unique: true,
  },
  userId: String,
  caloria: Number,  
  nome: String,
  quantidade: Number,

});

const FoodModel = mongoose.model('FoodModel', FoodSchema);



module.exports = {
  UserModel,
  FoodModel,
  mongoose,
};