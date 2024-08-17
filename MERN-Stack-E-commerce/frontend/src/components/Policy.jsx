import "./Policy.css"

const Policy = () => {
  return (
    <section className="policy">
      <div className="container">
        <ul className="policy-list">
          <li className="policy-item">
            <i className="bi bi-truck" />
            <div className="policy-texts">
              <strong>FREE DELIVERY</strong>
              <span>From $49.99</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-headset" />
            <div className="policy-texts">
              <strong>SUPPORT 24/7</strong>
              <span>Online 24 hours</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-arrow-clockwise" />
            <div className="policy-texts">
              <strong>30 DAYS RETURN</strong>
              <span>Simply return it within 30 days</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-credit-card" />
            <div className="policy-texts">
              <strong>PAYMENT METHOD</strong>
              <span>Secure Payment</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Policy;
