const mongoose = require('mongoose');

const uri = `mongodb+srv://root:root@fitcalories-backend.fgkuh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const ConsumoSchema = new Schema({
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

const ConsumoModel = mongoose.model('ConsumoModel', ConsumoSchema);

module.exports = {
    ConsumoModel,
    mongoose,
};