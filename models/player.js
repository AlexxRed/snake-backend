const { Schema, model } = require("mongoose");
const Joi = require("joi");

const playerSchema = Schema(
    {
        name: {
        type: String,
        required: [true, "name is required"],
        },
        totalScore: {
        type: Number,
        required: [true, "totalScore is required"],
        }
    },
    { versionKey: false, timestamps: true }
    );

const Player = model("player", playerSchema);


const joiPlayerShema = Joi.object({
    name: Joi.string(),
    totalScore: Joi.number(),
});

module.exports = {
    Player,
    joiPlayerShema
};