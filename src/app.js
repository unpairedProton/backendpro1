import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();


// Middleware
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}));

// like agar data form etc se aya to
app.use(express.json({limit: '16kb',
 }));

 // url se data aaya to
 app.use(express.urlencoded({limit: '16kb', extended: true}));

// store file folder
app.use(express.static('public'));


// user k browser se cookie lene and use krne k liye and cookie store krne k liye 
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

export default app;