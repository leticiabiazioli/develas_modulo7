const aeroportos = require ("../listaAeroportos.json");

const detalhesAeroportos = (req, res, next) => {
    const { from, to } = req.params;

    if (aeroportos[from.toUpperCase()]) {
        const aeroportoFrom = aeroportos[from.toUpperCase()];
        const detalheFrom = `${aeroportoFrom.nome} (${aeroportoFrom.localidade})`;
        if (aeroportos[to.toUpperCase()]) {
            const aeroportoTo = aeroportos[to.toUpperCase()];
            const detalheTo = `${aeroportoTo.nome} (${aeroportoTo.localidade})`;
            req.params.descrição = `Vôo partindo do ${detalheFrom} até ${detalheTo}.`;
            next();
        } else { res.status(404).send(`Aeroporto ${to.toUpperCase()} não encontrado.`) }
    } else { res.status(404).send(`Aeroporto ${from.toUpperCase()} não encontrado.`) }
};

module.exports = detalhesAeroportos;