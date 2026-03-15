// import React from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./component/Home";
// import ProductLists from "./component/ProductLists";
// import ProductDetail from "./component/ProductDetail";
// import Dashboard from "./component/Dashboard";

// function App() {
//   return (
//     <BrowserRouter>
//       <div
//         style={{
//           maxWidth: "800px",
//           margin: "0 auto",
//           padding: "20px",
//           fontFamily: "sans-serif",
//         }}
//       >
//         {}
//         <nav
//           style={{
//             display: "flex",
//             gap: "20px",
//             padding: "15px",
//             background: "#333",
//             color: "white",
//             borderRadius: "8px",
//           }}
//         >
//           <Link to="/" style={{ color: "white", textDecoration: "none" }}>
//             Home
//           </Link>
//           <Link
//             to="/products"
//             style={{ color: "white", textDecoration: "none" }}
//           >
//             Products
//           </Link>
//           <Link
//             to="/dashboard"
//             style={{ color: "white", textDecoration: "none" }}
//           >
//             Dashboard
//           </Link>
//         </nav>

//         <div style={{ marginTop: "30px" }}>
//           {}
//           <Routes>
//             {}
//             <Route path="/" element={<Home />} />

//             {}
//             <Route path="/products" element={<ProductLists />}>
//               <Route path=":id" element={<ProductDetail />} />
//             </Route>

//             {}
//             <Route path="/dashboard" element={<Dashboard />}>
//               {}
//               <Route index element={<p>Vui lòng chọn menu bên trên.</p>} />
//               <Route path="users" element={<h4>Đây là danh sách Users</h4>} />
//               <Route
//                 path="profile"
//                 element={<h4>Đây là trang cá nhân Profile</h4>}
//               />
//             </Route>

//             {}
//             <Route path="*" element={<h2>404 - Không tìm thấy trang!</h2>} />
//           </Routes>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import MainLayout from "./component/MainLayout";
import User from "./component/User";
import Guest from "./component/Guest";
import Product from "./component/Product";

function App() {
  return (
    <BrowserRouter>
      {}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          fontFamily: "sans-serif",
        }}
      >
        <Routes>
          {}
          <Route path="/" element={<MainLayout />}>
            {}
            <Route
              index
              element={<h3>Chào mừng! Vui lòng chọn menu phía trên.</h3>}
            />

            {}
            <Route path="user" element={<User />} />
            <Route path="guest" element={<Guest />} />
            <Route path="product" element={<Product />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
