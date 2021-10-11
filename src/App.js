import React, { useState, useEffect } from "react";

function App()  {
  const [count, setCount] = useState(0);

  useEffect(() => { 
      console.log(count);
  }, [count]);
  
  return (
  <button onClick={() => {
      setCount(current => {
          return current + 1;
      });
  }}>카운트 증가</button>);
}

export default App;