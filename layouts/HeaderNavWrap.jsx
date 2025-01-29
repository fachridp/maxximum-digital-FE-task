import PropTypes from 'prop-types';

// Import reuseable components
import HeaderNav from '../components/HeaderNav'

export default function HeaderNavWrap({ isMobileNav }) {
 return (
  <>
   <ul className={`flex max-md:flex-col md:gap-x-4 lg:gap-x-6 items-center max-md:gap-y-4 max-md:bg-[#191A23] max-md:text-white max-md:py-5 max-md:px-3 max-md:absolute max-md:right-5 max-md:rounded-md max-md:top-10 md:flex max-md:w-56 nav-wrap ${!isMobileNav && "hidden"}`}>
    <HeaderNav innerText="About Us" />
    <HeaderNav innerText="Services" />
    <HeaderNav innerText="Use Cases" />
    <HeaderNav innerText="Pricing" />
    <HeaderNav innerText="Blog" />
    <HeaderNav innerText="Request a quote" />
   </ul>
  </>
 )
}

HeaderNavWrap.propTypes = {
 isMobileNav: PropTypes.bool,
}