import React, { useState, useEffect, useRef } from 'react'
import { fabric } from "fabric";
import "./editor.css"
import { Icon } from '@iconify/react';
export default function Editor({item}) {
    const [canvas, setCanvas] = useState('');
    const inputFile = useRef(null)
    const inputColor = useRef(null)
    const [color, setColor] = useState('white');
    const baseURL = `${process.env.REACT_APP_BASE_URL}/assets`;
    const initCanvas = () => {
        const canvas = new fabric.Canvas('canvas', {
            height: item.Height,
            width: item.Width,
            backgroundColor: item.Background_Color != null ? item.Background_Color : color
        })
        addPictureToCanvas(`${baseURL}/${item.Centred_Image}`, canvas, true)
        return canvas;
    }

    useEffect(() => {
        setCanvas(initCanvas());
    }, [])

    const addPictureToCanvas = (url, canvi, center = false) => {
        new fabric.Image.fromURL( url,
            function (img) {
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
        let files = event.target.files
        let reader = new FileReader();
        reader.readAsDataURL(files[0])
        reader.onload = (e) => {
            const url = e.target.result
            addPictureToCanvas(url, canvas)
        }
    }

    const selectColor = event => {
        canvas.backgroundColor = event.target.value
        canvas.renderAll();
    }

    return (
        <div className="container-canvas-nft">
            <div className="main">
            <input
                type='file'
                accept="image/*"
                id='file'
                ref={inputFile}
                style={{display: 'none'}}
                onChange={(e) => selectImage(e)}
            />
            <div className="Tools">
                <ul>
                    {/* <li onClick={() => addTextToCanvas(canvas)}>
                        <Icon style={{ fontSize: '36px' }} color="#fff" icon="mdi:format-text" />
                        <p>Add Text</p>
                    </li> */}
                    <li onClick={onButtonClick}>
                        <Icon style={{ fontSize: '36px' }} color="#fff" icon="mdi:file-image-plus-outline" />
                        <p>Add Picture</p>
                    </li>
                    <li onClick={onButtonColorClick}>
                    <Icon  style={{ fontSize: '36px' }} color="#fff" icon="mdi:format-color-fill" />
                        <p>Background</p>
                        <input
                            type="color"
                            ref={inputColor}
                            style={{display: 'none'}}
                            onChange={(e) => selectColor(e)}
                        />
                    </li>
                    <li onClick={() => removeSelectedObject(canvas)}>
                    <Icon style={{ fontSize: '36px' }} color="#fff" icon="mdi:delete-empty" />
                        <p>Remove</p>
                    </li>
                    <li onClick={() => saveImage()}>
                    <Icon style={{ fontSize: '36px' }} color="#fff" icon="mdi:content-save-check-outline" />
                        <p>Save</p>
                    </li>
                </ul>
            </div>

            <div className="content">
                <p id="logo">NFT Banner Editor</p>
                <canvas id="canvas" />
                <div className="image_holder">
                    <button id="remove_img_btn"><i className='bx bxs-message-square-x' ></i></button>
                    <img src="" alt="img" id="image" />
                </div>

            </div>

        </div>
    </div>
    )
}
