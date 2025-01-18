"use client"

import { useRef } from "react"

const SearchBar = () => {
    let searchInput =useRef<HTMLInputElement | null>(null)

    function handleSearhBtn() :void{
        if(searchInput.current){
            searchInput.current.focus()
        }
    }
  return (
    <div className={` flex border border-gray-300 md:shadow-sm   cursor-text  rounded-full py-2 px-4`}
    onClick={handleSearhBtn}>
        
      <input type="text" placeholder="Start your search"
      ref={searchInput}
      className="text-sm  bg-transparent outline-none flex-grow placeholder:text-gray-400 " />
      
    </div>
  )
}

export default SearchBar
