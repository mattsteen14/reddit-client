import React from 'react'
import './Header.css';
import { HiOutlineSearch } from "react-icons/hi";
import { FaReddit } from "react-icons/fa";
// import { CiLogin, CiLogout } from "react-icons/ci";

export const Header = () => {
  return (
    <header>
        <div className='logo'>
            <FaReddit className='logo-icon'/>
            <p><span className='reddit-span'>Reddit</span>Already</p>
        </div>
        <form className='search'>
            <input 
            type='text' 
            placeholder='Search' 
            aria-label='Search posts'
            />
            <button type='submit' aria-label='Search'>
                <HiOutlineSearch />
            </button>
              {/* <button>
              <CiLogin />
              </button> */}
        </form>
    </header>
  )
}
