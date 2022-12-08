const { Player } = require("../../models/player")

const getPlayers = async (req, res) => {
    const result = await Player.find({})
    res.json(result)
}

module.exports = getPlayers