import emptyCart from '~/assets/images/empty-cart.png';

function EmptyCart(props) {
  return (
    <>
      <h2>Your cart is empty</h2>
      <img src={emptyCart} alt="empty-cart" />
    </>
  );
}

export default EmptyCart;
