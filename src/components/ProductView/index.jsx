import React, {useEffect, useState} from 'react';
import {Button, Container } from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";
import "./style.css";
import {commerce} from "../../lib/commerce";
import Spinner from "../Spinner";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";

const createMarkup = (text) => {
    return { __html: text };
};

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.05
        }
    }
};

const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
        transition: { duration: 0.6, ease: easing }
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing
        }
    }
};

const ProductView = ({addProduct}) => {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(true);

    const fetchProduct = async (id) => {
        const response = await commerce.products.retrieve(id);
        const {name, price, media, quantity, description} = response;
        setProduct({
            id, name, quantity, description, src:media.source, price:price.formatted_with_symbol,
        });
    };

    useEffect(() => {
        const id = window.location.pathname.split("/");
        fetchProduct(id[2]);
    }, []);

    const handleQuantity = (param) => {
        if (param === "decries" && quantity > 1) {
            setQuantity(quantity - 1);
        }
        if (param === "increase" && quantity < 10) {
            setQuantity(quantity + 1);
        }
    };
    return (
        <Container className="fullscreen">
            <div className='product'>
                <div className='img'>
                    <img
                        onLoad={() =>{
                            setLoading(false);
                        }}
                        src={product.src}
                        alt={product.name}
                    />
                </div>
                <div className="product-details">
                    <div className='inner'>
                        <motionButton className="shopping-button" component={Link} to="/">
                            <a className='go-back'>Back to products</a>
                        </motionButton>
                    </div>
                    <motion.h1 variants={fadeInUp}>{product.name}</motion.h1>
                    <motion.p variants={fadeInUp} dangerouslySetInnerHTML={createMarkup(product.description)} />
                    <motion.div variants={fadeInUp} className='qty-price'>
                        <div className='qty'>
                            <div className='minus'>
                                <Button size="small" variant="contained" className="increase-product-quantity"
                                        onClick={() => {
                                            handleQuantity("increase");
                                        }}
                                >
                                    +
                                </Button>
                            </div>
                            <div className='amount'>
                                <Button size="large" className="custom-button"
                                        onClick={() => {
                                            addProduct(product.id, quantity);
                                        }}
                                >
                                    <ShoppingCart />Add to basket
                                </Button>
                            </div>
                            <div className='add'>
                                <Button size="small" variant="contained" className="increase-product-quantity"
                                        onClick={() => {
                                            handleQuantity("decries");
                                        }}
                                >
                                    -
                                </Button>
                            </div>
                        </div>
                        <span className='price'>{product.price}</span>
                    </motion.div>
                </div>
            </div>
            {loading && <Spinner/>}
        </Container>
    );
};

export default ProductView;