import React from "react";
import Header from "../Component/Bai_1/Header";
import StudentInfo from "../Component/Bai_1/StudentInfo";
import Footer from "../Component/Bai_1/Footer";

const Bai1 = () => {
  const studentData = {
    name: "Trần Hoàng Nam",
    mssv: "23639071",
    lop: "DHKTPM19ATT",
  };
  const studentData1 = {
    name: "Trần Nguyễn Như Ý",
    mssv: "23639072",
    lop: "DHKTPM19ATT",
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <h2
        style={{ textAlign: "center", marginBottom: "30px", color: "#495057" }}
      >
        Bài Tập 1: Thông Tin Sinh Viên
      </h2>
      <Header />
      <main>
        <StudentInfo
          name={studentData.name}
          mssv={studentData.mssv}
          lop={studentData.lop}
        />
      </main>
      <main>
        <StudentInfo
          name={studentData1.name}
          mssv={studentData1.mssv}
          lop={studentData1.lop}
        />
      </main>

      <Footer />
    </div>
  );
};

export default Bai1;
