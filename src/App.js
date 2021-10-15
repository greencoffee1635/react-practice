import React, { useState } from "react";
import InsertForm from "./components/InsertForm";
import ListView from "./components/ListView";

function App() {
  const [todoList, setTodoList] = useState([]);
  
  const handleInsert = (value) => {
    setTodoList((current) => {
      const newList = [...current];
      newList.push({
        key: new Date().getTime(),
        value,
        isCompleted: false,
      });
      return newList;
    })
  }
  
  const handleComplete = (index) => {
    setTodoList((current) => {
      const newList = [...current];
      newList[index].isCompleted = true;
      return newList;
    });
  }
  
  const handleRemove = (index) => {
    setTodoList((current) => {
      const newList = [...current];
      newList.splice(index, 1); // 2를 넣으면 두개가 삭제되어버림
      //index위치 - Array의 메소드니까
      return newList;
    });
  }
  
  return (
    <div className="App">
        <ListView todoList={todoList}
          onComplete={handleComplete}
          onRemove={handleRemove} />
        <InsertForm onInsert={handleInsert} />
    </div>
  );
}

export default App;