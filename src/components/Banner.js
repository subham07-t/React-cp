import React from 'react'

const Banner = () => {
  return (
    <>
    {/* <!-- Banner --> */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 pt-24 pb-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">Smart 
            <br className="md:inline-block lg:inline-block"/>Consulting<br className=" md:inline-block lg:inline-block"/>Group
            </h1>
            <p className="mb-8 leading-relaxed">We helping client  to create technology that uses Blockchain, AI and IOT with our talented expert.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-black  border-2 border-black py-2 px-6 focus:outline-none text-lg">Consult with an exprt now!</button>
            </div>
            <p className="mt-5">Already a memeber ?<a className="text-black pl-2">Sign in</a></p>
            
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded"  src={process.env.PUBLIC_URL + "/imgs/lady1.png"}/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner