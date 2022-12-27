import React, { useState, useRef, useEffect } from "react";
import axios from "../axios";
import { imagUrl } from "../request";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
export const Row = ({ title, url, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState("");
  const imageRef = useRef(trailer);
  imageRef.current = trailer;

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results);
    });
  }, [url]);

  const handleClick = (v) => {
    if (trailer) setTrailer("");
    else {
      console.log("name", v, v.name);
      movieTrailer(v.name ? v.name : v.title ? v.title : "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailer((prev) => {
            return urlParams.get("v");
          });
        })
        .catch((err) => console.log("Error Trailer", err));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_poster">
        {movies.map((v, i) => (
          <img
            key={v.id}
            className={`row_posters ${isLargeRow && "row_posterLarge"}`}
            src={`${imagUrl}${isLargeRow ? v.poster_path : v.backdrop_path}`}
            alt={v.name}
            onClick={() => handleClick(v)}
          />
        ))}
      </div>

      {trailer && <Youtube videoId={trailer} opts={opts} />}
    </div>
  );
};
