import { FC } from "react";
import classes from "./Product.module.scss";
import { IProduct } from "../../types/products";
import MyButton from "../MyButton/MyButton";

interface ProductProps {
    product: IProduct;
    onAddCart: () => void;
    onToggleFavorite: () => void;
}

const Product: FC<ProductProps> = ({
    product,
    onAddCart,
    onToggleFavorite,
}) => {
    return (
        <div className={classes.product}>
            <img
                src={product.imageUrl}
                className={classes.product__img}
                alt={product.name}
            />
            <div className={classes.product__span}>{product.name}</div>
            <div className={classes.product__span}>{product.price}</div>
            <div className={classes.product__span}>{product.rating}</div>
            <div>
                <MyButton
                    onClick={onToggleFavorite}
                    className={classes.favoriteButton}
                >
                    {product.isFavorite ? (
                        <img
                            className={classes.product__img_f}
                            src='/images/fav.png'
                            alt='favorite'
                        />
                    ) : null}
                </MyButton>
            </div>
            <MyButton onClick={onAddCart} className={classes.addToCartButton}>
                Buy
            </MyButton>
        </div>
    );
};

export default Product;
