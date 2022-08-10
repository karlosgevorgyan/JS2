import React, { useState } from "react";
import logo from "../logo.svg";
import "./header.css";

function Header() {
  const [name, setName] = useState("projects");
  return (
    <div className="Header">
      <div className="Header-name">
        <p>Motorcycle</p>
      </div>
      <div className="menu-div">
        <div className="menu-1">
          <div>
            <img src={logo} className="App-logo-1" alt="logo" />
          </div>
          <div>
            <div className="menu-name">React App - {name}</div>
          </div>
        </div>

        <div className="menu-2">
          <div>
            <ul className="menu-2-ul">
              <li>
                <a onClick={(evt) => { setName(evt.target.innerHTML); }}>
                  Home
                </a>
              </li>
              <li>
                <a onClick={(evt) => {setName(evt.target.innerHTML); }}>
                  News
                </a>
              </li>
              <li>
                <a onClick={(evt) => { setName(evt.target.innerHTML);}}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
