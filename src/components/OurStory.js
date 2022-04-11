import React,{useState} from 'react'
// import React, { Component } from "react";
import Slider from "react-slick";


function OurStory() {

    const slider = React.useRef(null);


    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    let [open,setOpen]=useState([false,false,false,false]);
    return (


        <section >

            <div className="py-16 md:py-16 ">

                <div className="flex sm:flex-row md:flex-row lg:flex-row justify-around">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-start justify-start pb-1">
                        Our Success <br />Story.
                    </h1>

                    <div className=" flex">
                        <button className="p-2" onClick={() => slider?.current?.slickPrev()}><img src={process.env.PUBLIC_URL + './imgs/left.svg'} className="w-10"></img></button>
                        <button className="p-2" onClick={() => slider?.current?.slickNext()} ><img src={process.env.PUBLIC_URL + './imgs/right.svg'} className="w-14"></img></button>

                    </div>
                </div>

            </div>

            <div className="">
        
                <Slider ref={slider} {...settings}>

                            <div className="content_box  grad cursor-pointer" onClick={()=>setOpen([!open[0],false,false,false,false])}>
                                 <img src={process.env.PUBLIC_URL + "./imgs/mask1.jpeg"} className="back " />
                                <div className={`transit bg-blue-700 mx-12 transition-all ease-in-out duration-500 overflow-hidden ${open[0]?  'h-auto text-xl opacity-1':'h-0 p-0 text-sm opacity-0'}`}>
                                    <h1 className="text-white lg:text-3xl md:text-2xl text-2xl text-left mx-5 font-bold " >
                                        Best Service <br />Provider.
                                     </h1>
                                    <p className="pt-4 px-2  text-white ">
                                        Lorem ipsum dolor sit amet, consuadielit, sed do eiusmod
                                    </p>
                                </div>
                            </div> 
                                <div className="content_box  grad cursor-pointer" onClick={()=>setOpen([false,!open[1],false,false,false])}>
                                <img src={process.env.PUBLIC_URL + "./imgs/grey.jpg"} className="back " />
                                    <div className={`transit bg-blue-700 mx-12 transition-all ease-in-out duration-500 overflow-hidden ${open[1]?  'h-auto text-xl opacity-1':'h-0 p-0 text-sm opacity-0'}`}>
                                        <h1 className="text-white lg:text-3xl md:text-2xl text-2xl text-left mx-5 font-bold " >
                                        Best Service <br />Provider.
                                        </h1>
                                        <p className="pt-4 px-2  text-white ">
                                        Lorem ipsum dolor sit amet, consuadielit, sed do eiusmod
                                        </p>
                                    </div>
                                </div> 
                                <div className="content_box  grad cursor-pointer" onClick={()=>setOpen([false,false,!open[2],false,false])}>
                                <img src={process.env.PUBLIC_URL + "./imgs/dg.jpg"} className="back " />
                                    <div className={`transit bg-blue-700 mx-12 transition-all ease-in-out duration-500 overflow-hidden ${open[2]?  'h-auto text-xl opacity-1':'h-0 p-0 text-sm opacity-0'}`}>
                                        <h1 className="text-white lg:text-3xl md:text-2xl text-2xl text-left mx-5 font-bold " >
                                        Wp Award <br />Winner.
                                        </h1>
                                        <p className="pt-4 px-2  text-white ">
                                        Lorem ipsum dolor sit amet, consuadielit, sed do eiusmod
                                        </p>
                                    </div>
                                </div> 
                                <div className="content_box  grad cursor-pointer" onClick={()=>setOpen([false,false,false,!open[3],false])}>
                                <img src={process.env.PUBLIC_URL + "./imgs/grey.jpg"} className="back " />
                                    <div className={`transit bg-blue-700 mx-12 transition-all ease-in-out duration-500 overflow-hidden ${open[3]?  'h-auto text-xl opacity-1':'h-0 p-0 text-sm opacity-0'}`}>
                                        <h1 className="text-white lg:text-3xl md:text-2xl text-2xl text-left mx-5 font-bold " >
                                        Best Service <br />Provider.
                                        </h1>
                                        <p className="pt-4 px-2  text-white ">
                                        Lorem ipsum dolor sit amet, consuadielit, sed do eiusmod
                                        </p>
                                    </div>
                                </div> 
                                <div className="content_box  grad cursor-pointer" onClick={()=>setOpen([false,false,false,false,!open[4]])}>
                                <img src={process.env.PUBLIC_URL + "./imgs/dg.jpg"} className="back" />
                                    <div className={`transit bg-blue-700 mx-12 transition-all ease-in-out duration-500 overflow-hidden ${open[4]?  'h-auto text-xl opacity-1':'h-0 p-0 text-sm opacity-0'}`}>
                                        <h1 className="text-white lg:text-3xl md:text-2xl text-2xl text-left mx-5 font-bold " >
                                        Best Service <br />Provider.
                                        </h1>
                                        <p className="pt-4 px-2  text-white ">
                                        Lorem ipsum dolor sit amet, consuadielit, sed do eiusmod
                                        </p>
                                    </div>
                                </div> 
                      
                     
                </Slider>
            </div>
        </section>

    )
}

export default OurStory
