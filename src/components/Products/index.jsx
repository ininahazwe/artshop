import { Grid, Container } from "@material-ui/core";
import Product from "../Product";
import Spinner from "../Spinner";
import "./style.css";

const Products = ({ products, addProduct }) => {
  if (!products.length) return <Spinner />;

  return (
    <div>
      <Container id="products">
        <Grid container spacing={4} justify="center">
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={2} className="product-wrapper">
              <Product product={product} addProduct={addProduct} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
