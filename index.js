const express = require("express")
const app = express()
const cors = require('cors')
const mongoose = require("mongoose");
const Message = require("./models/Message")




app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/messages");


app.post("/createChat", async (req, res) => {
    try {
      const chat = new Message({
        name: req.body.name,
      });
      const chatMessage = await chat.save();
      res.json(chatMessage);
    } catch (error) {
      res.json(error);
    }
  });
  
  app.get("/", async (req, res) => {
    try {
      const chats = await Message.find();
      res.json(chats);
    } catch (error) {
      res.json(error);
    }
  });



app.listen(8080,()=>{
console.log("server running successfully  ... ")
})