import React from "react";

// 1.
const Student = ({ student }) => {
    return (
        <div>
            {student.name} 학생은 {student.subject} 수업을 수강중입니다.
            <br />
            점수는 {student.score}점으로 {student.score >= 80 ? "PASS" : "FAIL"}입니다.
        </div>
    );
};

// 2.
// const Student = ({ student }) => {
//     const strPass = student.score >= 80 ? "PASS" : "FAIL";
//     // 조건이 true일 경우 Pass false일 경우 Fail
//     return (
//         <div>
//             {student.name} 학생은 {student.subject} 수업을 수강중입니다.
//             <br />
//             점수는 {student.score}점으로 {strPass}입니다.
//         </div>
//     );
// };

export default Student;
