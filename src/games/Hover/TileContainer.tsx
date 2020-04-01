import React, {useState} from "react";
import Tile from "./Tile";
import './animations.css';

const TileContainer: React.FC = () => {
  const [direction, setDirection] = useState();
  const styles: Styles = {
    container: {
      height: 100,
      width: 100,
      animation: `rotate-${direction} .2s alternate 0s forwards`,
    }
  };

  const handleHover = (direction: string) => {
    setDirection(direction)
  };

  return (
    <div style={styles.container}>
      <Tile onHover={handleHover}/>
    </div>
  )
};

export default TileContainer;
