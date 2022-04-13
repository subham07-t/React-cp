import React, { useState } from "react";

function About() {
  //  const s  = [false , false , false , false ];
  const [showText, setShowText] = useState([false, false, false, false]);
  const [showAdd, showNotAdd] = useState(false);

  return (
    <>
      <section className="flex flex-col md:flex-row lg:flex-row p-8 md:gap-4 lg:gap-0  items-center lg:justify-evenly md:justify-evenly md:items-start">
        <div className="  text_start  flex-col flex md:flex-col lg:flex-col  overflow-y-auto  ">
          <div>
            <p className=" text-slate-400 text-xl">Why Choose us</p>
          </div>
          <div className="">
            <div>
              <h1 className="font-bold head text-5xl md:text-6xl">
                We solve your <br />
                Problem.
              </h1>
            </div>
            <div>
              <img
                className="w-8/12 md:10/12 lg:11/12 block_iot  "
                src="/imgs/Rectangle.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" pt-8 md:flex md:flex-col text_start">
          <h1 className="font-s  sub_heading text-2xl lg:text-3xl md:text-3xl">
            We don’t sell technology, We
            <br /> give ideas that boosts your
            <br /> journey.
          </h1>

          <div className="">
            <ul>
              <li className="py-2 pt-8">
                <div className="flex justify-between">
                  <div>
                    <h3>Expert Members </h3>
                  </div>
                  <div>
                    <span
                      className="flex-row pb-4 cursor-pointer"
                      id="span_1"
                      onClick={() =>
                        setShowText([!showText[0], false, false, false])
                      }
                    >
                      {" "}
                      {showText[0] ? "-" : "+"}
                    </span>
                  </div>
                </div>

                <div
                  className={`block p-2 space-y-2 transition-all ease duration-500 overflow-hidden ${
                    showText[0]
                      ? "h-auto text-xl opacity-1 "
                      : "h-0 p-0 text-sm opacity-0"
                  }`}
                >
                  <p id="para_1" className="text-sm ">
                    Lorem ipsum dolor sit, amet consectetur
                    <br /> adipisicing elit. Vero facere veritatis culpa quae
                    <br />
                    eum, libero expedita velit dolor accusamus
                    <br /> aliquid.
                  </p>
                </div>
              </li>
              <li className="py-2">
                <div className="flex pt-4 justify-between">
                  <div>
                    <h3>Secure & Trsuted</h3>
                  </div>
                  <div>
                    <span
                      className="flex-row pb-4 cursor-pointer"
                      id="span_1"
                      onClick={() =>
                        setShowText([false, !showText[1], false, false])
                      }
                    >
                      {" "}
                      {showText[1] ? "-" : "+"}
                    </span>
                  </div>
                </div>

                <div
                  className={`block p-2 space-y-2 transition-all ease duration-500 overflow-hidden ${
                    showText[1]
                      ? "h-auto text-xl opacity-1 "
                      : "h-0 p-0 text-sm opacity-0"
                  }`}
                >
                  <p id="para_1" className="text-sm  ">
                    Lorem ipsum dolor sit, amet consectetur
                    <br /> adipisicing elit. Vero facere veritatis culpa quae
                    <br />
                    eum, libero expedita velit dolor accusamus
                    <br /> aliquid.
                  </p>
                </div>
              </li>
              <li className="py-2">
                <div className="flex pt-4 justify-between">
                  <div>
                    <h3>Expert Members </h3>
                  </div>

                  <div>
                    <span
                      className="flex-row pb-4 cursor-pointer"
                      id="span_1"
                      onClick={() =>
                        setShowText([false, false, !showText[2], false])
                      }
                    >
                      {" "}
                      {showText[2] ? "-" : "+"}
                    </span>
                  </div>
                </div>

                <div
                  className={`block p-2 space-y-2 transition-all ease duration-500 overflow-hidden ${
                    showText[2]
                      ? "h-auto text-xl opacity-1 "
                      : "h-0 p-0 text-sm opacity-0"
                  }`}
                >
                  <p id="para_1" className="text-sm">
                    Lorem ipsum dolor sit, amet consectetur
                    <br /> adipisicing elit. Vero facere veritatis culpa quae
                    <br />
                    eum, libero expedita velit dolor accusamus
                    <br /> aliquid.
                  </p>
                </div>
              </li>

              <li className="py-2">
                <div className="flex pt-4 justify-between">
                  <div>
                    <h3>Big Resoruces</h3>
                  </div>
                  <div>
                    <span
                      className="flex-row pb-4 cursor-pointer"
                      id="span_1"
                      onClick={() =>
                        setShowText([false, false, false, !showText[3]])
                      }
                    >
                      {" "}
                      {showText[3] ? "-" : "+"}
                    </span>
                  </div>
                </div>

                <div
                  className={`block p-2 space-y-2 transition-all ease duration-500 overflow-hidden ${
                    showText[3]
                      ? "h-auto text-xl opacity-1 "
                      : "h-0 p-0 text-sm opacity-0"
                  }`}
                >
                  <p id="para_1" className="text-sm ">
                    Lorem ipsum dolor sit, amet consectetur
                    <br /> adipisicing elit. Vero facere veritatis culpa quae
                    <br />
                    eum, libero expedita velit dolor accusamus
                    <br /> aliquid.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row md:flex-row items-center gap-2 pt-8 justify-around pb-4">
        <div></div>

        <div className="py-4">
          <h1 className="text-4xl font-bold ">3.5K</h1>
          <p className="text-slate-400">Projects Done</p>
        </div>

        <div className="py-4">
          <h1 className="text-4xl font-bold">20million</h1>
          <p className="text-slate-400">Plus pages build</p>
        </div>
        <div className="py-4">
          <h1 className="text-4xl font-bold">3000+</h1>
          <p className="text-slate-400">Device invented</p>
        </div>

        <hr className="bg-black" />
      </div>
    </>
  );
}

export default About;
