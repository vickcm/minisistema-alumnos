import express from "express";
import AlumnosRoute from "./routes/alumnos.routes.js";

const app = express(); // el server

app.use(express.urlencoded({ extended: true })); // para leer los datos del body

app.use("/", express.static("public")); // para servir archivos estáticos

app.use(AlumnosRoute); // para usar las rutas de alumnos

app.listen(2023, function () {
  // levantar el servidor
  console.log("Servidor levantado! http://localhost:2023");
});
