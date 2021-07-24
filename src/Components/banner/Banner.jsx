import React, { useState,useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import axios from "../axios/axios";
import Requests from "../requests/Requests";
import "./bannerStyles.css";

const Banner = () => {
  const base = "http://image.tmdb.org/t/p/original/";
  const [title, setTitle] = useState("");
  const [desp, setDesp] = useState("");
  const [bg, setBg] = useState("");

  useEffect(()=>{

    async function fetchData() {
      const request = await axios.get(Requests.fetchTopRated);
      return request;
    }
  
    fetchData()
      .then((req) => {
        const movieList = req.data.results;
        const len = movieList.length;
        const randIndx = randNum(len);
        setTitle(movieList[randIndx]?.title || movieList[randIndx]?.name || movieList[randIndx]?.original_name);
        setDesp(movieList[randIndx]?.overview);
        setBg(movieList[randIndx]?.poster_path);
      })
      .catch((err) => console.log(err));

  },[])


  const randNum = (N) => Math.floor(Math.random() * (N - 1));

  const formatDesp = (desp) =>
    desp.length > 200 
    ? desp.slice(0, 200).concat("...") 
    : desp;

  return (
    <header className="banner">
      <img src={`${base}${bg}`} alt={title} className='bannerImage'/>
      <div className="bannerContainer">
        <div className="bannerContent">
          <div className="contentContainer">
            <h1 className="bannerTitle">{title}</h1>
            <button className="playBtn">
              <FaPlay />
            </button>
            <p className="bannerDesp">{formatDesp(desp)}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
