import React from "react";
import { useState } from "react";
import Alert from "../Component/Bai_3/Alert";
import Button from "../Component/Bai_2/Button";

const Bai3 = () => {
  const [alertState, setAlertState] = useState(null);
  const showAlert = (type, message) => {
    setAlertState({ type, message });

    setTimeout(() => {
      setAlertState(null);
    }, 3000);
  };
  const handleFakeApi = () => {
    setAlertState({
      type: "warning",
      message: "Loading data from fake API...",
    });

    const fakeApi = new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSucess = Math.random() > 0.5;
        if (isSucess) resolve("Data loaded successfully!");
        else reject("Error loading data.");
      }, 2000);
    });

    fakeApi
      .then((successMessage) => {
        setAlertState({ type: "success", message: successMessage });
      })
      .catch((errorMessage) => {
        setAlertState({ type: "error", message: errorMessage });
      });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        marginTop: "50px",
      }}
    >
      <h2>Bài 3: Alert & State Management</h2>

      {}
      <div style={{ display: "flex", gap: "15px" }}>
        <Button
          type="success"
          onClick={() => showAlert("success", "Thao tác thành công!")}
        >
          Success Alert
        </Button>

        <Button
          type="warning"
          onClick={() => showAlert("warning", "Cảnh báo hệ thống!")}
        >
          Warning Alert
        </Button>

        <Button
          type="danger"
          onClick={() => showAlert("error", "Đã có lỗi xảy ra!")}
        >
          Error Alert
        </Button>
      </div>

      <div
        style={{
          marginTop: "20px",
          borderTop: "1px solid #ddd",
          paddingTop: "20px",
          textAlign: "center",
        }}
      >
        <p>Thử nghiệm Promise (Giả lập API)</p>
        <Button type="primary" onClick={handleFakeApi}>
          Call Fake API
        </Button>
      </div>

      {/* Khu vực hiển thị Alert (Dựa vào State) */}
      {/* Nếu alertState khác null thì mới render Alert */}
      {alertState && <Alert type={alertState.type} text={alertState.message} />}
    </div>
  );
};

export default Bai3;
