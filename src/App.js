import React, { useState } from "react";

function App() {
  const [person, setPerson] = useState({
    name: "김민수",
    count: 0,
  });
  return (
    <div className="App">
      <button
        onClick={() =>
          setPerson(current => {
            const newPerson = { ...current }
            current.count = current.count + 1;
            return newPerson;
          })
        }>클릭</button>
      <span>
        {person.name}님이 버튼을 {person.count}회 클릭하였습니다.
      </span>
    </div>
  );
}

// const App = () => {
//   const [person, setPerson] = useState({
//       name: "민수",
//       age: 23
//   });
// //  (...) 잘못된 예
//   setPerson((current) => {
//       current.age = 24;
//       return current;
//   })
// }
// //  (...) 올바른 예
//   setPerson((current) => {
//       const newPerson = {...current}; // Spread syntax(전개구문)를 이용해 object를 복사.
//       newPerson.age = 24;
//       return newPerson;
//   })


export default App;
