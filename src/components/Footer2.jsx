import React from "react";
import { AiFillFacebook, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../assets/images/onlylogo.png";

const Footer2 = () => {
  return (
    <div>
      <div className="container mt-5 mx-0">
        <footer
          className="bg-dark text-center text-white"
          style={{ width: "100vw", marginLeft: "-15px" }}
        >
          <div className="container p-4 pb-0">
            <section className="">
              <form action="">
                <div
                  className="row d-flex align-items-sm-center"
                  style={{ justifyContent: "flex-start", gap: "100px" }}
                >
                  <div className="col-auto">
                    <img src={Logo} alt="" />
                  </div>

                  <div
                    className="col-md-5 col-12"
                    style={{ marginTop: "50px" }}
                  >
                    <div
                      style={{
                        height: "75px",
                        width: "max-content",
                        display: "flex",
                        gap: "20px",
                      }}
                    >
                      <li className="nav-item" style={{ marginLeft: "150px" }}>
                        <Link to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/privacy">Privacy Policy</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/terms">Terms & Conditions</Link>
                      </li>

                      <li className="nav-item" style={{ marginLeft: "250px" }}>
                        <AiFillFacebook size={30} />
                      </li>
                      <li className="nav-item" style={{ marginLeft: "20px" }}>
                        <AiFillPhone size={30} />
                      </li>
                      <li className="nav-item" style={{ marginLeft: "20px" }}>
                        <AiOutlineMail size={30} />
                      </li>
                    </div>
                  </div>
                </div>
              </form>
            </section>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2022{" "}
            <a className="text-white" href="https://mdbootstrap.com/">
              OneCpe All Rights Reserved
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer2;
