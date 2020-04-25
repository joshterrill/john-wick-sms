const Router = require("express").Router;

module.exports = (twilio) => {
    const api = Router();

    api.get("/", (req, res) => {
        res.send("The Continental Administrative Office API");
    });

    api.get("/recipients", (req, res) => {
        res.json(require("../data/recipients.json"));
    });

    api.get("/contract-statuses", (req, res) => {
        res.json(require("../data/contract-statuses.json"));
    });

    api.post("/send", async (req, res) => {
        try {
            const {
                recipients,
                status,
                name,
                amount,
                location,
            } = req.body;
            const message = `${status}\n${name}\n${amount}\n${location}`
            const response = await twilio.messages.create({
                from: process.env.TWILIO_FROM_NUMBER,
                to: recipients,
                body: message,
            });
            res.json(response);
        } catch (error) {
            res.status(500);
            res.json({error: "Error sending messages"});
        }
    });

    return api;
}