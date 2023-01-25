import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LogInForm from "../components/LogInForm";
// import Login from "../pages/Login"
import "../styles/Store.css";
import Illustration from "../assets/skincare.jpg";
import makeup1 from "../assets/makeup1.jpg"
import makeup2 from "../assets/makeup2.jpg"
import makeup3 from "../assets/makeup3.jpg"
import skincare1 from "../assets/skincare1.jpg"
import skincare2 from "../assets/skincare2.jpg"
import skincare3 from "../assets/skincare3.jpg"


function Store() {
    return (
    <div class="main lower">
  <h1>BeautyToYou Products</h1>
  <ul class="cards">
    <li class="cards_item">
      <div class="card">
        <img src={skincare1} />
        <div class="card_content">
          <h2 class="card_title">Skincare Starter Pack</h2>
          <p class="card_text">This pack includes our recommended skincare products for those who are not as familiar with skincare products.</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <img src={skincare2} />
        <div class="card_content">
          <h2 class="card_title">Skincare Enthusiast Bundle</h2>
          <p class="card_text">This pack is perfect for beauty enthusiasts! Get only the best of the best in this pack!</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <img src={skincare3} />
        <div class="card_content">
          <h2 class="card_title">Skincare Tester Pack</h2>
          <p class="card_text">This pack is perfect for testing out small size skincare products. Includes new and trendy products!</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <img src={makeup1} />
        <div class="card_content">
          <h2 class="card_title">Beauty Starter Pack</h2>
          <p class="card_text">This pack includes our recommended beauty products for those who are not as familiar with beauty products.</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <img src={makeup2} />
        <div class="card_content">
          <h2 class="card_title">Beauty Enthusiast Pack</h2>
          <p class="card_text">This pack is perfect for beauty enthusiasts! Get only the best of the best in this pack!</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <img src={makeup3} />
        <div class="card_content">
          <h2 class="card_title">Beauty Tester Pack</h2>
          <p class="card_text">This pack is perfect for testing out small size beauty products. Includes new and trendy products!</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
  </ul>
</div>
    );
}

export default Store;