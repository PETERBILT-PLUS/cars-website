import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <h1>Easy-Shop</h1>
        <nav>
          <a href="#">HOME</a>
          <a href="#">PRODUCTS</a>
          <a href="#">MORE</a>
          <a href="#">ABOUT</a>
        </nav>
      </header>
    );
  }
}
export default Navbar;
