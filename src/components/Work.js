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
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 justify-center -mt-4 md:space-y-0 space-y-6">
            {
              Wdata.map((val)=>(

            <div className="p-4 md:w-1/3 flex flex-col text-center  items-center" key={val.name}>
              <img src={process.env.PUBLIC_URL + val.imgSrc} className="w-10 h-10 inline-flex items-center justify-center"/>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 mt-3">{val.name}</h2>
                <p className="leading-relaxed text-base text-start">{val.description}</p>
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