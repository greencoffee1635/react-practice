import React, { useState } from "react";
import Greeting from "./components/Greeting";

function App() {
  const [isCreated, setIsCreated] = useState(false);
  return (
    <div>
      <button onClick={() => {
          setIsCreated(current => {
            return !current;
            // !는 not, 반전해서 return
          });
        }}>컴포넌트 생성/제거</button>
      {isCreated && <Greeting />}
      {/* isCreated가 true면, <Greeting />을 실행 (boolean)
      isCreated가 false면, 뒤로 넘어가지 않는다. */}
    </div>
  );
}

export default App;