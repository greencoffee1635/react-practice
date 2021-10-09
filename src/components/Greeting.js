import React from "react";

// 1.
const Greeting = props => {
    const { username } = props;
    return <h1>{username}님 안녕하세요.</h1>;
};

// 2.
// const Greeting = (props) => {
//     return <h1>
//     {props.username}</h1>
// }

// 3.
// const Greeting = ({ username }) => {
//     return <h1>{username}</h1>
// }
export default Greeting;
