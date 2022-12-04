import React from "react";
import "./styles.css";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ShopSection from "./ShopSection";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <HeroSection />
        <ShopSection />
      </div>
    );
  }
}

export default App;
