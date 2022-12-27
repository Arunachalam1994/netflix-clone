import React, { useEffect, useState } from "react";
import axios from "../axios";
import request from "../request";
import { imagUrl } from "../request";
import "./Banner.css";
function Banner() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    axios.get(request.fetchNetflixOriginals).then((res) => {
      console.log(
        "dss",
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );
      setMovieList(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );
    });
  }, []);
  const truncate = (str) =>
    str?.length > 150 ? str.substr(0, 150) + "..." : str;
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${imagUrl}${movieList?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="bannerContents">
        <h1 className="bannerTitle">
          {movieList?.title || movieList?.name || movieList?.original_name}
        </h1>
        <div className="bannerButtons">
          <button className="banner_button">Play</button>
          <button className="banner_button">MyList</button>
        </div>
        <h1 className="bannerDesc">{truncate(movieList?.overview)}</h1>{" "}
      </div>
      <div className="bannerFooter"></div>
    </div>
  );
}

export default Banner;
