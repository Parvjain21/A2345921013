const axios = require("axios");

// Replace with your credentials
const CLIENT_ID = "09e0245a-823a-47df-9158-1e095a2300ed";
const CLIENT_SECRET = "VYHtxJEKcAQRaGPD";

const getAuthToken = async () => {
  const response = await axios.post("http://20.244.56.144/test/auth", {
    companyName: "Amity university",
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    ownerName: "Parv Jain",
    ownerEmail: "parv.jain3002@gmail.com",
    rollNo: "A2345921013",
  });
  return response.data.access_token;
};

const getProducts = async (req, res) => {
  const { categoryname } = req.params;
  const { n, page, sort, order, minPrice, maxPrice } = req.query;

  try {
    const token = await getAuthToken();
    const response = await axios.get(
      `http://20.244.56.144/test/companies/AMZ/categories/${categoryname}?minPrice=${minPrice}&maxPrice=${maxPrice}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    let products = response.data;
    // Apply sorting
    if (sort) {
      products.sort((a, b) =>
        order === "desc" ? b[sort] - a[sort] : a[sort] - b[sort]
      );
    }

    // Apply pagination
    const startIndex = (page - 1) * n;
    const endIndex = startIndex + n;
    products = products.slice(startIndex, endIndex);

    // Add unique productID
    products = products.map((product, index) => ({
      ...product,
      productID: `${categoryname}-${index}`,
    }));

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  const { categoryname, productid } = req.params;

  try {
    const token = await getAuthToken();
    const response = await axios.get(
      `http://20.244.56.144/test/companies/AMZ/categories/${categoryname}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const product = response.data.find((p) => p.productID === productid);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
};
