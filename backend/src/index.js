require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const jwtSecret = process.env.JWT_SECRET;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API BACKEND FUNCIONANDO!');
});

console.log(`clave secreta: ${jwtSecret}`);
console.log(`port: ${port}`);

app.listen(port, () => {
    console.log(`servidor escuchando en el puerto ${port}`);
});