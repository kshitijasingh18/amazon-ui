const products = [
  {
    id: 1,
    title: "iPhone 15",
    price: 79999,
    rating: 4.5,
    image: "https://via.placeholder.com/200",
    description: "Latest Apple iPhone 15 with great camera."
  },
  {
    id: 2,
    title: "Gaming Laptop",
    price: 59999,
    rating: 4.2,
    image: "https://via.placeholder.com/200",
    description: "Powerful laptop for gaming and work."
  },
  {
    id: 3,
    title: "Wireless Headphones",
    price: 9999,
    rating: 4.0,
    image: "https://via.placeholder.com/200",
    description: "Noise-cancelling wireless headphones."
  }
];

export default products;

// Simulate GET request
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500); // mock async delay
  });
};

// Simulate GET by ID
export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === parseInt(id));
    setTimeout(() => product ? resolve(product) : reject("Product not found"), 500);
  });
};
