import React from 'react'

const Header = () => {
  return(
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center">Logo</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><a href="sass.html">Choose Song</a></li>
          <li><a href="badges.html">Leaderboard</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
