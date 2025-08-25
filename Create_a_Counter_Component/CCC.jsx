import {useState} from "react";

//Create a simple counter component that increases or decreases the count when clicking buttons.
export default function CCC() {
  const [cnt, setCnt] = useState(0);

  const handleCount = ({sign}) => {
    sign === "plus" ? setCnt++ : setCnt--;
  };

  return (
    <div>
      <p>{cnt}</p>
      <button onClick={() => handleCount("plus")}>+</button>
      <button onClick={() => handleCount("minus")}>-</button>
      {/* <button onClick={() => setCount(count + 1)}>Increase</button> */}
      {/* <button onClick={() => setCount(count - 1)}>Increase</button> */}
    </div>
  );
}
