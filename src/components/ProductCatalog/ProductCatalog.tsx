import { FC } from "react";
import { IProduct } from "../../types/products";
import Product from "../Product/Product";
import Row from "../Row/Row";

interface ProductCatalogProps {
    products: IProduct[];
}

const ProductCatalog: FC<ProductCatalogProps> = ({ products }) => {
    const handleAddCart = () => {
        alert("Added to basket");
    };
    const handleToggleFavorite = () => {
        alert("Favorites have been changed");
    };
    return (
        <Row>
            {products.map((product) => (
                <Product
                    product={product}
                    onAddCart={handleAddCart}
                    onToggleFavorite={handleToggleFavorite}
                />
            ))}
        </Row>
    );
};

export default ProductCatalog;
