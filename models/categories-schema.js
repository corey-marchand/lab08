const Products = mongoose.Schema({
  name: String,
  description: String,
});

const products = supergoose.node('products', Products);

app.get('bananas/products', getProducts);

