import React, { useEffect, useState } from "react";
import "./toggle.css";
function Toggle() {
  const [togglestate, settogglestate] = useState("off");

  function toggleClick() {
    const newState = togglestate === "off" ? "on" : "off";
    settogglestate(newState);
  }
useEffect(()=>{
  if(togglestate==="on")
  {
    document.body.classList.add('dark-theme');
  }
  else{
    document.body.classList.remove('dark-theme');
  }
},[togglestate]);
  return (
    <div className="container">
      <input
        id="btn"
        className="Input"
        type={"checkbox"}
        onClick={toggleClick}
      ></input>
      <label for="btn" className={`Button`}></label>
    </div>
  );
}

export default Toggle;
