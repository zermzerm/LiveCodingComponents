import {useState} from "react";

//Create a to-do list component where users can add, remove, and mark items as complete.
export default function BTDL() {
  const [list, setList] = useState([]);
  const [content, setContent] = useState("");

  const handleButton = () => {
    if (content) {
      setList([...list, {content: content, complete: false}]);
      setContent("");
    }
  };

  const handleComplete = (idx) => {
    const newList = [...list];
    newList[idx].complete = !newList[idx].complete;
    setList(newList);
  };

  const handleRemove = (idx) => {
    const newList = [...list];
    newList.splice(idx, 1);
    setList(newList);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input onChange={(e) => setContent(e.target.value)} />
      <button onClick={() => handleButton(content)}>작성</button>
      {list.map((el, idx) => (
        <div>
          <p key={idx}>{el.content}</p>
          <button onClick={() => handleComplete(idx)}>
            complete : {el.complete ? "complete" : "incomplete"}
          </button>
          <button onClick={() => handleRemove(idx)}>제거</button>
        </div>
      ))}
    </div>
  );
}
