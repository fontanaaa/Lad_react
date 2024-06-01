import { useImmer } from "use-immer";
import { ProductCatalog, Cart } from "@/components";
import { ProductItem, CartType } from "@/types";
import TestComponent from "./components/TestComponent/TestComponent";
import ThemeChanger from "./components/ThemeChanger/ThemeChanger";

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
    const [cart, updateCart] = useImmer<CartType>({
        items: [],
        totalPrice: 0,
    });

    return (
        <>
            <ThemeChanger />
            <TestComponent />
            <ProductCatalog products={products} updateCart={updateCart} />
            <hr />
            <Cart cart={cart} />
        </>
    );
}

export default App;
