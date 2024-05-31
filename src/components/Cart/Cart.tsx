import { CartType } from "../../types/cart";
import { FC } from "react";

interface CartProps {
    cart: CartType;
}

const Cart: FC<CartProps> = (props) => {
    const {
        cart: { totalPrice, items },
    } = props;
    return (
        <div>
            <h3>Cart</h3>
            <ul>
                {items.length > 0 ? (
                    items.map((product) => (
                        <li>
                            {product.name} - {product.count}
                        </li>
                    ))
                ) : (
                    <p>Cart is empty</p>
                )}
            </ul>
            <p>Total price: {totalPrice}</p>
        </div>
    );
};

export default Cart;
