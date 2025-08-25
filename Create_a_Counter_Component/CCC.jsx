import {useState} from "react";

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
