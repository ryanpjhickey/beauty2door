import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LogInForm from "../components/LogInForm";
// import Login from "../pages/Login"
import "../styles/Home.css";
import Illustration from "../assets/skincare.jpg";

function Home() {
  return (
    <div className="home">
      <Container>
        <Row className="about-app">
          <Col sm={6}>
            <div className="intro">
              <h1>
                {" "}
                What is <span className="beauty2door"> BeautyToYou </span>?{" "}
              </h1>
              <div className="my-2">
                <p>
                  BeautyTo is a e-commerce delivery app where you can learn more about
                  skincare products and have them delivered directly to your door. If you are
                  in need of a new skincare routine, allow us to pick one out for you! Or, if you
                  are already familiar with the products you want, we have delivery options and can
                  recommend similar bundles tailored to your specific skincare needs.
                </p>
                <div className="home-photo-div">
                  <img
                    src={Illustration}
                    alt="skincare routine"
                    className="home-photo"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <LogInForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;