import React from 'react'
import './Header.css';
import { HiOutlineSearch } from "react-icons/hi";
import { FaReddit } from "react-icons/fa";
// import { CiLogin, CiLogout } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { setSearch } from '../../reddit/searchSlice';
import { setView } from '../../reddit/viewSlice';

export const Header = () => {
  const dispatch = useDispatch();
  
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = document.getElementById('search-input').value;
    dispatch(setView('search'))
    dispatch(setSearch(searchTerm))
  }
  
  return (
    <header>
        <div className='logo'>
            <FaReddit className='logo-icon'/>
            <p><span className='reddit-span'>Reddit</span>Already</p>
        </div>
        <form className='search' onSubmit={handleSearch}>
            <input 
            type='text' 
            placeholder='Search' 
            aria-label='Search posts'
            id='search-input'
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
