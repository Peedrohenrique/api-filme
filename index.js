const express = require("express");
const app = express();
// Porta
const port = process.env.PORT || 3000;
// Import Routes
const filmesRoutes = require("./routes/filmesRoutes");

app.use(express.json());

//Rotas
app.use(filmesRoutes);

app.listen(port, () => {
  console.log(`Servidor está funcionado na porta: ${port}`);
});
