import React from "react";
import { ThemeProvider } from "../Component/Bai_7/ThemeContext";
import { Layout } from "../Component/Bai_7/ThemComponent";

const Bai7 = () => {
  return (
    <div
      style={{ padding: "50px", minHeight: "100vh", backgroundColor: "#ddd" }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Bài 7: Theme Context
      </h2>
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </div>
  );
};

export default Bai7;
