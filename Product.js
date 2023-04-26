let products = [];

function createProduct(product) {
  products = [...products, product];
}

function readProducts() {
  console.log(products);
}

function upDataProduct(id, newProduct) {
  products = products.map((product) => {
    if (product.id === id) {
      return {
        ...product,
        ...newProduct,
      };
    }
    return { ...product };
  });
}

function deleteProduct(id) {
  products = products.filter((product) => product.id !== id);
}

createProduct({
  id: 1,
  name: "Galletas",
  description: "Es una comida",
  price: 50,
});
createProduct({
  id: 2,
  name: "Dulces",
  description: "Es una Golosina",
  price: 25,
});
upDataProduct(1, {
  id: 3,
  name: "sopa",
  description: "Una sopa istantanea",
  price: 25,
});
deleteProduct(2);
readProducts();
