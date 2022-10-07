import express from "express";
import cors from "cors"; 
import env from "dotenv"; 
import router from "./routes/index.js";



env.config({ path: "./.env" });

const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.listen(port, () => {
  console.log("listening on port ", port);
});
app.use("/api/yelpcamp",router)