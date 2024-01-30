const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    name: String,
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const userModel = mongoose.model("message", messageSchema);

module.exports = userModel;
