import React, { useEffect, useState } from "react";
import "./rowStyles.css";
import axios from "../axios/axios";
import Poster from "../poster/Poster";
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl }) => {
  const base = "http://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const opts = {
    height : '400',
    width : '100%',
    playerVars : { autoplay : 1 } 
  }

  useEffect(() => {

    // horizontal_scroll_functions
    const rows = document.querySelectorAll(".container");
    let isDown = false;
    let startX;
    let scrollLeft;

    rows.forEach((row) => {
      row.addEventListener("mousedown", (e) => {
        isDown = true;
        row.classList.add("active");
        startX = e.pageX - row.offsetLeft;
        scrollLeft = row.scrollLeft;
      });
      row.addEventListener("mouseleave", () => {
        isDown = false;
        row.classList.remove("active");
      });
      row.addEventListener("mouseup", () => {
        isDown = false;
        row.classList.remove("active");
      });
      row.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - row.offsetLeft;
        const walk = (x - startX) * 3;
        row.scrollLeft = scrollLeft - walk;
      });
    });

    //fetch movies
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.table(request.data.results)
      return request;
    }
    
    fetchData()
    .then( req => setMovies(req.data.results) )
    .catch( err => console.log(err) )
  
  }, [fetchUrl]);

  const clickHandler = (movie) =>{
    if( trailerUrl ){
      setTrailerUrl('')
    }else{
      movieTrailer( movie?.name || movie?.original_name ||  movie?.title || "")
      .then( url =>{
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl(urlParams.get('v'))
      } )
      .catch( err=>console.log(err) )
    }
  }


  return (
    <div className="row">
      <h4 className="title">{title}</h4>
      <div className="container">
        {movies.map((movie) => {
          return (
            <Poster
              key={movie.id}
              movie={{
                name: movie.name,
                bg: `${base}${movie.poster_path}`,
              }}
              onclick={()=>clickHandler(movie)}
            />
          );
        })}
      </div>
      {/* trailer*/}
      { trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/> }
    </div>
  );
};

export default Row;
