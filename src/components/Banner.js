import React from 'react'

const Banner = () => {
  return (
    <>
    {/* <!-- Banner --> */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 pt-24 pb-20 md:flex-row flex-col flex-col-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 lg:pr-24 md:pr-16  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-start  text-start">
            <h1 className="title-font lg:text-6xl text-5xl mt-5 ml-6 font-bold text-gray-900 ">Smart 
            </h1>
            <h1 className="title-font lg:text-6xl text-5xl  ml-6 font-bold text-gray-900 ">Consulting
            </h1>
            <h1 className="title-font lg:text-6xl text-5xl mb-4 ml-6 font-bold text-gray-900 ">Group
            </h1>
            <p className="mb-8 leading-relaxed lg:text-2xl ml-6">We helping client  to create technology that uses Blockchain, AI and IOT with our talented expert.</p>
            <div className="flex justify-center ml-6">
              <button className="inline-flex text-black  border-2 border-black py-2 px-6 focus:outline-none text-lg">Consult with an exprt now!</button>
            </div>
            <p className="mt-5 ml-6">Already a memeber ?<a className="text-black pl-2">Sign in</a></p>
            
          </div>
          <div className="lg:w-1/2  lg:h-full md:w-1/2 w-5/6">
            <img className="mx-auto"  src={process.env.PUBLIC_URL + "/imgs/lady1.png"}/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner