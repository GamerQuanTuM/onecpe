import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
import { AiFillFacebook, AiFillPhone, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <Row className="w-100 m-0 p-3">
        <Col
          lg="3"
          md="6"
          sm="12"
          className="d-flex justify-content-center align-items-center"
        >
          <img
            className="footer-logo"
            src={require("../../assets/images/Logo.png")}
            alt="app-logo"
          />
        </Col>
        <Col lg="2" md="12" sm="12"></Col>
        <Col lg="2" md="6" sm="12">
          <p className="footer-header mt-3">Quick Link</p>
          <ul>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/privacy" className="nav-link">
                Privacy Policy
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="tel:1234567890"
                data-telegram="telegram"
                style={{ fontSize: "14px" }}
              >
                Contact Us
              </a>
            </li>
            {/* <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/terms" className="nav-link">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </Col>
        <Col lg="3" md="6" sm="12">
          <p className="footer-header mt-3">Quick contact</p>
          <ul>
            <li className="nav-item">
              <a className="nav-link" href="mailto:baisnab.ent@gmail.com">
                <div style={{ display: "flex" }}>
                  <AiOutlineMail style={{ marginTop: "5px" }} />
                  <p style={{ marginLeft: "10px" }}>Email</p>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="tel:03454296107">
                <div style={{ display: "flex" }}>
                  <AiFillPhone style={{ marginTop: "5px" }} />
                  <p style={{ marginLeft: "10px" }}>Phone</p>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <div style={{ display: "flex" }}>
                  <AiFillFacebook style={{ marginTop: "5px" }} />
                  <p style={{ marginLeft: "10px" }}>Facebook</p>
                </div>
              </a>
            </li>

            <li className="d-flex px-3 pt-3">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.facebook.com/baisnabentcsc"
              >
                <i className="fab fa-facebook-square me-2"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.facebook.com/baisnabentcsc"
              >
                <i className="fab fa-instagram me-2"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <p className="w-100 p-0 m-0 text-center py-2 text-secondary fw-light border-top border-1 border-dark">
        © 2022 OneCpe All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
