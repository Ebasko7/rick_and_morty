import { useState, useEffect } from "react";
import axios from "axios";

function AboutPage() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const getEpisodes = async (page) => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/episode?page=${page}`
      );
      console.log("api episode list response ", response);
      // Combine any episodes we already have with the ones we just got
      // in a new array
      setEpisodes((prevEpisodes) => [...prevEpisodes, ...response.data.results]);
    };

    getEpisodes(1);

  }, []);

  console.log(episodes);

  const Episode = ({ info }) => {
    console.log('episode info ', info);
    return (
      <div className="flex max-w-sm rounded overflow-hidden shadow-lg hover:bg-sky-700 bg-white bg-opacity-75 p-4 m-2">
        <div>Episode: {info.episode}</div>
        <div>Name: {info.name}</div>
        <div>Air Date: {info.air_date}</div>
      </div>
    );
  };

  return (
    <div className="relative h-screen w-full">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg"
        alt=""
      />
      <div className="relative z-10 p-8">
        <h2 className="text-white text-3xl font-bold mb-4">EPISODE LIST:</h2>
        {episodes.length ? (
          episodes.map((e, i) => <Episode key={i} info={e} />)
        ) : (
          <div className="text-white">No episodes</div>
        )}
      </div>
    </div>
  );
}

export default AboutPage;

