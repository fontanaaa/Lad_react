export interface ProductItem {
    id: number;
    name: string;
    imageUrl: string;
    price: string;
    discount?: {
        type: "percent" | "fix";
        value: number;
    };
    rating: number;
    isFavorite: boolean;
}

export interface ProductItemInCart extends ProductItem {
    count: number;
}
