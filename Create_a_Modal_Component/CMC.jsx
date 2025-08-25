import {useState} from "react";

//Create a reusable modal component that can be opened and closed and display any content passed to it.
export default function CMC({setIsModal}) {
  return (
    <div>
      <button onClick={() => setIsModal((prev) => !prev)}>닫기</button>
      <div>내용</div>
    </div>
  );
}

function App() {
  const [isModal, setIsModal] = useState(false);

  return (
    <div>
      <button>모달 열기</button>
      {isModal && <CMC setIsModal={setIsModal} />}
    </div>
  );
}
