import { CardMedia, Typography, Button} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import "./style.scss";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";

const CustomCard = ({basket, product, addProduct, updateProduct, RemoveItemFromBasket}) => {
  return (
    <div className="product-row">
      <Link to={`product-view/${product.id}`}>
        <div className="card">
          <CardMedia component="img" alt="Contemplative Reptile" height="260" className="card-image" image={product.media.source} title="Contemplative Reptile"/>
            <div className="product-info">
                <h4 className="product-name">{product.name}</h4>
            </div>
        </div>
      </Link>
      {basket && (
          <div className="product-info">
              <span>{product.price.formatted_with_symbol}</span>
          </div>
      )}
      <div>
        {!basket && (
          <div className="btn-row">
            <div className="price">
                <span>{product.price.formatted_with_symbol}</span>
            </div>
            <Button size="large" className="add-to-cart"
              onClick={() => {
                addProduct(product.id, 1);
              }}
            ><ShoppingCart /></Button>
          </div>
        )}
        {basket && (
          <>
            <Button size="small" color="secondary" variant="outlined"
              onClick={() => {
                RemoveItemFromBasket(product.id);
              }}
            > Remove </Button>
            <>
              <Button size="small" variant="outlined" className="increase-product-quantity"
                onClick={() => {
                  updateProduct(product.id, product.quantity + 1);
                }}
              > + </Button>
              <Typography>&nbsp;{product.quantity}&nbsp;</Typography>
              <Button size="small" color="secondary" variant="outlined" onClick={() => {
                  updateProduct(product.id, product.quantity - 1);
                }}
              > - </Button>
            </>
          </>
        )}
      </div>
    </div>
  );
};

export default CustomCard;
