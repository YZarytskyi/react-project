import React from "react";
import preloader from "../../../assets/images/Preloader.svg";

const Preloader = () => {
  return (
    <div>
      <img
        src={preloader}
        alt="loading"
        style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
      />
    </div>
  );
};

export default Preloader;
