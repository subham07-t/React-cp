import React from 'react'

const About = () => {

  let MidData = [
    {
    id:1,
    name:'Expert Members',
    description:'',
    },
    {
    id:2,
    name:'Sequre & Trusted',
    description:'Our founders Dustin Moskovitz and Justin quis Rosenstein met while leading Engineering team at Facebook.',
    },
    {
    id:3,
    name:'Expert Members',
    description:'',
    },
    {
    id:4,
    name:'Big Resources',
    description:'',
    },

  ]

  let Sdata = [
    {
      id:1,
      name:"3.5K",
      description:"Projects Done",
    },
    {
      id:2,
      name:"20million",
      description:"Plus pages Build",
    },
    {
      id:3,
      name:"3000+",
      description:"Device Invented",
    },

  ]

  return (
    <>
       {/* <!-- About us --> */}
            {/* <!-- starting --> */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                  <h2 className="sm:text-5xl text-3xl text-gray-900 lg:pr-24 font-medium title-font px-24 mb-2 md:w-2/5">We solve your Problem.</h2>
                  <div className="md:w-3/5 md:pl-6 ">
                    <p className="leading-relaxed text-base text-2xl pt-2 px-5">We don’t sell technology, We give <a href="#" className="text-indigo-700 underline ">ideas that boosts</a> your journey.</p>
                  </div>
                </div>
              </section>
              {/* <!-- Mid portion --> */}
              <section className="text-gray-600 body-font">
                <div className="container px-5  mx-auto flex flex-wrap">

                  <div className="lg:w-1/2 w-full h-full pl-1 mb-10 lg:mb-0 rounded-lg flex justify-center ">
                    <img src={process.env.PUBLIC_URL + "/imgs/Rectangle.png"} className="object-cover object-center h-1/2 w-1/2"/>
                  </div>

                  <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">

                    {
                      MidData.map((val)=>(

                    <div className="flex flex-col mb-10 lg:items-start items-center" key={val.id}>
                      <div className="flex-grow">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{val.name}</h2>
                        <p className="leading-relaxed text-base">{val.description}</p>
                      </div>
                    </div>
                    
                      ))
                    }

                  </div>
                </div>
              </section>
            {/* <!-- statistics --> */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto ">
                <div className="flex flex-wrap  text-center justify-center">
                {
                  Sdata.map((val)=>(
                    <div className="p-4 sm:w-1/4 w-1/2" key={val.id}>
                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{val.name}</h2>
                    <p className="leading-relaxed">{val.description}</p>
                    </div>
                  ))
                }
                </div>
                </div>
            </section>
    </>
  )
}

export default About