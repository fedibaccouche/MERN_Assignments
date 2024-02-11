const express = require("express");
const app = express();
    
require("./config/config.mongoose");// change this to config.mongoose !!!!!!
    
const cors = require('cors')
app.use(cors())     
app.use(express.json());                           /* This is new and allows JSON Objects to be posted */
app.use(express.urlencoded({ extended: true }));   /* This is new and allows JSON Objects with strings and arrays*/

const AllMyUserRoutes = require("./routes/author.routes");
AllMyUserRoutes(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
