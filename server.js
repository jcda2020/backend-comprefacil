import express from "express";
import cors from "cors";
import { productsRouter } from "./src/routes/products.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend rodando.");
});

app.use("/api/products", productsRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

