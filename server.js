require('./src/infraestructure/database');
const app = require('./src/infraestructure/rest_server');

app.listen(5001, () => {
    console.log('REST server running on port 5001...');
});