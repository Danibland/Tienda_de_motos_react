const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Ruta básica
app.get('/', (req, res) => {
    res.send('¡Hola desde el backend!');
});

// Iniciar servidor
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});