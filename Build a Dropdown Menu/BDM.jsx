export default function BDM() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <button onClick={() => setIsClicked(!isClicked)}>{isClicked ? "close" : "open"}</button>
      {isClicked && (
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      )}
    </div>
  );
}
