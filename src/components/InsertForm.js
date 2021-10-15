import React, { useState } from "react";

const InsertForm = ({ onInsert }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if(typeof onInsert === "function") {
      onInsert(inputValue);
    }
    setInputValue("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={inputValue} onChange={event => {
          setInputValue(event.target.value);
        }} />
      <button type="submit">등록</button>
      {/* <button type="button">초기화</button>
타입을 지정하지 않으면 초기화 눌러도 submit 이벤트가 진행될 수 있다. */}
    </form>
  );
};

export default InsertForm;
