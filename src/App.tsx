import { useState } from "react";
import ProductCatalog from "./components/ProductCatalog/ProductCatalog";
import { ProductItem } from "./types/products";
import { CartType } from "./types/cart";
import Cart from "./components/Cart/Cart";

const products: ProductItem[] = [
    {
        id: 1,
        name: "Watch SEIKO Prospex SPB381",
        imageUrl: "/images/seiko.jpg",
        price: "1500$",
        discount: {
            type: "percent",
            value: 10,
        },
        rating: 4.9,
        isFavorite: true,
    },
    {
        id: 2,
        name: "Watch SEIKO Prospex SPB381",
        imageUrl: "/images/seiko.jpg",
        price: "1500$",
        rating: 4.9,
        isFavorite: true,
    },
    {
        id: 3,
        name: "Watch SEIKO Prospex SPB381",
        imageUrl: "/images/seiko.jpg",
        price: "1500$",
        rating: 4.9,
        isFavorite: true,
    },
];

function App() {
    const [cart, setCart] = useState<CartType>({
        items: [],
        totalPrice: 0,
    });

    return (
        <>
            <ProductCatalog products={products} setCart={setCart} />
            <hr />
            <Cart cart={cart} />
        </>
    );
}

export default App;
