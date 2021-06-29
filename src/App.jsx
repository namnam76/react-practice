import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
/* eslint react-hooks/exhaustive-deps:off */
const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  useEffect(() => {
    console.log("useEffect!");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    // タグをまとめるには<React.Fragment>か<>
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {/* <ColorfulMessage color="pink" message="元気です！" />  */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( *´艸｀)</p>}
    </React.Fragment>
  );
};
export default App;
