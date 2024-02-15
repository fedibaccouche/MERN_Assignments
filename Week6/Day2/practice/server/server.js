const express = require("express");
const app = express();
    
require("./config/mongoose.config");
require("dotenv").config()

const port=process.env.PORT    
const cors = require('cors')
app.use(cors())     
app.use(express.json());                           /* This is new and allows JSON Objects to be posted */
app.use(express.urlencoded({ extended: true }));   /* This is new and allows JSON Objects with strings and arrays*/

const AllMyUserRoutes = require("./routes/players.routes");
AllMyUserRoutes(app);

app.listen(port, () => {
    console.log("Listening at Port"+port)
})
