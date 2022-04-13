import React, { useRef } from "react";

import Story from "./Story";
import "../Css/OurStory.css";

const OurStory = () => {
  const ref = useRef();
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  const stories = [
    {
      pic: "imgs/mask1.jpeg",
      title: "Best selling plugin.",
      subtitle: "Lorem ipsum dolor sit amet, consu adielit, sed do eiusmod",
    },
    {
      pic: "imgs/grey.jpg",
      title: "Best Service Provider.",
      subtitle: "Lorem ipsum dolor sit amet, consu adielit, sed do eiusmod",
    },
    {
      pic: "imgs/dg.jpg",
      title: "Highly Train Expert.",
      subtitle: "Lorem ipsum dolor sit amet, consu adielit, sed do eiusmod",
    },
    {
      pic: "imgs/grey.jpg",
      title: "WP Award winner.",
      subtitle: "Lorem ipsum dolor sit amet, consu adielit, sed do eiusmod",
    },
    {
      pic: "imgs/dg.jpg",
      title: "Best Service Provider.",
      subtitle: "Lorem ipsum dolor sit amet, consu adielit, sed do eiusmod",
    },
    {
      pic: "imgs/grey.jpg",
      title: "Highly Train Expert.",
      subtitle: "Lorem ipsum dolor sit amet, consu adielit, sed do eiusmod",
    },
    {
      pic: "imgs/dg.jpg",
      title: "WP Award winner.",
      subtitle: "Lorem ipsum dolor sit amet, consu adielit, sed do eiusmod",
    },
  ];
  return (
    <div className="ourAchivements">
      <div className="top">
        <div className="heading">
          <h1>Our Success Story.</h1>
        </div>
        <div className="slidebtns">
          <button onClick={() => scroll(-390)}>&larr;</button>
          <button onClick={() => scroll(390)}>&rarr;</button>
        </div>
      </div>
      <div ref={ref} className="stories">
        {stories.map((e, i) => (
          <div key={i}>
            <Story e={e} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurStory;
