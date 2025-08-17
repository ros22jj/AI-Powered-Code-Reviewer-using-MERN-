// require('dotenv').config()

// const app=require('./src/app')
// app.listen(3000,()=>
// {
//     console.log("server is running on https://localhost:3000")
// })




require('dotenv').config(); // load .env if needed

const app = require('./src/app'); // make sure app.js is inside /src

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
