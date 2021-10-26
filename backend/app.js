const express = require("express");
const HttpError = require("./models/http-error");
const fetch = require("node-fetch");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.get("/", (req, res, next) => {
  res.json({ test: "test" });
});

app.get("/products", async (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }

  let products;

  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    products = await response.json();
  } catch (e) {
    console.log(e);
    const error = new HttpError("Something went wrong.", 500);
    return next(error);
  }

  if (!products) {
    return next(new HttpError("No products have been found.", 404));
  }

  res.json({
    products: products,
  });
});

app.use((req, res, next) => {
  return next(new HttpError("Could not find this route.", 404));
});

app.use((err, req, res, next) => {
  console.log("TEST");
  res.status(err.code || 500).json({ message: err.message || "Error." });
});

const server = app.listen(process.env.PORT || 5000);
console.log("Listening on port " + (process.env.PORT || 5000));
