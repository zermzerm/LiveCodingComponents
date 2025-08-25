import {useState} from "react";

//Create a toggle switch component between "On" and "Off" states.
export default function ITS() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOn((prev) => !prev)}>{isOn ? "On" : "Off"}</button>
    </div>
  );
}
