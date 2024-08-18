const CartItem = () => {
  return (
    <tr className="cart-item">
      <td></td>
      <td className="cart-image">
        <img src="img/products/product1/1.png" alt="" />
        <i className="bi bi-x delete-cart" data-id="1" />
      </td>
      <td>Analogue Resin Strap</td>
      <td>$108</td>
      <td className="product-quantity">1</td>
      <td className="product-subtotal">$108.00</td>
    </tr>
  );
};

export default CartItem;
