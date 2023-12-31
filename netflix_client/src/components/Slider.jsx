import React from "react";
import CardSlider from "./CardSlider";

const Slider = ({ movies }) => {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };
  return (
    <div>
      <CardSlider title="Trending Now " data={getMoviesFromRange(0, 10)} />
      <CardSlider title="New Releases " data={getMoviesFromRange(10, 20)} />
      <CardSlider
        title="BlockBuster movies "
        data={getMoviesFromRange(20, 30)}
      />
      <CardSlider
        title="Popular on Netflix"
        data={getMoviesFromRange(30, 40)}
      />
      <CardSlider title="Action Movies" data={getMoviesFromRange(40, 50)} />
      <CardSlider title="Popular one" data={getMoviesFromRange(50, 60)} />
    </div>
  );
};

export default Slider;
