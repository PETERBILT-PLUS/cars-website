import React from "react";

class ShopSection extends React.Component {
  render() {
    return (
      <section className="shop-section">
        <h2>Our Products</h2>
        <div className="products-section" id="products-section">
          <div className="product-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/1999-2000_Mitsubishi_Lancer_%28CK2%29_1.8_SEi_Limited_Sedan_%282018-07-03%29_04.jpg" />
          </div>
        </div>
      </section>
    );
  }
}

export default ShopSection;
