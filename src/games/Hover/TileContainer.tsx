import React from "react";
import Tile from "./Tile";

const styles: Styles = {
  container: {
    backgroundColor: 'grey'
  }
};

const TileContainer: React.FC = () => {
  const handleHover = (direction: string) => {
    // handle animation
    // extract to tile container
  };

  return (
    <div style={styles.container}>
      <Tile onHover={handleHover}/>
    </div>
  )
};

export default TileContainer;
