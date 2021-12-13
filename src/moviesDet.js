import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axiosInstance from "./axiosConfiq/index";
import './card.css'
export default function MoviesDet(){
    const [details, setDetails] = useState({});
    const params = useParams();
    console.log(params);
    useEffect(() => {
    axiosInstance
      .get(`movie/${params.id}`,{
          params:{
            api_key : "c1b95ab390b77067f0861b8787c1b672"
          }
      })
      .then((res) =>setDetails(res.data))
      .catch((err) => console.log(err));
    }, []);
  
  return (
    <div className="col-md-8 m-auto d-flex justify-content-between">
      <div className="w-50 divs">
      <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} className="img-fluid" alt={details.image}/>
      </div>
     <div className="text-center divs">
     <h4>{details.title}</h4>
     <h6>{details.overview}</h6>
      <Link to="/">
          <button className="btn btn-primary">back to all movie </button>
      </Link>
     </div>
    </div>
  );
}
