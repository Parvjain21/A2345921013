const express = require("express");
const bodyParser = require("body-parser");
const productsRoutes = require("./routes/products");

const app = express();
app.use(bodyParser.json());

app.use("/api", productsRoutes);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
