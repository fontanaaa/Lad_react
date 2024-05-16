import ProductCatalog from "./components/ProductCatalog/ProductCatalog";

function App() {
    const products = [
        {
            id: 1,
            name: "Наручные часы мужские SEIKO Prospex SPB381",
            imageUrl: "/images/seiko.jpg",
            price: "1500$",
            discount: 5,
            rating: 4.9,
            isFavorite: true,
        },
        {
            id: 2,
            name: "Наручные часы мужские SEIKO Prospex SPB381",
            imageUrl: "/images/seiko.jpg",
            price: "1500$",
            discount: 5,
            rating: 4.9,
            isFavorite: true,
        },
    ];
    return (
        <>
            <ProductCatalog products={products} />
        </>
    );
}

export default App;
