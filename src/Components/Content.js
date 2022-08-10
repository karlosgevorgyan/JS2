import React from 'react'
import logo from "../logo.svg";
import './content.css'
function Content() {
  return (
    <div className="Content">
      <div className='div-1'>
        <div>
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
        <p>APP</p>
        <p>React</p>
        </div>
      </div>
      <div className='div-2'>
        <div>
        <ul>
        <li><a>Home</a></li>
        <li><a>Products</a></li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
        <li><a>Services</a></li>
        <li><a>Email</a></li>
        <li><a>Address</a></li>
      </ul>
        </div>
        <div>
        <ul>
        <li><a>Socials</a></li>
        <li><a>Facebook</a></li>
        <li><a>Twitter</a></li>
        <li><a>Instagram</a></li>
        <li><a>Youtube</a></li>
        <li><a>VK</a></li>
        <li><a>Website</a></li>
      </ul>
        </div>
      </div>
  </div>
  )
}

export default Content