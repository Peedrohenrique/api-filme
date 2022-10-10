const express = require("express");
const cors = require("cors");
const app = express();
// Porta
const port = process.env.PORT || 3000;
// Import Routes
const filmesRoutes = require("./routes/filmesRoutes");

app.use(express.json());

//CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  app.use(cors());
  next();
});

//Rotas
app.use(filmesRoutes);

app.listen(port, () => {
  console.log(`Servidor está funcionado na porta: ${port}`);
});
