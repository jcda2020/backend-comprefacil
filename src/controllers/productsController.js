import { products } from "../data/products.js";

export const getProducts = (req, res) => {
  res.json(products);
};

export const createProduct = (req, res) => {
  const { name, price, stock, discount } = req.body;
  const exists = products.some((p) => p.name === name);
  if (exists) {
    return res.status(400).json({ error: "Produto com este nome já existe." });
  }
  const newProduct = {
    id: String(Date.now()),
    name,
    price,
    stock,
    discount: discount || 0,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

export const updateProduct = (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return res.status(404).json({ error: "Produto não encontrado" });

  products[index] = {
    ...products[index],
    ...req.body,
  };
  res.json(products[index]);
};

export const deleteProduct = (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return res.status(404).json({ error: "Produto não encontrado" });
  products.splice(index, 1);
  res.status(204).send();
};


export const products = [];