
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector(getCart)
  const username = useSelector((state) => state.user.userName);

  if (!cart.length) return <EmptyCart />
  
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu/"> &larr; Back to menu </LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
      <ul className="mt-3 divide-y divide-stone-300 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button onClick={() => dispatch(clearCart())} type='secondary'>Clear Cart</Button>
        
      </div>
    </div>
  );
}

export default Cart;
