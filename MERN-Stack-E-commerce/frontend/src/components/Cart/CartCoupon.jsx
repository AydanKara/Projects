import { useContext, useState } from "react";
import { CartContext } from "../../context/CartProvider";
import { message } from "antd";

const CartCoupon = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const { cartItems, setCartItems } = useContext(CartContext);
  const [couponCode, setCouponCode] = useState("");

  const applyCoupon = async (e) => {
    e.preventDefault();
    if (couponCode.trim().length === 0) {
      return message.warning("Coupon Code is missing");
    }
    try {
      const response = await fetch(`${apiUrl}/api/coupons/code/${couponCode}`);

      if (!response.ok) {
        return message.warning("Invalid Coupon Code: " + couponCode);
      }

      const data = await response.json();
      const discountPercentage = data.discountPercent;

      const updatedCartItems = cartItems.map((item) => {
        const updatePrice = item.price * (1 - discountPercentage / 100);
        return { ...item, price: updatePrice };
      });

      setCartItems(updatedCartItems);
      message.success("Coupon Code updated successfully")
    } catch (error) {
      console.error("Coupon Error", error);
    }
  };
  return (
    <div className="actions-wrapper">
      <div className="coupon">
        <input
          type="text"
          className="input.text"
          placeholder="Coupon code"
          onChange={(e) => setCouponCode(e.target.value)}
          value={couponCode}
        />
        <button className="btn" onClick={applyCoupon}>
          Apply Coupon
        </button>
      </div>
      <div className="update-cart">
        <button className="btn">Update cart</button>
      </div>
    </div>
  );
};

export default CartCoupon;
