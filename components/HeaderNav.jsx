import PropTypes from 'prop-types';

export default function HeaderNav({ innerText }) {
 return (
  <li className='last:border last:py-4 last:px-3 last:rounded-lg md:border-[#191A23] cursor-pointer'>{innerText}</li>
 )
}

HeaderNav.propTypes = {
 innerText: PropTypes.string,
}
