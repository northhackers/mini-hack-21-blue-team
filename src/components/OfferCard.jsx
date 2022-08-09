const OfferCard = () => {
  return (
    <div className="offer-card">
      <div className="offer-card__header">
        <h2>Offer</h2>
        <div className="offer-card__body">
          <div className="offer-card__body-item">
            <div className="offer-card__body-item-title">
              <h3>
                <span>
                  <i className="fas fa-tag"></i>
                </span>
                <span>Hello</span>
              </h3>
            </div>
            <div className="offer-card__body-item-actions">
              <button className="btn btn-primary">
                <i className="fas fa-edit"></i>
                <span>Accept</span>
              </button>
              <button className="btn btn-danger">
                <i className="fas fa-trash"></i>
                <span>Renegotiate</span>
              </button>
            </div>
          </div>
          <div className="offer-card__body-item"></div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
