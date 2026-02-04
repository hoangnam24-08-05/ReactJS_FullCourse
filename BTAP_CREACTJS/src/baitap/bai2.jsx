import React from "react";
import ApiFetchStandard from "../component/APIs/ApiFetchStandard";
import ApiFetchAsync from "../component/APIs/ApiFetchAsync";
import ApiAxios from "../component/APIs/ApiAxios";

const Bai2 = () => {
  return (
    <div style={{ padding: "50px" }}>
      <h2 style={{ textAlign: "center" }}>Review API (3 Cách)</h2>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <ApiFetchStandard />
        <ApiFetchAsync />
        <ApiAxios />
      </div>
    </div>
  );
};

export default Bai2;
