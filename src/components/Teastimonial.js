import React from "react";

const Teastimonial = () => {
  return (
    <>
      {/* <!-- Testimonials --> */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24  justify-center md:flex-row flex-col items-center ">
          <div className=" lg:w-1/4 md:w-1/2  mb-10 md:mb-0">
            <img src={process.env.PUBLIC_URL + "/imgs/Group 19868.svg"} />
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className=" p-6 text-2xl ">
              <div className="w-10 h-10 inline-flex items-center justify-center  mb-4">
                <img
                  src={process.env.PUBLIC_URL + "/imgs/Icon2.svg"}
                  className="w-10 h-10 inline-flex items-center justify-center"
                />
              </div>
              <p className="mb-8 leading-relaxed mr-5">
                “Certainly from my perspective, Dream City has been a great
                success—with{" "}
                <a className="text-indigo-800 underline">CPIOT PlathtmlForm</a>{" "}
                giving us that enterprise-level of assured quality on top.”
              </p>
              <span className="inline-block h-1 w-10 rounded bg-gray-500 mt-8 mb-6"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Meetun Norsha
              </h2>
              <p className="text-gray-500">INDIA</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Teastimonial;
