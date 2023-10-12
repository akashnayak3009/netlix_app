import express from 'express';
import cors from 'cors';
import connectDB from './utils/db.js';
import userRouter from './routes/UserRoutes.js';


const app =express();
app.use(express.json());
app.use(cors());

const port = 5000;
connectDB();

app.use("/api/user", userRouter);

app.listen(5000, () => {
    console.log("server started on port 5000");
  });

  
