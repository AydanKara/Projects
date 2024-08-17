import "./CampaignItem.css"

const CampaignItem = () => {
  return (
    <div className="campaign-item">
      <h3 className="campaigns-title">
        Fashion Month <br />
        Ready in Capital <br />
        Shop
      </h3>
      <p className="campaigns-desc">
        Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
      </p>
      <a href="#" className="btn btn-primary">
        View All
        <i className="bi bi-arrow-right" />
      </a>
    </div>
  );
};

export default CampaignItem;
