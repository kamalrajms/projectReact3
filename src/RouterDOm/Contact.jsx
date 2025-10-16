import React, { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [dely, setDelay] = useState(5);
  const [isSending, setIsSending] = useState(false);
  const [timerId, setTimerId] = useState(null);
  const [sentMessage, setSetMessage] = useState("");

  const handlesend = () => {
    setIsSending(true);
    const id = setTimeout(() => {
      setSetMessage(message);
      setMessage("");
      setIsSending(false);
    }, dely * 1000);
    setTimerId(id);
  };
  const handleCancel = () => {
    if (timerId) clearInterval(timerId);
    setIsSending(false);
  };
  return (
    <div className="chat">
      <div className="chatApp">
        <h2>DM Delay Button</h2>
        <textarea
          placeholder="Type your text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          type="nmuber"
          value={dely}
          placeholder="Enter delay time"
          onChange={(e) => setDelay(e.target.value)}
        />
        {!isSending ? (
          <button onClick={handlesend}>sent with delay</button>
        ) : (
          <button onClick={handleCancel}>Cancel button</button>
        )}
        {sentMessage && (
          <div>
            <p>Message send</p>
            <p>{sentMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}
