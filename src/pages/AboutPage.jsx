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
      setEpisodes((prevEpisodes) => [...prevEpisodes, ...response.data.results]);
    };

    getEpisodes(1);
  }, []);

  console.log(episodes);

  const Episode = ({ info }) => {
    console.log('episode info ', info);
    return (
      <div className="flex flex-col max-w-sm rounded overflow-hidden shadow-lg hover:bg-sky-700 bg-white bg-opacity-75 p-4 m-2">
        <div>Episode: {info.episode}</div>
        <div>Name: {info.name}</div>
        <div>Air Date: {info.air_date}</div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen w-full">
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="relative z-10 p-8">
        <h2 className="text-white text-3xl font-bold mb-4">EPISODE LIST:</h2>
        {episodes.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {episodes.map((e, i) => <Episode key={i} info={e} />)}
          </div>
        ) : (
          <div className="text-white">No episodes</div>
        )}
      </div>
    </div>
  );
}

export default AboutPage;