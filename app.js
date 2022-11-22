const express = require("express");
const app = express();

const detalhesAeroportos = require("./middlewares/detalhesAeroportos");

const { PORT } = require("dotenv").config().parsed;

app.use(express.json()); 

app.get("/flight/:from/:to", detalhesAeroportos, (req, res) => {
    const { from, to, descrição } = req.params; 

    res.json({
        "origem": from.toUpperCase(),
        "destino": to.toUpperCase(),
        "descrição": descrição
    });
});

app.listen(PORT, console.log(`Server running at port ${PORT}...`))