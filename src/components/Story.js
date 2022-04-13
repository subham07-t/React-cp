import React, { useState } from "react";

const Story = ({ e }) => {
  const [mouse, setmouse] = useState(false);
  return (
    <div
      className="story point"
      onMouseEnter={() => setmouse(true)}
      onMouseLeave={() => setmouse(false)}
    >
      <div>
        <img src={e.pic} alt="" />
      </div>
      <div className="full">
        <div className={mouse ? "content blue" : "content"}>
          <div>
            <h2>{e.title}</h2>
            <span>{mouse ? "-" : "+"}</span>
          </div>
          <div className={mouse ? "show" : "hide"}>
            <p>{e.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
