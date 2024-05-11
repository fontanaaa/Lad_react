function App() {
    const products = [
        {
            id: 1,
            title: "name of product 1",
        },
        {
            id: 2,
            title: "name of product 2",
        },
        {
            id: 3,
            title: "name of product 3",
        },
    ];

    const productList = products.map((product) => (
        <li>
            <a href="#s">{product.title}</a>
        </li>
    ));

    return <>{productList}</>;
}

export default App;
