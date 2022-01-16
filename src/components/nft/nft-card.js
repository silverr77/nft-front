import { useHistory } from "react-router-dom";

function NftCard({ result }) {
  const baseURL = `${process.env.REACT_APP_BASE_URL}`;
  const history = useHistory();

  return (
    <div
      className="flex min-w-[250px] min-h-[170px] md:min-w-[330px] md:min-h-[210px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300"
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