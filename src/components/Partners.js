import React from 'react'

const Partners = () => {
  let partnerHeadingData=[
    {name:"Cloud Partners",
    content:[
      {
        id:1,
        imgSrc:"/imgs/colab1.png",
      },
      {
        id:2,
        imgSrc:"/imgs/colab2.png",
      },
      {
        id:3,
        imgSrc:"/imgs/colab3.png",
      },
      {
        id:4,
        imgSrc:"/imgs/colab4.png",
      },
    ]},
    {
      name:"Blockchain partners",
      content:[
          {
            id:1,
            imgSrc:"/imgs/colab5.png",
          }
      ]
    }
  ]
 
  return (
    <>
      {/* <!-- Our Partners --> */}
      <section className="text-gray-600 bg-gray-100 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-start w-full mb-20 pl-24">
                <h1 className="sm:text-4xl text-5xl font-bold title-font mb-4 text-gray-900">Our partners</h1>
              </div>

              {
              partnerHeadingData.map((val)=>(
              <div className="flex flex-wrap mx-10" key={val.name}>
                <div className="flex flex-col text-start  text-2xl w-full mb-2 pl-16"> 
                  <h2 className="title-font font-medium text-gray-900 text-1xl tracking-widest text-sm mb-3">{val.name}</h2>
                </div>{
                  val.content.map((value)=>(
                <div className="xl:w-1/4 md:w-1/2 p-4" key={value.id}>
                  <div className=" p-6 rounded-lg">
                    <img className="h-40 rounded w-full object-cover object-center mb-6 lg:p-8" src={process.env.PUBLIC_URL + value.imgSrc} alt="content"/>
                  </div>
                </div>       
                  ))
                }
                </div>
                ))
              }

            </div>
          </section>
    </>
  )
}

export default Partners