import "./style.css";
import React, { useState } from "react";
import ReactScrollableFeed from "react-scrollable-feed";
import Carousel from "react-bootstrap/Carousel";
import firstSlide from "../../assets/images/firstSlideUpdated.png";
import secondSlide from "../../assets/images/secondSlideUpdated.png";
import thirdSlide from "../../assets/images/thirdSlideUpdated.png";

function About() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          className="scrollELement"
          style={{
            overflowY: "scroll",
            height: "100vh",
          }}
        >
          <ReactScrollableFeed forceScroll={true}>
            <div style={{ height: "100%" }}>
              <h2
                style={{
                  paddingLeft: "200px",
                  paddingTop: "120px",
                  height: "100%",
                }}
              >
                <p style={{ fontSize: "25px" , fontWeight:'500'}}>
                  Come, Let's gets started for managing your business
                </p>
              </h2>
              <h2
                style={{
                  paddingLeft: "200px",
                  paddingTop: "120px",
                  height: "100%",
                }}
              >
                <p style={{ fontSize: "25px" , fontWeight:'500'}}>
                  Quick look of dashboard with all business information.
                </p>
              </h2>
              <h2
                style={{
                  paddingLeft: "200px",
                  paddingTop: "120px",
                  height: "100%",
                }}
              >
                <p style={{ fontSize: "25px" , fontWeight:'500'}}>
                  Easy login and signup for vendors.
                </p>
              </h2>
            </div>
          </ReactScrollableFeed>
        </div>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          style={{
            position: "absolute",
            right: 400,
            marginTop: "45px",
          }}
          onScroll={() => {}}
          controls={false}
        >
          <Carousel.Item
            style={{
              backgroundColor: "#676f7400",
            }}
          >
            <img
              className="mx-auto d-block"
              src={firstSlide}
              alt="First slide"
              height={450}
              width={250}
            />
          </Carousel.Item>
          <Carousel.Item
            style={{
              backgroundColor: "#676f7400",
            }}
          >
            <img
              className="rounded mx-auto d-block"
              src={secondSlide}
              alt="Second slide"
              height={450}
              width={250}
            />
          </Carousel.Item>
          <Carousel.Item
            style={{
              backgroundColor: "#676f7400",
            }}
          >
            <img
              className="rounded mx-auto d-block"
              src={thirdSlide}
              alt="Third slide"
              height={450}
              width={250}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default About;
