import { FC } from "react";
import { Updater } from "use-immer";
import { ProductItem, CartType } from "@/types";
import { Product, Row } from "@/components";

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
