import express from "express";
import "dotenv/config";
import { startDatabase } from "./database";
import categoriesRouter from "./routers/categories.router";

const app = express();

app.use(express.json());
app.use('/categories', categoriesRouter)

export default app.listen(3333, () => {
  startDatabase()
});


