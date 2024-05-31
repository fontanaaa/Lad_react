import { FC, useState } from "react";
import classes from "./Product.module.scss";
import { ProductItem } from "../../types/products";
import MyButton from "../MyButton/MyButton";
import ChangeCount from "../ChangeCount/ChangeCount";
import { CartType } from "../../types/cart";
import { Updater } from "use-immer";

interface ProductProps {
    product: ProductItem;
    onAddCart?: () => void;
    onToggleFavorite: () => void;
    updateCart: Updater<CartType>;
}

const Product: FC<ProductProps> = ({
    product,
    onAddCart,
    onToggleFavorite,
    updateCart,
}) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        const newValue = count + 1;
        setCount(newValue);

        updateCart((draft) => {
            const findProduct = draft.items.find(
                (item) => item.id === product.id
            );
            if (findProduct) {
                findProduct.count += 1;
            } else {
                draft.items.push({ ...product, count: 1 });
            }
        });
    };

    const handleDecrement = () => {
        setCount((value) => value - 1);

        updateCart((draft) => {
            const findProduct = draft.items.find(
                (item) => item.id === product.id
            );
            if (findProduct) {
                findProduct.count -= 1;
            }
        });
    };

    const discount = product.discount && (
        <div className={classes.product__span}>{product.discount.value}</div>
    );

    return (
        <div className={classes.product}>
            <img
                src={product.imageUrl}
                className={classes.product__img}
                alt={product.name}
            />
            <div className={classes.product__span}>{product.name}</div>
            <div className={classes.product__span}>{product.price}</div>
            {discount}
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
                    Add to favorites
                </MyButton>
            </div>
            <MyButton
                onClick={handleIncrement}
                className={classes.addToCartButton}
            >
                Buy
            </MyButton>
            {count > 0 && (
                <ChangeCount
                    count={count}
                    onDecrement={handleDecrement}
                    onIncrement={handleIncrement}
                />
            )}
        </div>
    );
};

export default Product;
