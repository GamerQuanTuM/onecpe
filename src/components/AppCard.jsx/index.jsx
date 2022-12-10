import React from "react";
import playstore from "../../assets/images/playstore.png";

const AppCard = () => {
  return (
    <div className="card" style={{ height: "300px", position: "relative",paddingBottom:'0px' }}>
      <div
        style={{
          marginLeft: "665px",
          position: "absolute",
          top: 80,
          color: "white",
        }}
      >
        <h5
          className="card-title"
          style={{
            fontWeight: "bold",
            fontSize: "30px",
            marginTop: "-50px",
            marginLeft: "-18px",
          }}
        >
          Get the App
        </h5>
      </div>
      <div
        className="card-body"
        style={{
          backgroundColor: "#6119a4",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: "150px",
        }}
      >
        <button
          type="button"
          className="btn"
          style={{
            padding: "20px 80px",
            borderRadius: "50px",
            backgroundColor: "rgb(10,90,201)",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "20px",
            color: "white",
          }}
        >
          <img src={playstore} alt="" style={{height:"60px",width:'60px',paddingRight:'20px'}}/>
          Download Now
        </button>
        {/* <button
          type="button"
          className="btn"
          style={{
            padding: "20px 80px",
            borderRadius: "50px",
            backgroundColor: "rgb(10,90,201)",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "30px",
            color: "white",
          }}
        >
          Secondary
        </button> */}
      </div>
    </div>
  );
};

export default AppCard;
