import React from "react";
import Tile from "./Tile";

const styles: Styles = {
  game: {
    backgroundColor: 'grey'
  }
};

const Hover: React.FC = () => {
  const handleHover = (direction: string) => {
    // handle animation
    // extract to tile container
  };

  return (
    <div style={styles.game}>
      <Tile onHover={handleHover}/>
    </div>
  )
};

export default Hover;
