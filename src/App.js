import React, { useState } from "react";
import Theme1 from "./components/Theme1";
import Theme2 from "./components/Theme2";
import "./App.css";

function App() {
  const [isRed, setIsRed] = useState(true);

  const handleComponentChange = (e) => {
    setIsRed(e.target.value === "red");
  };

  return (
    <>
      <div className="container">
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <tr>
            <td style={{ padding: "0px", width: "40%" }}>
              {isRed ? <Theme1 /> : <Theme2 />}
            </td>
            <td style={{ padding: "10px", width: "200px" }}>
              <label>
                <input
                  type="radio"
                  value="red"
                  checked={isRed}
                  onChange={handleComponentChange}
                />
                A
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  value="blue"
                  checked={!isRed}
                  onChange={handleComponentChange}
                />
                B
              </label>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default App;
