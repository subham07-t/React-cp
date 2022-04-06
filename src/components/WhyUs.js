import React from 'react'

const WhyUs = () => {

  let WUData=[
    {
      desc:"Provides professional service with ease and single point of contact.",
      imgSrc:<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
      <path d="M20 6L9 17l-5-5"></path>
    </svg>,
    },
    {
      desc:"Takes complete responsibility from start to end.",
      imgSrc:<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
      <path d="M20 6L9 17l-5-5"></path>
    </svg>,
    },
    {
      desc:"Dedicated Relationship Manager in place.",
      imgSrc:<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
      <path d="M20 6L9 17l-5-5"></path>
    </svg>,
    },
  ]

  return (
    <>
      {/* <!-- Why choose us --> */}
      <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col  items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 lg:pl-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <div className="w-10 h-10 inline-flex items-center justify-center  mb-4">
                  <img src={process.env.PUBLIC_URL + "/imgs/Video Button.png"} className="w-10 h-10 inline-flex items-center justify-center"/>
                 </div>
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Why Choose
                <br className="hidden lg:inline-block"/>code Partner?
                </h1>
                <p className="mb-8 leading-relaxed">So how does it work? Let’s check our Getting Started tutorial htmlFor detailed info.</p>

                <nav className="flex flex-col sm:items-start sm:text-left text-center items-center mb-7 space-y-2.5">
                {
                  WUData.map((val)=>(
                  <a key={val.desc}>
                    <span className=" text-gray-500 w-4 h-4 mr-2  inline-flex items-center justify-center">
                      {val.imgSrc}
                    </span>{val.desc}
                  </a>
                  ))
                }
                </nav>

                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-black  py-2 px-6 focus:outline-none text-lg">Consult with an exprt now!</button>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center rounded" src={process.env.PUBLIC_URL + "/imgs/Secondary.png"}/>
              </div>
            </div>
          </section>
    </>
  )
}

export default WhyUs