import React from 'react'
import shape from "./img/shape.png";
import fanArt from "./img/fan.png"
import logo from "./img/logo.png"
import Header from '../../layout/header/header';
export default function HpBlock({children}) {
    return (
    <main>
      <div className="big-wrapper light">
        <img src={shape} alt="" className="shape" />
        {children}
        <div className="showcase-area">
          <div className="container-block">
            <div className="left">
              <div className="big-title">
                <h1>NFT BANNER GENERATOR</h1>
                <h1>Soon, very soon ...</h1>
              </div>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus eius distinctio odit, magni magnam qui ex perferendis
                vitae!
              </p>
            </div>
            <div className="right">
              <img src={fanArt} alt="Person Image" className="person" />
            </div>
          </div>
        </div>
      </div>
    </main>
    )
}
