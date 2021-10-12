import React, { useState, useCallback } from "react";

function App() {
  const [foo, setFoo] = useState(0);
  const [bar, setBar] = useState(0);

  const calc = useCallback(() => {
    return foo + bar;
  }, [foo, bar]);

  return (
    <div>
      <input value={foo} onChange={(event) => {
        setFoo(parseInt(event.target.value));
        // parseInt는 string을 정수로 변환해준다.
      }} />
      <input value={bar} onChange={(event) => {
        setBar(parseInt(event.target.value));
      }} />
      <div>{calc()}</div>
      {/* 함수니까 호출을 한번해서 리턴된 값을 출력해야한다. */}
    </div>
  );
}

export default App;