/*
import NftCard from "./nft-card";
import { useState, useEffect } from "react";
import axios from "axios";

function NftCollection() {
  const baseURL = `${process.env.REACT_APP_BASE_URL}/items/NFT_Collections`;
  const [projets, setProjets] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(baseURL);
      setProjets(request.data.data);
      setLoading(true);
      return request;
    }
    fetchData();
  }, []);
  return (
    <div className="relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto">
      <h2 className="font-semibold text-2xl">Our NFT Collections</h2>
      <div className="flex space-x-6 flex-wrap p-2 -m-2">
        {loading
          ? projets.map((result) => <NftCard key={result.id} result={result} />)
          : "loading ..."}
      </div>
    </div>
  );
}

export default NftCollection;
*/

import NftCard from "./nft-card";
import { useState, useEffect } from "react";
import axios from "axios";

const files = [
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  // More files...
];

const NftCollection = () => {
  const baseURL = `${process.env.REACT_APP_BASE_URL}/items/NFT_Collections`;
  const [projets, setProjets] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(baseURL);
      setProjets(request.data.data);
      setLoading(true);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="font-semibold text-2xl mb-7">Our NFT Collections</h2>
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {loading
          ? projets.map((result) => <NftCard key={result.id} result={result} />)
          : "loading ..."}
      </ul>
    </div>
  );
};

export default NftCollection;
