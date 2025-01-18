import React from 'react'
import Logo from './headerContent/Logo'
import SearchBar from './headerContent/SearchBar'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 shadow-md py-5 '>
      <div className="container ">
        <Logo/>
        <SearchBar/>
        
      </div>
    </header>
  )
}

export default Header
