
import React, { useState, useEffect } from 'react';
import { fabric } from "fabric";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/home';
import Nft from './pages/nft'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './layout/header/header';

function App() {
//   const [canvas, setCanvas] = useState('');
//   const [color, setColor] = useState('black');
//   const [imgURL, setImgURL] = useState('');
//   const [loading, setLoading] = useState(false)
//   const default_image = 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'

  // const initCanvas = () => {
  //   const canvas = new fabric.Canvas('canvas', {
  //      height: 400,
  //      width: 1200,
  //      backgroundColor: color
  //   })
  //   setLoading(true)
  //   return canvas;
  // }

//   useEffect(() => {
//     setCanvas(initCanvas());
//  }, []);

//  useEffect(() => {
//   addImgT(default_image, canvas)
// }, [loading]);

// useEffect(() => {
//   console.log(canvas);
//   if (loading) {
//     canvas.backgroundColor = color
//     canvas.renderAll()
//   }

// }, [color]);

 const addRect = canvi => {
    const rect = new fabric.Rect({
      height: 280,
      width: 200,
      fill: 'yellow'
    });
    canvi.add(rect);
    canvi.renderAll();
  }

  // const saveImage = canvi => {
  //   //console.log(canvi.toDataURL())
  //   if (loading) {
  //     var image = canvas != null ? canvas.toDataURL("image/png").replace("image/png", "image/octet-stream") : null;  // here is the most important part because if you dont replace you will get a DOM 18 exception.
  //     if (image != null) window.location.href=image;
  //   }

//   }

//   const addImg = (e, url, canvi) => {
//     e.preventDefault();
//     addImgT(url, canvi)
//  }

//  const addImgT = (url, canvi) => {
//   new fabric.Image.fromURL( url,
//     function (img) {
//       img.scale(0.30);
//       canvi.add(img);
//       canvi.renderAll();
//     },{ crossOrigin: 'anonymous' }
//  );
//  }

  return (
    <>
      {/* <h1>Woow! NFT BG images</h1>
      <canvas id="canvas" />
      <button onClick={() => addRect(canvas)}>Rectangle</button>
      <form onSubmit={e => addImg(e, imgURL, canvas)}>
        <div>
          <input
              type="text"
              value={imgURL}
              onChange={ e => setImgURL(e.target.value)}
          />
          <button type="submit">Add Image</button>
        </div>
      </form>
      <input type="color" value={color} onChange={e => setColor(e.target.value)} />
      <button type="button" onClick={() => saveImage(canvas)} >Save picture</button> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path={`/nft-generator/:id`}>
            <Nft />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
