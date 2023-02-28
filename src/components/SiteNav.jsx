import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

function SiteNav() {
  return (
    <nav>
      {/* <NavLink to={`/`}>Home</NavLink> */}
      <NavLink to={`/contact`}>Contact</NavLink>
      <NavLink to={`/clocks`}>Clocks</NavLink>
      <NavLink to={`/cars`}>Cars</NavLink>
    </nav>
  )
}

export default SiteNav