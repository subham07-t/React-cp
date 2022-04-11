import React, { useDebugValue } from 'react'

const Footer = () => {

  let footData=[{
    name:"LINKS",
    content:[
      {
      id:1,
      name:"Home"
      },
      {
      id:2,
      name:"Services"
      },
      {
      id:3,
      name:"About Us"
      },
      {
      id:4,
      name:"Careers"
      },
      {
      id:5,
      name:"Press Release"
      },
      {
      id:6,
      name:"Blog"
      }
  ]
  },
  {
    name:"LEGAL",
    content:[
      {
      id:1,
      name:"Terms of use"
      },
      {
      id:2,
      name:"Terms & Conditions"
      },
      {
      id:3,
      name:"Privacy policy"
      },
      {
      id:4,
      name:"Cookie policy"
      }
  ]
  }

  ]
  return (
    <>
       {/* <!-- Footer --> */}
       <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left  text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <img src={process.env.PUBLIC_URL + "/imgs/logo2.svg"} className="flex title-font font-medium items-center text-gray-900 pl-4 pr-4 mb-4 md:mb-0"/>
            </div>
            {
              footData.map((val)=>(

              <div className="lg:w-1/4 md:w-1/2 w-full px-4" key={val.name}>
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">{val.name}</h2>
              <nav className="list-none mb-10">
                
                {
                  val.content.map((item)=>(
                    <li key={item.id}>
                      <a className="text-gray-600 hover:text-gray-800">{item.name}</a>
                    </li>
                  ))
                }
                
              </nav>
            </div>
              ))
            }
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">NEWSLETTER</h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-center">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <p htmlFor="footer-field" className="leading-7 text-sm text-gray-600">Join over <a className="text-indigo-700 underline">68,000 </a>people getting our emails</p>
                  <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Enter your email"/>
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded">Sign UP</button>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center">We only send interesting and relevant emails.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <nav className="md:ml-auto  md:mr-auto flex flex-wrap items-center text-base justify-center">
              <a className="mr-10 font-bold">Privacy & Terms </a>
              <a className="mr-10 font-bold">Contact Us</a>
            </nav>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">Copyright @2021 
              <a href="#" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">Code PartnerIT </a>Solutions Pvt. Ltd.
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer