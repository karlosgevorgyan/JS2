import React from "react";

import { useState, useRef } from "react";
import "./footer.css";

function Footer(props) {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  if (props.arr) {
    let a = props.arr.map(({name, price,img, name2, info,id}, i) => {
   
      return (
        <div className="child">
          <img src={require(`../Components/img/${img}`)} />
          <span>
            <p className="name">{name}</p>
            <p className="name1">{name2}</p>
            <p className="price">{price}</p>
            <p  className={show ? "hide" : "show"} key={i}>{`${info}...`}</p>
            <button key={id} ref={ref} onClick={() => { 
              // setShow(!show)      
            }} >{show ? "hide" : "show"}</button>
          </span>
        </div>
      );
    });
    return (
      <div className="parent">
        {a}
        <div className="div1">
            <p className="title">Helmets</p>
        </div>
        <div className="div2">
              <p className="title">Parts</p>
        </div>
      </div>
    );
  }
}

export default Footer;
