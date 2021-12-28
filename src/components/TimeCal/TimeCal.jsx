import React, { useState } from "react";
import "./style.css";

function TimeCal() {
  const [Time, setTime] = useState({
    Shour: 0,
    Smin: 0,
    Ehour: 0,
    Emin: 0,
  });
  const { Shour, Smin, Ehour, Emin } = Time;
  const [Result, setResult] = useState(0);

  const getResult = () => {
    const res =
      60 -
      parseInt(Smin) +
      parseInt(Emin) +
      (parseInt(Ehour) - parseInt(Shour) - 1) * 60;
    setResult(res);
  };

  const onChange = (e) => {
    let { value, name } = e.target;

    if (!isNaN(value)) {
      setTime({
        ...Time,
        [name]: value,
      });
    }
  };

  return (
    <div>
      <h1>시간계산기</h1>
      <div className="layout">
        <div className="start time">
          시작시간 :
          <input value={Shour} name="Shour" onChange={onChange}></input>시
          <input name="Smin" value={Smin} onChange={onChange}></input>분
        </div>
        <div className="end time">
          끝시간 :<input value={Ehour} name="Ehour" onChange={onChange}></input>
          시<input name="Emin" value={Emin} onChange={onChange}></input>분
        </div>
        <button onClick={getResult}>계산하기</button>
        <span className="result" style={{ color: "red" }}>
          {Result}분
        </span>
        <span className="result" style={{ color: "red" }}>
          {parseInt(Result / 60)}시간 {Result % 60}분
        </span>
      </div>
    </div>
  );
}

export default TimeCal;
