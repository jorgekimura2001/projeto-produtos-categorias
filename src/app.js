import express from "express";
import "dotenv/config";
import { startDatabase } from "./database";
import categoriesRouter from "./routers/categories.router";
import productsRouter from "./routers/products.router";

const app = express();

app.use(express.json());
app.use('/categories', categoriesRouter)
app.use('/products', productsRouter)

app.listen(3333, () => {
  startDatabase()
});

export default app


