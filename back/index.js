const app = require("./src/server");
const conDB = require("./src/config/conDB");

conDB()
  .then((res) => {
    app.listen(3000, () => {
      console.log("servidor en el puerto 3000");
    });
  })
  .catch((err) => {
    console.log("Error al conectar la base de datos");
  });
