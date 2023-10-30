import React from "react";
import "./Home.css";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Timer from "../Component/Timer";
import YearTab from "../Component/YearTab/YearTab";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {scrollToTop()}
      <div id="particles-js">
        <div className="backi">
          <Header />
          <YearTab />
          <Timer />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
