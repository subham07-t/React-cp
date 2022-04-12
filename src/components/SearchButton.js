import React from 'react'

const SearchButton = () => {
  return (
    <>
                <div className="relative border-b border-black">
                        <div className="absolute left-1.5 top-1.5">
                            <img src={process.env.PUBLIC_URL +"/imgs/search.svg"} alt="search"/>
                        </div>
                        <input type="text" className="w-full h-8 p-1 bg-transparent rounded-mdbg-gray-700 pl-8" placeholder="search here..."/>
                </div>
    </>
  )
}

export default SearchButton