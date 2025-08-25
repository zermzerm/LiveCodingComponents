import {useState} from "react";

//Create a star rating component where users can rate something from 1 to 5 stars.
export default function ISRC() {
  const [star, setStar] = useState(0);

  return (
    <div>
      {[...Array(5)].map((el, idx) => {
        const starValue = idx + 1;
        return (
          <span key={idx} onClick={setStar(starValue)}>
            ★
          </span>
        );
      })}
    </div>
  );
}
