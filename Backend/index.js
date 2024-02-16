const PORT = process.env.PORT || 3000;

const connectToMongo = require('./db');
const cors = require('cors')
const express = require('express')


connectToMongo();  
const app = express()

app.use(cors());
app.use(express.json());
 
app.use('/api/auth',require('./routes/auth'));

app.get('*',(req,res,next)=>{
  res.status(200).json({
    message:'connected successfully'
  })
})


app.listen(PORT,()=>{
    console.log(`sever is listening at :https://localhost:${PORT}`);
  });
  


  