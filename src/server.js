import express from "express";
import cors from "cors";
import { productsRouter } from "./src/routes/products.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rotas
app.use("/api/products", productsRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// backend/src/routes/products.js
import express from "express";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productsController.js";

export const productsRouter = express.Router();
productsRouter.get("/", getProducts);
productsRouter.post("/", createProduct);
productsRouter.patch("/:id", updateProduct);
productsRouter.delete("/:id", deleteProduct);
