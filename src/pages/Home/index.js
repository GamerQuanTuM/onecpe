import "./style.css";
import { AiOutlineDownload } from "react-icons/ai";
import About from "../About";
const Home = () => {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <div className="top-header">
          <img
            // className="footer-logo"
            src={require("../../assets/images/onlylogo.png")}
            alt="app-logo"
            style={{ height: "40px", width: "150px", marginTop: "15px" }}
          />
          <div>
            <button className="button">
              Download Now
              <AiOutlineDownload
                style={{ fontSize: "1em", marginLeft: "10px", color: "white" }}
              />
            </button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <h1 style={{ marginTop: "100px" }}>
            One stop solution
            <br />
            for all your financial
            <br />
            transaction
          </h1>

          <img
            alt=""
            src={require("../../assets/images/HomeImage.png")}
            style={{ height: "450px", width: "450px", marginTop: "15px" }}
          />
        </div>
        <div style={{ marginLeft: "400px", position: "absolute", top: 450 }}>
          <button
            style={{
              backgroundColor: "#0a5ac9",
              border: "none",
              color: "white",
              padding: "5px 35px",
              textDecoration: "none",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Try Now
            <AiOutlineDownload
              style={{ fontSize: "1em", marginLeft: "10px", color: "white" }}
            />
          </button>
        </div>
      </div>
      <About />
    </>
  );
};

export default Home;
