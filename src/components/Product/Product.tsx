import classes from "./Product.module.scss";

const Product = () => {
    const product = {
        id: 1,
        name: "Наручные часы мужские SEIKO Prospex SPB381",
        imageUrl: "/images/seiko.jpg",
        price: "1500$",
        discount: "5",
        rating: "4.9",
        isFavorite: false,
    };
    return (
        <div className={classes.product}>
            <span className={classes.product__span}>{product.name}</span>
            <img
                src={product.imageUrl}
                className={classes.product__img}
                alt="seiko"
            />
            <span className={classes.product__span}>{product.price}</span>
            <span className={classes.product__span}>{product.rating}</span>
            {product.isFavorite ? (
                <img
                    className={classes.product__img_f}
                    src="/images/fav.png"
                    alt="favorite"
                />
            ) : null}
        </div>
    );
};

export default Product;
