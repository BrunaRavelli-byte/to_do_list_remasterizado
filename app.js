const express = require("express");
const app = express();

// Usando maddlewares

const checklistRouter = require('./src/routes/checklist')

app.use(express.json())

app.use(checklistRouter);




app.listen(3000, () => {
    console.log('Servidor iniciado');
})

