import React, { useState } from 'react'
import SearchButton from './SearchButton'

const Header = () => {

    let links = [
        {name:"About",link:"#"},
        {name:"Case Studies",link:"#"},
        {name:"Services",link:"#"},
        {name:"Blog",link:"#"},
    ]

    let [open,setOpen]=useState(false);

  return (
    <>
    {/* Header */}
    <header>
      <nav>
          <section className="px-12 py-8">
              <main className="flex items-center justify-between">

              {/* <!-- logo & navbar --> */}

                  <section className="flex items-center space-x-8">
                      <a href="index.html">
                          <div className="flex items-center space-x-2">
                              <img src={process.env.PUBLIC_URL + "/imgs/logo.svg"} alt="logo" className=" w-14 rounded object-cover"/>
                          </div>
                      </a>
                      <div className="lg:block hidden">
                          <ul className="flex items-center space-x-5">
                            {
                                links.map((val)=>(
                                    <li key={val.name}>
                                    <a href={val.link} className="text-md font-bold">{val.name}</a>
                                    </li>
                                ))
                            }
                          </ul>
                      </div>
                  </section>

              {/* <!-- extra --> */}

                  <section className="flex items-center space-x-5"> 
                      <div>
                          <ul className="flex items-center space-x-4">
                              <li className="lg:block hidden">
                                 <SearchButton/>
                              </li>
                              <li className="mt-1">
                                  <button className="inline-flex items-center py-1 px-3  text-base md:mt-0">
                                  <img src={process.env.PUBLIC_URL +"/imgs/Icon.svg"} className="pr-2"/>login
                                  </button>
                              </li>

                              {/* <!-- mobile button  --> */}
                              <li className="lg:hidden block">
                                <div className="w-7 h-7 p-1 mt-1 cursor-pointer" onClick={()=>setOpen(!open)}>
                                    <ion-icon className="lg:w-6 lg:h-6 w-5 h-5" viewBox="0 0 24 24" name={open? 'close':'menu'}></ion-icon>
                                </div>
                              </li>
                          </ul>
                      </div>
                  </section>
              </main>
          </section>

          {/* <!-- mobile navbar --> */}
          <section className={`lg:hidden block p-4 space-y-4 ${open? 'block':'hidden'}`}>
              <div>
                  <ul className="flex flex-col items-center space-y-5">
                  {
                     links.map((val)=>(
                                    <li key={val.name}>
                                    <a href={val.link} className="text-md font-bold">{val.name}</a>
                                    </li>
                                ))
                    }
                  </ul>
              </div>
              <section className="w-full">
                <SearchButton/>
              </section>
          </section>
      </nav>
  </header>
    </>
  )
}

export default Header