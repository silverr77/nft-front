import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Editor from "../components/editor/editor";

export default function Nft() {
  const baseURL = `${process.env.REACT_APP_BASE_URL}/items/NFT_Collections`;
  const [projet, setProjet] = useState(null);
  const [loading, setLoading] = useState(false);
  let { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${baseURL}/${id}`);
      setProjet(request.data.data);
      setLoading(true);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="big-wrapper light">
      {loading ? <Editor item={projet} /> : "loading ..."}
    </div>
  );
}
