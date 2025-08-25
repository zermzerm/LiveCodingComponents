import {useState} from "react";

//Create a search filter component that filters a list of items in real-time as the user types.
export default function CRTSB({arr}) {
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const filteredData = arr.filter((el) => el.lowerCase().includes(text));

  return (
    <div>
      <input onChange={handleText} />
      <div>
        {filteredData.map((el) => (
          <p>{el}</p>
        ))}
      </div>
    </div>
  );
}

const App = () => {
  const tmpArr = [
    "abc",
    "cde",
    "efg",
    "ghi",
    "ijk",
    "klm",
    "mno",
    "opq",
    "qrs",
    "stu",
    "uvw",
    "wxyz",
  ];
  return <CRTSB arr={tmpArr} />;
};
