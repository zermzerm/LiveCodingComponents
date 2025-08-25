import {useState} from "react";

export default function CSB() {
  const [value, setValue] = useState([]);

  const filteredData = value.filter((el) => {
    el.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} />
      {filteredData.map((el, idx) => (
        <p key={idx}>{el}</p>
      ))}
    </div>
  );
}
