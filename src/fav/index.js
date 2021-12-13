import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import {removeToFav} from "../store/actions/moveisaction"
import "../card.css";

export default function Fav() {
   const favList = useSelector(state => state.favList.favList);
   const dispatch = useDispatch()
   
   const removeFav = (id,i) => {
     if(favList.find((fav) => fav.id === id)){
       favList.splice(i,1)
     }
     dispatch(removeToFav(favList))
   }



   const displaymovies = favList.map((movie , index) => {
      return (
        <Card style={{ width: "29rem", margin: ".5%" }} id="CardX" key={index}>
                <Link to={`/moviesDet/${movie.id}`} >
                <Card.Img id="imagg"
                  variant="bottom"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
                <Card.Body>
                  <Card.Title className="mt-2">{movie.title}</Card.Title>
                </Card.Body>
                </Link>
                  <FontAwesomeIcon icon={faTrashAlt} style={{float: "left"}} id="trash" onClick={() => removeFav(movie.id,index)}/>
              </Card>
      );
    });
  return (
    <div style={{ backgroundColor:"#381919" }}>
      <h1 style={{color:"white"}}>You Love {favList.length} Movies</h1>
    <div className="text-lg-left">
        <ul id="ul" className="m-auto pb-5">
          {displaymovies}
          </ul>
    </div>
    </div>
  );
}













































 
