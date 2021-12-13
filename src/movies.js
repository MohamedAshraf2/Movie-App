import React, { useEffect, useState } from "react";
import axiosInstance from "./axiosConfiq/index";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import ReactPaginate from 'react-paginate';
import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux";
import {addToFav} from "./store/actions/moveisaction"
import { getArticles } from "./store/actions/articles";

export default function Movies() {

  const dispatch = useDispatch()
    const handlerFav = (movie) => {
      dispatch(addToFav(movie))
    }
    
    // const [movies, setmovies] = useState([]);
    
    const X = useSelector(state => state.art)
    useEffect(() => {
      dispatch(getArticles())
  });
  

  const [pageNumber, setPageNumber] = useState(0);


  const moviesperpage = 6;
  const pagesVisited = pageNumber * moviesperpage;

  const DisMovies = X.slice(pagesVisited , pagesVisited + moviesperpage).map(( movie , i) => {
      return (
        <Card id="CardX" key={i}>
                <Link to={`/moviesDet/${movie.id}`} >
                <Card.Img id="imagg"
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
                <Card.Body>
                  <Card.Title className="mt-2 ">{movie.title}</Card.Title>
                </Card.Body>
                </Link>
                  <FontAwesomeIcon icon={faStar}  id="star"  onClick={() => {handlerFav(movie)} }/>
              </Card>
      );
    });
    const pageCount = Math.ceil(X.length / moviesperpage);

    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };
    
   
  return (
    <div id="con" >
      <ul id="ul" className="m-auto pb-5">
      {DisMovies}
      </ul>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}
