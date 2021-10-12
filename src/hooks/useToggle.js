import { useState } from "react";

const useToggle = (initialValue) => {
  const [isOn, setIsOn] = useState();
  const toggle = () => {
    setIsOn((current) => {
      return !current;
    });
  };
  return { isOn, toggle };
};

export default useToggle;
