import {useState, useEffect} from "react";

export default function FDFA() {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost~~~~", {method: GET})
      .then((res) => res.json())
      .then((data) => {
        setValue(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading</p>;

  return (
    <div>
      <p>Fetching Data : {value}</p>
    </div>
  );
}
