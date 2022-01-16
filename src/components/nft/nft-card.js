/*
import { useHistory } from "react-router-dom";

function NftCard({ result }) {
  const baseURL = `${process.env.REACT_APP_BASE_URL}`;
  const history = useHistory();

  return (
    <div
      className="flex w-full md:w-1/3  rounded-lg overflow-hidden px-4 py-4 shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300"
      onClick={() => history.push(`/nft-generator/${result.id}`)}
    >
      <img
        src={`${baseURL}/assets/${result.Image}`}
        width={330}
        height={210}
        className="rounded-lg"
      />
    </div>
  );
}

export default NftCard;
*/

import { useHistory } from "react-router-dom";

function NftCard({ result }) {
  const baseURL = `${process.env.REACT_APP_BASE_URL}`;
  const history = useHistory();

  return (
    <li
      className="relative"
      onClick={() => history.push(`/nft-generator/${result.id}`)}
    >
      <div className="group block w-full h-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
        <img
          src={`${baseURL}/assets/${result.Image}`}
          alt=""
          className="object-cover h-full w-full pointer-events-none group-hover:opacity-75"
        />
      </div>
    </li>
  );
}

export default NftCard;
