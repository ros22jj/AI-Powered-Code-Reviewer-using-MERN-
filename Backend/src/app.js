// const express=require('express');
// const aiRoutes=require('./routes/ai.routes');
// const app=express()

// app.get('/',(req,res)=>
// {
//     res.send("hello world ");
// })




// app.use('/ai',aiRoutes)
// module.exports=app;


// app.use(express.json())






// const express = require('express');
// const aiRoutes = require('./routes/ai.routes');
// const app = express();

// // Sabse pehle JSON body parse karne wala middleware lagao
// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send("hello world");
// });

// // Uske baad hi routes lagao
// app.use('/ai', aiRoutes);

// module.exports = app;




const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes');

const app = express();

// ✅ Allow requests from frontend (e.g., React Vite app running on port 5173)
app.use(cors({
    origin: 'http://localhost:5173', // or '*' for development
    methods: ['GET', 'POST'],
    credentials: true
}));

// ✅ Middleware to parse JSON body (must come before routes)
app.use(express.json());

// ✅ Default route
app.get('/', (req, res) => {
    res.send("hello world");
});

// ✅ AI routes
app.use('/ai', aiRoutes);

module.exports = app;
