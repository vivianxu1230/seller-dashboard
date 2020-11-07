import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div id="nav">
    <h1>Seller Dashboard</h1>
    <svg id="flower">
      <g
        viewBox="0 0 50 50"
        transform="translate(0.000000,330.000000) scale(0.100000,-0.100000)"
        fill="#000000"
      >
        <path d="M1949 2860 c-8 -4 -50 -10 -94 -14 -281 -23 -452 -220 -394 -452 6 -25 9 -47 6 -50 -3 -3 -21 5 -39 19 -43 33 -137 75 -218 98 -149 43 -341 13 -465 -73 -80 -56 -89 -64 -124 -113 -92 -126 -108 -255 -47 -371 46 -88 194 -184 324 -209 43 -9 33 -19 -44 -46 -187 -65 -275 -146 -309 -283 -13 -53 -15 -74 -6 -93 6 -13 11 -35 11 -49 0 -41 45 -118 111 -188 34 -36 66 -66 70 -66 4 0 25 -10 46 -23 176 -104 419 -95 614 23 68 41 91 39 71 -5 -16 -34 -15 -139 1 -190 32 -105 129 -195 249 -234 40 -13 83 -27 95 -32 36 -13 214 -20 273 -10 182 30 292 90 366 197 l39 57 0 128 c0 71 2 129 5 129 3 0 28 -15 57 -34 57 -38 170 -83 223 -90 19 -2 56 -7 81 -11 51 -8 170 8 239 32 115 41 234 147 288 255 34 71 37 212 5 270 -27 49 -60 87 -103 120 -41 30 -148 88 -164 88 -6 0 -31 10 -56 21 l-45 21 70 24 c147 50 228 105 286 195 31 49 33 57 34 145 0 87 -2 97 -35 159 -40 77 -129 165 -209 209 -186 100 -430 86 -613 -36 -31 -21 -58 -38 -60 -38 -2 0 -3 60 -3 132 l0 133 -33 47 c-78 112 -205 182 -350 194 -42 3 -91 9 -108 14 -17 4 -37 4 -45 0z" />
      </g>
    </svg>
    {/* <nav>
      {isLoggedIn ? (
        <div>
          <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </nav> */}
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
