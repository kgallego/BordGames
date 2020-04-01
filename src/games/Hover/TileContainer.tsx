import React from "react";
import Tile from "./Tile";
import './animations.css';

const TileContainer: React.FC = () => {
  const styles: Styles = {
    container: {
      animation: `rotate .4s ease-in-out 0s forwards`,
    }
  };

  const handleHover = (direction: string) => {
  };

  return (
    <div style={styles.container}>
      <Tile onHover={handleHover}/>
    </div>
  )
};

export default TileContainer;
