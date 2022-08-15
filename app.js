const express = require("express");
const path = require ("path");
const app = express();

const publicPath = path.resolve(__dirname,"./public");
app.use(express.static(publicPath))


app.get("/",  (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/index.html"))
})


const port = process.env.PORT || 3000
app.listen(port, () => {console.log("servidor en el puerto 3000")})
