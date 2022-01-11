import React from 'react'
import { Link } from 'react-router-dom'


const events = () => {
  let big_wrapper = document.querySelector(".big-wrapper");
  big_wrapper.classList.toggle("active");
}

export default function Header() {
    return (
        <header>
          <div className="container-block">
            <div className="logo">
              {/* <img classNam="block-img" src={logo} alt="Logo" /> */}
              <Link to="/"><h3>NFT Generator</h3></Link>
            </div>

            <div className="links">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="#">Soon</Link></li>
              </ul>
            </div>

            <div className="overlay"></div>

            <div onClick={() => events()} className="hamburger-menu">
              <div className="bar"></div>
            </div>
          </div>
        </header>
    )
}
