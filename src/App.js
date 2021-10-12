import React from "react";
import useToggle from "./hooks/useToggle";

function App() {
  const { isOn, toggle } = useToggle(false);
  return (
    <div>
      <button onClick={() => {
          toggle();
        }}>
        {isOn ? "켜짐" : "꺼짐"}
      </button>
    </div>
  );
}

export default App;
