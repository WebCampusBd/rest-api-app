require("dotenv").config();
const { app } = require("./app");
const port = process.env.PORT;


app.listen(port,()=>{
    console.log(`Your server is running at http://127.0.0.1:${port}`);
});