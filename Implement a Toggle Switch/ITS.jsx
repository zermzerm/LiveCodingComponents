export default function ITS() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOn((prev) => !prev)}>{isOn ? "On" : "Off"}</button>
    </div>
  );
}
