import React from 'react'

const JoinUs = () => {
  return (
    <>
       {/* <!-- Join us --> */}
       <section className="text-gray-600 body-font bg-gray-900 ">
            <div className="container px-24 py-24 mx-auto flex flex-wrap">
              <h2 className="sm:text-5xl text-2xl text-white font-medium title-font mb-2 md:w-2/5">Join our
                team be a great skills elit.</h2>
              <div className="md:w-3/5 md:pl-6">
                <p className="leading-relaxed text-base text-white sm:text-2xl">We’re a team of creatives who are excited about unique ideas & help.</p>
                <div className="flex md:mt-4 mt-6">
                  <button className="text-black-300 flex bg-white rounded lg:w-450  pl-3 text-center ml-4">Send Your CV
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2 mt-1" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>
    </>
  )
}

export default JoinUs