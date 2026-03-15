import { useState } from "react";
import Bai1 from "./pages/bai1";
import Bai2 from "./pages/bai2";
import Bai3 from "./pages/bai3";
import Bai4 from "./pages/bai4";
function App() {
  const [crPage, setCRPage] = useState(1);

  return (
    <div>
      <div>
        <button onClick={() => setCRPage(1)}>Bai1</button>
        <button onClick={() => setCRPage(2)}>Bai2</button>
        <button onClick={() => setCRPage(3)}>Bai3</button>
        <button onClick={() => setCRPage(4)}>Bai4</button>
      </div>

      <hr />
      <div>
        {crPage === 1 && <Bai1 />}
        {crPage === 2 && <Bai2 />}
        {crPage === 3 && <Bai3 />}
        {crPage === 4 && <Bai4 />}
      </div>
    </div>
  );
}

export default App;
