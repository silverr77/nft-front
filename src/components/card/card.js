import React from 'react'
import { Link } from "react-router-dom";
export default function Card({item}) {

    const baseURL = `${process.env.REACT_APP_BASE_URL}/assets`;
    return (
        <div className="nft-card">
            <div className="nft-card-img">
                    <Link to={`/nft-generator/${item.id}`}>
                        <img height={300} width={300} src={`${baseURL}/${item.Image}`} />
                        <p className="nft-card-title">{item.Titre}</p>
                    </Link>
            </div>
        </div>
    )
}
