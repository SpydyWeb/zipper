import React, { useState } from "react";
import "./JoinWaitList.css";
import JoinWaitListEmail from "../JoinWaitListEmail/JoinWaitListEmail";

const JoinWaitList = ({ title = "Join Waitlist", marginTop = "0" }) => {
  const [showPopup, setPopup] = useState(false);
  const togglePopup = () => {
    setPopup(!showPopup);
  };
  return (
    <div
      style={{
        marginTop,
      }}
      className="joinWaitlist"
    >
      <button onClick={() => togglePopup()} className="joinWaitlistButton">
        {title}
      </button>

      {showPopup ? (
        <JoinWaitListEmail text="Title" closePopup={() => togglePopup()} />
      ) : null}
    </div>
  );
};

export default JoinWaitList;
