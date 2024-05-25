import { FC } from "react";
import { ProductItem } from "../../types/products";
import Product from "../Product/Product";
import Row from "../Row/Row";
import { CartType } from "../../types/cart";

interface ProductCatalogProps {
    products: ProductItem[];
    setCart: React.Dispatch<React.SetStateAction<CartType>>;
}

const ProductCatalog: FC<ProductCatalogProps> = ({ products, setCart }) => {
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
                    setCart={setCart}
                    onToggleFavorite={handleToggleFavorite}
                />
            ))}
        </Row>
    );
};

export default ProductCatalog;
