require("dotenv").config();

const mongoose = require("mongoose");

const conDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conectado a MongoDB exitosamente"); // Añadir un mensaje de éxito
  } catch (error) {
    console.error("Error al conectar a MongoDB", error);
    throw error; // Lanzar el error para que el catch en el archivo principal lo capture
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("Desconectado de la base de datos MongoDB");
});

module.exports = conDB;
