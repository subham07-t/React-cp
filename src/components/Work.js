import React from 'react'

const Work = () => {

  let Wdata = [
    {name:"Marketing",
    description:"Creating a spacing how people move through.",
    imgSrc:"/imgs/Icon2.svg",
    },
    {name:"Dev & Design",
    description:"Creating a higher spacing how people move through. From its mel origins to the digital era",
    imgSrc:"/imgs/Icon2.svg",
    },
    {name:"Creativity",
    description:"Get a full cRontrol of debts in the dsu digital world simplesity.labore et dolore magna aliqua",
    imgSrc:"/imgs/icon3.png",
    },
]

  return (
    <>
      {/* <!-- What we do --> */}
      <section className="text-gray-600 body-font  ">
        <div className="container px-5 pb-12 lg:pt-12 mx-auto">
          <div className="flex flex-wrap sm:-m-4 mx-auto -mb-10  md:space-y-0 space-y-6">
            {
              Wdata.map((val)=>(

            <div className="p-4 md:w-1/3 flex flex-col text-start items-start" key={val.name}>
            <div className='lg:w-1/2 lg:mx-auto'>
              <img src={process.env.PUBLIC_URL + val.imgSrc} className="w-10 h-10 flex  items-center justify-center"/>
            </div>
              <div className="lg:w-1/2 mx-auto">
                <h2 className="text-gray-900 text-lg title-font font-bold mt-3 mb-3">{val.name}</h2>
                <p className="text-base text-start items-start">{val.description}</p>
              </div>
            </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Work