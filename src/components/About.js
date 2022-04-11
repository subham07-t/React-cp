import React,{useState} from 'react'

const About = () => {

  let MidData = [
    {
    id:1,
    name:'Expert Members',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatibus ducimus aliquid sit, repudiandae molestias voluptate maxime consectetur aut repellat.',
    },
    {
    id:2,
    name:'Sequre & Trusted',
    description:'Our founders Dustin Moskovitz and Justin quis Rosenstein met while leading Engineering team at Facebook.',
    },
    {
    id:3,
    name:'Expert Members',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eius facilis, quos doloribus incidunt architecto sequi perspiciatis ad dicta. Quisquam dicta repellat modi beatae dolores eveniet sed blanditiis eligendi voluptas.',
    },
    {
    id:4,
    name:'Big Resources',
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio accusamus necessitatibus atque. Cupiditate voluptates, alias praesentium labore iste libero in quo amet itaque earum laudantium.',
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

  const [showText, setShowText] = useState([false, false, false, false]);
  const [showAdd, showNotAdd] = useState(false);

  return (
    <>
       {/* <!-- About us --> */}

       <section className="flex flex-col md:flex-row lg:flex-row p-8 md:gap-4 lg:gap-0  items-center lg:justify-evenly md:justify-evenly md:items-start">

            <div className="  text_start  flex-col flex md:flex-col lg:flex-col  overflow-y-auto  ">

                <div>
                    <p className=" text-slate-400 text-xl">
                        Why Choose us
                    </p>
                </div>
                <div className="">
                    <div>
                        <h1 className="font-bold head text-5xl md:text-6xl">
                            We solve your <br />Problem.
                        </h1>
                    </div>
                    <div>
                        <img className="w-8/12 md:10/12 lg:11/12 block_iot  " src={process.env.PUBLIC_URL + "/imgs/Rectangle.png"} alt="" />
                    </div>
                </div>


            </div>

            <div className=" pt-8 md:flex md:flex-col text_start">
                <h1 className="font-s  sub_heading text-2xl lg:text-3xl md:text-3xl">
                    We don’t sell technology, We<br /> give ideas that boosts your<br /> journey.
                </h1>
                        <div className="">
                            <ul>
                                <li className="py-2 pt-8">
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className="hover:cursor-pointer " id="heading_1" >Expert Members </h3>
                                        </div>
                                        <div className='cursor-pointer' onClick={() => setShowText([!showText[0], false, false, false])}>
                                            <span className="flex-row pb-4" id="span_1"> {showText[0] ? "-" : "+"}</span>
                                        </div>
                                    </div>



                                    {

                                        showText[0] &&
                                        <div className={`transition-all ease-in-out duration-500 overflow-hidden ${showText[0]?'h-auto text-xl opacity-1':'h-0 p-0 text-sm opacity-0'}`}>

                                            <p id="para_1" className="text-sm ">
                                                Lorem ipsum dolor sit, amet consectetur<br /> adipisicing elit. Vero facere veritatis
                                                culpa quae<br />
                                                eum, libero expedita velit dolor accusamus<br /> aliquid.
                                            </p>
                                        </div>

                                    }


                                </li>
                                <li className="py-2">
                                    <div className="flex pt-4 justify-between">
                                        <div>
                                            <h3 className="hover:cursor-pointer " id="heading_2">Secure & Trsuted
                                            </h3>
                                        </div>
                                        <div className='cursor-pointer' onClick={() => setShowText([false, !showText[1], false, false])}>
                                            <span className="flex-row pb-4 " id="span_1"> {showText[1] ? "-" : "+"}</span>
                                        </div>
                                    </div>

                                    {

                                        showText[1] &&
                                        <div className=" animate-fade-in-down">
                                            <p id="para_1" className="text-sm  ">
                                                Lorem ipsum dolor sit, amet consectetur<br /> adipisicing elit. Vero facere veritatis
                                                culpa quae<br />
                                                eum, libero expedita velit dolor accusamus<br /> aliquid.
                                            </p>
                                        </div>
                                    }

                                </li>
                                <li className="py-2">
                                    <div className="flex pt-4 justify-between">
                                        <div>
                                            <h3 className="hover:cursor-pointer " id="heading_3" >Expert Members </h3>
                                        </div>

                                        <div className='cursor-pointer' onClick={() => setShowText([false, false, !showText[2], false])}>
                                            <span className="flex-row pb-4" id="span_1"> {showText[2] ? "-" : "+"}</span>
                                        </div>
                                    </div>


                                    {
                                        showText[2] &&

                                        <div className="animate-fade-in-down">

                                            <p id="para_1" className="text-sm">
                                                Lorem ipsum dolor sit, amet consectetur<br /> adipisicing elit. Vero facere veritatis
                                                culpa quae<br />
                                                eum, libero expedita velit dolor accusamus<br /> aliquid.
                                            </p>
                                        </div>

                                    }

                                </li>

                                <li className="py-2">
                                    <div className="flex pt-4 justify-between">
                                        <div>


                                            <h3 className="hover:cursor-pointer" id="heading_4" >Big Resoruces</h3>
                                        </div>
                                        <div className='cursor-pointer' onClick={() => setShowText([false, false, false, (!showText[3])])}>

                                            <span className="flex-row pb-4" id="span_1"> {showText[3] ? "-" : "+"}</span>
                                        </div>

                                    </div>


                                    {

                                        showText[3] &&
                                        <div className="h-auto animate-fade-in-down">

                                            <p id="para_1" className="text-sm ">
                                                Lorem ipsum dolor sit, amet consectetur<br /> adipisicing elit. Vero facere veritatis
                                                culpa quae<br />
                                                eum, libero expedita velit dolor accusamus<br /> aliquid.
                                            </p>

                                        </div>
                                    }

                                </li>
                            </ul>
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