import React from "react";
import TileContainer from "./TileContainer";

const styles: Styles = {
  game: {
    backgroundColor: 'grey',
  }
};

const Hover: React.FC = () => {
  return (
    <div style={styles.game}>
      <TileContainer />
      <TileContainer />
      <TileContainer />
      <TileContainer />
      <TileContainer />
    </div>
  )
};

export default Hover;
