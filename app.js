const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status();
});


app.get("test", (req,res)=>{
   res.send("linked")
})

app.listen(PORT, () => {
  console.log("Server is listening on:", PORT);
});
