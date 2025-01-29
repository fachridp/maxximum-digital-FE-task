import { useEffect, useState } from 'react'
import { useCallback } from 'react';

// Import logo/icons
import iconPositivus from '../assets/logo.svg'

// Import layouts components
import HeaderNavWrap from './HeaderNavWrap';

export default function Header() {
 const [isMobileNav, setIsMobileNav] = useState(false);

 const handleToggleMobileNav = useCallback(() => {
  setIsMobileNav((prevState) => !prevState);
 }, []);

 useEffect(() => {
  const handleCloseMobileNav = (event) => {
   !event.target.closest('.nav-wrap') && setIsMobileNav(false);
  }

  window.addEventListener('click', handleCloseMobileNav);

  return () => {
   window.removeEventListener('click', handleCloseMobileNav);
  }

 }, []);

 return (
  <>
   <header className='relative max-w-[1140px] mx-auto'>
    <div className='flex items-center justify-between mx-5 my-4 lg:mx-10'>
     {/* Logo website */}
     <img className='cursor-pointer w-28 lg:w-32' src={iconPositivus} alt="Website logo" tabIndex={-1} aria-hidden="true" data-icon="Positivus logo" />

     {/* Nav items */}
     <HeaderNavWrap isMobileNav={isMobileNav} />

     <button type='button' onClick={handleToggleMobileNav} className='bg-[#191A23] md:hidden p-2 rounded-md nav-wrap' tabIndex={-1}>
      <svg className='w-5' aria-hidden="true" focusable="false" role='img' data-icon="menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 76 64"><path fill="#B9FF66" d="M75.5 57a6.248 6.248 0 0 1-6.25 6.25H6.75A6.248 6.248 0 0 1 .5 57a6.248 6.248 0 0 1 6.25-6.25h62.5A6.248 6.248 0 0 1 75.5 57Zm-6.25-31.25H6.75A6.248 6.248 0 0 0 .5 32a6.248 6.248 0 0 0 6.25 6.25h62.5A6.248 6.248 0 0 0 75.5 32a6.248 6.248 0 0 0-6.25-6.25Zm-62.5-12.5h62.5A6.248 6.248 0 0 0 75.5 7 6.248 6.248 0 0 0 69.25.75H6.75A6.248 6.248 0 0 0 .5 7a6.248 6.248 0 0 0 6.25 6.25Z" /></svg>
     </button>
    </div>
   </header>
  </>
 )
}
