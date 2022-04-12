import React from "react";

const Team = () => {
  let teamData = [
    {
      id: 1,
      name: "Pralay Mandal",
      position: "CEO",
      imgSrc: "/imgs/team1.png",
    },
    {
      id: 2,
      name: "Manab Ranjan Das",
      position: "Marketing",
      imgSrc: "/imgs/team2.png",
    },
    {
      id: 3,
      name: "Bitu Saud",
      position: "Creative Head",
      imgSrc: "/imgs/team3.png",
    },
  ];

  let iconData = [
    {
      id: 1,
      path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
    },
    {
      id: 2,
      path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
    },
    {
      id: 3,
      path: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z",
    },
  ];
  return (
    <>
      {/* <!-- Our team --> */}
      <section className="text-gray-600 body-font">
        <div className="container px-24 py-24 mx-auto">
          <div className="flex flex-col text-start w-full mb-20">
            <h1 className="lg:text-6xl text-4xl font-bold title-font mb-4 text-gray-900">
              OUR CORE <br />
              TEAM PLAYERS.
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 lg:space-x-12 justify-center">
            {teamData.map((val) => (
              <div className="p-4 lg:w-1/4 md:w-1/2" key={val.id}>
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src={process.env.PUBLIC_URL + val.imgSrc}
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      {val.name}
                    </h2>
                    <h3 className="text-gray-500 mb-3">{val.position}</h3>

                    <span className="inline-flex">
                      {iconData.map((value) => (
                        <a className="text-gray-500" key={value.id}>
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d={value.path}></path>
                          </svg>
                        </a>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
