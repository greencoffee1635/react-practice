import React, { useState } from 'react'

function App() {
  const [person, setPerson] = useState({
    name: "김오이",
    drink: "HENDRICK'S"
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson((current) => {
      const newPerson = {...current};
      newPerson[name] = value;
      return newPerson;
    })
  }
  return (
    <div>
      <input name="name" value={person.name} onChange={handleChange} />
      <input name="drink" value={person.drink} onChange={handleChange} />
      <button onClick={() => {
        alert(`${person.name}님은 ${person.drink}를 마십니다.`)
      }}>클릭</button>
    </div>
  )
}

export default App
