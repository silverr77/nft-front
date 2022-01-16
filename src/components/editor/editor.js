import React, { useState, useEffect, useRef } from 'react'
import { fabric } from "fabric";
//import "./editor.css"
import "./test.css"
import axios from 'axios'
import { Icon } from '@iconify/react';
import DropDown from './dropdown';
export default function Editor({item}) {
    const baseURL = `${process.env.REACT_APP_BASE_URL}`;
    // States.
    const [canvas, setCanvas] = useState(null);
    const [color, setColor] = useState('green');
    const [sizes, setSizes] = useState([]);
    // Refs.
    const inputFile = useRef(null)
    const inputColor = useRef(null)

    const  initCanvas = async () => {
        // Check if canvas has default size before render.
        if (item.default_size) {
            // get default size
            const request = await axios.get(`${baseURL}/items/Sizes/${item.default_size}`);
            setCanvas(renderCanvas({width: request.data.data.width, height: request.data.data.hight}))

        }
        else {
            setCanvas(renderCanvas({width:815, height: 315}))
        }
    }

    const renderCanvas = ({width, height}) => {
        const canvas = new fabric.Canvas('canvas', {
            height: height,
            width: width,
            backgroundColor: color
        })
        addPictureToCanvas(`${baseURL}/assets/${item.Centred_Image}`, canvas, true)
        return canvas
    }
    // Get sizes.
    const getSizes = async () => {
        const request = await axios.get(`${baseURL}/items/Sizes`);
        setSizes(request.data.data)
    }
    useEffect(() => {
        if (canvas == null) {
            getSizes();
            initCanvas();
        }
    }, [])



    const addPictureToCanvas = (url, canvi, center = false) => {
        new fabric.Image.fromURL( url,
            function (img) {
            /** Resize picture */
            let imgWidth = img.width;
            let imgHeight = img.height;
            let canvasWidth = canvi.getWidth();
            let canvasHeight = canvi.getHeight();
            let imgRatio = imgWidth / imgHeight;
            let canvasRatio = canvasWidth / canvasHeight;
            if (imgRatio <= canvasRatio){
              if (imgHeight> canvasHeight){
                img.scaleToHeight(canvasHeight);
              }
            } else{
              if (imgWidth> canvasWidth){
                img.scaleToWidth(canvasWidth);
              }
            }
            /** end */
            canvi.add(img);
            if (center) canvi.centerObject(img);
            canvi.renderAll();
            },{ crossOrigin: 'anonymous' }
        );
    }

    const addTextToCanvas = canvis => {
        var text =  new fabric.Textbox('Sample Text', { width: 100 });

        canvis.add(text);
    }

    const removeSelectedObject = canvi => {
        canvi.remove(canvi.getActiveObject());
    }

    /**
     * Save Image as mime/type.
     * @param {*} uri
     * @param {*} filename
     */
    function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;

        //Firefox requires the link to be in the body
        document.body.appendChild(link);

        //simulate click
        link.click();

        //remove the link when done
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
    }

    const saveImage = () => {
        var image = canvas != null ? canvas.toDataURL("image/png").replace("image/png", "image/octet-stream") : null;
        if (image != null) {
            saveAs(image, `${Math.floor(Date.now() / 1000)}-banner-bg.png`);
        }
    }

    const onButtonClick = () => {
       inputFile.current.click();
    };

    const onButtonColorClick = () => {
        inputColor.current.click();
    }

    const selectImage = event => {
        if (canvas != null) {
            let files = event.target.files
            let reader = new FileReader();
            reader.readAsDataURL(files[0])
            reader.onload = (e) => {
                const url = e.target.result
                addPictureToCanvas(url, canvas)
            }
        }
    }

    const selectColor = event => {
        if (canvas != null) {
            canvas.backgroundColor = event.target.value
            canvas.renderAll();
        }

    }

    return (
        <div className="px-5 mt-4">
            <div className="work-space">
                <div className="editor-tools flex justify-end">
                    <DropDown />
                </div>
                <div className="editor-work-space">
                    <canvas id="canvas" />
                </div>
            </div>

        </div>
        // <>
        //     {sizes.length > 0 ? (JSON.stringify(sizes)) : 'loading ...'}

        // </>
    //         <div className="container-canvas-nft">
    //         <div className="main">
    //         <input
    //             type='file'
    //             accept="image/*"
    //             id='file'
    //             ref={inputFile}
    //             style={{display: 'none'}}
    //             onChange={(e) => selectImage(e)}
    //         />
    //         <div className="Tools">
    //             <ul>
    //                 {/* <li onClick={() => addTextToCanvas(canvas)}>
    //                     <Icon style={{ fontSize: '36px' }} color="#fff" icon="mdi:format-text" />
    //                     <p>Add Text</p>
    //                 </li> */}
    //                 <li onClick={onButtonClick}>
    //                     <Icon style={{ fontSize: '36px' }} color="#fff" icon="mdi:file-image-plus-outline" />
    //                     <p>Add Picture</p>
    //                 </li>
    //                 <li onClick={onButtonColorClick}>
    //                 <Icon  style={{ fontSize: '36px' }} color="#fff" icon="mdi:format-color-fill" />
    //                     <p>Background</p>
    //                     <input
    //                         type="color"
    //                         ref={inputColor}
    //                         style={{display: 'none'}}
    //                         onChange={(e) => selectColor(e)}
    //                     />
    //                 </li>
    //                 <li onClick={() => removeSelectedObject(canvas)}>
    //                 <Icon style={{ fontSize: '36px' }} color="#fff" icon="mdi:delete-empty" />
    //                     <p>Remove</p>
    //                 </li>
    //                 <li onClick={() => saveImage()}>
    //                 <Icon style={{ fontSize: '36px' }} color="#fff" icon="mdi:content-save-check-outline" />
    //                     <p>Save</p>
    //                 </li>
    //             </ul>
    //         </div>

    //         <div className="content">
    //             <p id="logo">NFT Banner Editor</p>
    //             <canvas id="canvas" />
    //             <div className="image_holder">
    //                 <button id="remove_img_btn"><i className='bx bxs-message-square-x' ></i></button>
    //                 <img src="" alt="img" id="image" />
    //             </div>

    //         </div>

    //     </div>
    // </div>
    )
}
