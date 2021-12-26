import React, { useState } from "react";
import "./style.css";

function TimeCal() {
  const [StartTime, setStartTime] = useState({ hour: 0, min: 0 });
  const [EndTime, setEndTime] = useState({ hour: 0, min: 0 });
  const [Result, setResult] = useState(0);
  const [ResultHour, setResultHour] = useState(0);

  const getResult = () => {
    let res = 0;

    res =
      60 -
      parseInt(StartTime.min) +
      parseInt(EndTime.min) +
      (parseInt(EndTime.hour) - parseInt(StartTime.hour) - 1) * 60;
    setResult(res);
  };

  return (
    <div>
      <h1>시간계산기</h1>
      <div className="layout">
        <div className="start time">
          시작시간 :
          <input
            value={StartTime.hour}
            onChange={(e) => {
              if (!isNaN(e.target.value))
                setStartTime({ ...StartTime, hour: e.target.value });
            }}
          ></input>
          시
          <input
            value={StartTime.min}
            onChange={(e) => {
              if (!isNaN(e.target.value))
                setStartTime({ ...StartTime, min: e.target.value });
            }}
          ></input>
          분
        </div>
        <div className="end time">
          끝시간 :
          <input
            value={EndTime.hour}
            onChange={(e) => {
              if (!isNaN(e.target.value))
                setEndTime({ ...EndTime, hour: e.target.value });
            }}
          ></input>
          시
          <input
            value={EndTime.min}
            onChange={(e) => {
              if (!isNaN(e.target.value))
                setEndTime({ ...EndTime, min: e.target.value });
            }}
          ></input>
          분
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
