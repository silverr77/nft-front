import { useState, useEffect } from 'react';
import axios from 'axios'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Slider() {
    const [images, setImages] = useState([])
    const baseURL = `${process.env.REACT_APP_BASE_URL}`;
    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(`${baseURL}/items/slider_home_page`);
            setImages(request.data.data)
            return request;
        }
        fetchData();

    }, [])

    if (images.length == 0) return '';

  return (
    <section className="relative mt-7 shadow-2xl max-w-screen-2xl mx-auto">
      <div />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
          {images.map ( image =>
            <div key={image.id}>
                <img className="h-80" loading="lazy" src={`${baseURL}/assets/${image.image}`} alt="" />
            </div>
          )}

      </Carousel>
    </section>
  );
}

export default Slider;