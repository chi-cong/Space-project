import React from "react";
import { FaAngleDown } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <header className="header">
        <div className="content">
          <h1>Exploring space by various ways</h1>
          <p>Funny tools I built on Nasa APIs. It will help you get more informations about the universe. It's easy to use with friendly UI. Anyway, let's get started</p>

        </div>
        <div className="ricons">
          <FaAngleDown />
        </div>
      </header>
    </>
  );
}

export default Home; 