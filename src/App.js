import React from "react";
import Student from "./components/Student";

function App() {
    const student1 = {
        name: "김똘똘",
        subject: "수학",
        score: 87,
    };
    const student2 = {
        name: "박뚤뚤",
        subject: "영어",
        score: 76,
    };
    return (
        <div className="App">
            <Student student={student1} />
            <Student student={student2} />
        </div>
    );
}

export default App;
