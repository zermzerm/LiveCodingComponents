import {useState} from "react";

//Create a carousel component that cycles through a set of images.
export default function BCC({imgData}) {
  const [imgIdx, setImgIdx] = useState(0);
  const imgLength = imgData.length;

  const handleRight = () => {
    setImgIdx((imgIdx + 1) % imgLength);
  };
  const handleLeft = () => {
    if (imgIdx === 0) setImgIdx(imgData.length);
    else setImgIdx((imgIdx - 1 + imgLength) % imgLength);
  };

  return (
    <div>
      <div>
        <image src={imgData[imgIdx]} />
      </div>
      <button onClick={handleRight}>{">"}</button>
      <button onClick={handleLeft}>{"<"}</button>
    </div>
  );
}

function App() {
  const imgArr = ["/images/1", "/images/2", "/images/3"];
  return <BCC imgData={imgArr} />;
}
