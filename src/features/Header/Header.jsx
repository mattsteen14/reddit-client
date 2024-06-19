import React from 'react'

export default function Header() {
  return (
    <header>
        <div className='logo'>
      <svg></svg>
      <p>Reddit<span>Already</span></p>
      </div>
      <form className='search'>
        <input type='text' placeholder='Search' aria-label='Search posts' value></input>
        <button type='submit' aria-label='Search'>
            <svg></svg>
        </button>
      </form>
    </header>
  )
}
