import { FC } from "react";
import { ProductItem } from "../../types/products";
import Product from "../Product/Product";
import Row from "../Row/Row";
import { CartType } from "../../types/cart";
import { Updater } from "use-immer";

interface ProductCatalogProps {
    products: ProductItem[];
    updateCart: Updater<CartType>;
}

const ProductCatalog: FC<ProductCatalogProps> = ({ products, updateCart }) => {
    const handleAddCart = () => {};
    const handleToggleFavorite = () => {
        alert("Favorites have been changed");
    };
    return (
        <Row>
            {products.map((product) => (
                <Product
                    product={product}
                    onAddCart={handleAddCart}
                    updateCart={updateCart}
                    onToggleFavorite={handleToggleFavorite}
                />
            ))}
        </Row>
    );
};

export default ProductCatalog;
