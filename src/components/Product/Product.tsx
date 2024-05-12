import { FC } from "react";
import classes from "./Product.module.scss";
import { IProduct } from "../../types/products";

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
                <button onClick={onToggleFavorite}>
                    {product.isFavorite ? (
                        <img
                            className={classes.product__img_f}
                            src='/images/fav.png'
                            alt='favorite'
                        />
                    ) : null}
                </button>
            </div>
            <button onClick={onAddCart}>Buy</button>
        </div>
    );
};

export default Product;
