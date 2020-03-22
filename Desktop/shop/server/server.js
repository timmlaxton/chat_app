const express = require('express');


const app = express();

const port = process.envPORT || 3002;

app.listen(port,()=> {
    console.log(`Server Running at ${port}`);
    
})