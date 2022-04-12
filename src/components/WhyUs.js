import React from "react";

const WhyUs = () => {
  let WUData = [
    {
      desc: "Provides professional service with ease and single point of contact.",
      imgSrc: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          className="w-3 h-3"
          viewBox="0 0 24 24"
        >
          <path d="M20 6L9 17l-5-5"></path>
        </svg>
      ),
    },
    {
      desc: "Takes complete responsibility from start to end.",
      imgSrc: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          className="w-3 h-3"
          viewBox="0 0 24 24"
        >
          <path d="M20 6L9 17l-5-5"></path>
        </svg>
      ),
    },
    {
      desc: "Dedicated Relationship Manager in place.",
      imgSrc: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          className="w-3 h-3"
          viewBox="0 0 24 24"
        >
          <path d="M20 6L9 17l-5-5"></path>
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* <!-- Why choose us --> */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex   pb-20 md:flex-row flex-col flex-col-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 lg:pl-24 md:pr-16 px-12 flex flex-col md:items-start md:text-left lg:mt-40 mt-10 md:mb-0 items-start text-start">
            <div className="w-10 h-10 inline-flex items-start justify-start  mb-4">
              <img
                src={process.env.PUBLIC_URL + "/imgs/Video Button.png"}
                className="w-10 h-10 inline-flex items-start justify-start"
              />
            </div>
            <h1 className="title-font lg:text-6xl text-4xl mb-4 font-bold text-gray-900">
              Why Choose
              <br className="lg:text-6xl text-4xl" />
              code Partner?
            </h1>
            <p className="mb-8 leading-relaxed">
              So how does it work? Let’s check our Getting Started tutorial
              htmlFor detailed info.
            </p>

            <nav className="flex flex-col sm:items-start sm:text-left text-start items-start mb-7 space-y-2.5">
              {WUData.map((val) => (
                <a key={val.desc}>
                  <span className=" text-gray-500 w-4 h-4 mr-2  inline-flex items-start justify-start">
                    {val.imgSrc}
                  </span>
                  {val.desc}
                </a>
              ))}
            </nav>

            <div className="flex justify-center">
              <button className="inline-flex text-white bg-black  py-2 px-6 focus:outline-none text-lg">
                Consult with an exprt now!
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 lg:h-fullmd:w-1/2 w-5/6 ">
            <img
              className="mx-auto"
              src={process.env.PUBLIC_URL + "/imgs/Secondary.png"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
