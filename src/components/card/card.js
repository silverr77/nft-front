import React from 'react'
import { Link } from "react-router-dom";
export default function Card({item}) {

    const baseURL = 'http://localhost:8055/assets'
    return (
        <div className="nft-card">
            <div className="nft-card-img">
                    <img height={300} width={300} src={`${baseURL}/${item.Image}`} />
                    <Link to={`/nft-generator/${item.id}`}>
                        <p className="nft-card-title">{item.Titre}</p>
                    </Link>
            </div>
        </div>
    )
}
