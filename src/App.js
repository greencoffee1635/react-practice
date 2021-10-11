import React, { useState, useEffect } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue])

  return (
    <div className="App">
      <input value={inputValue} onChange={(e) => {
        setInputValue(e.target.value);
      }} />
    </div>
  );
}

// Effect Hook 사용 형태
// const App = () => {
//   useEffect(EffectCallback, Deps);
// }

export default App;