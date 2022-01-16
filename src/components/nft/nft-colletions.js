import NftCard from "./nft-card";
import { useState, useEffect } from "react";
import axios from 'axios'

function NftCollection() {
    const baseURL = `${process.env.REACT_APP_BASE_URL}/items/NFT_Collections`;
    const [projets, setProjets] = useState(null)
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(baseURL);
            setProjets(request.data.data)
            setLoading(true)
            return request;
        }
        fetchData();
    }, []);
  return (
    <div className="relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto">
      <h2 className="font-semibold">Our NFT Collections</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2">
        {loading ? (
            projets.map((result) => (
            <NftCard key={result.id} result={result} />
            ))
        ) : 'loading ...'}
      </div>
    </div>
  );
}

export default NftCollection;