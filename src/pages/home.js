import React, {useState, useEffect} from 'react'
import Card from '../components/card/card';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../components/card/card.css';
import HpBlock from '../components/blocks/hpBlock';
import Header from '../layout/header/header';

export default function Home() {
    const [collections, setCollections] = useState([]);
    const baseURL = "http://localhost:8055/items/NFT_Collections";
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      centerMode: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    async function fetchData() {
        let response = axios.get(baseURL);
        let nfts = await response.data;
        setCollections(nfts)
    }

    useEffect(() => {
        axios.get(baseURL).then(res => {
            setCollections(res.data.data)
        })
     }, []);

    if (!collections) return null;

    return (
        <div>
            <HpBlock>
              <Header />
            </HpBlock>
            <h1 className="nft-title">OUR NFT Collections</h1>
            <div className="nft-slider mt-4 py-2 px-2">
              <Slider {...settings} className="">
                  {collections.map (collection =>
                      <Card key={collection.id} item={collection}  />
                  )}
              </Slider>
            </div>
        </div>
    )
}
