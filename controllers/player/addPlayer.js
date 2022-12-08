const { Player } = require("../../models/player")


const addPlayer = async (req, res) => {
    const result = await Player.create({ ...req.body});
    res.status(201).json(result);
};

module.exports = addPlayer