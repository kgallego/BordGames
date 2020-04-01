import React from "react";
import TileContainer from "./TileContainer";

const styles: Styles = {
  game: {
    backgroundColor: 'black',
    display: "grid",
    gridTemplateColumns: '100px 100px 100px 100px',
    gridTemplateRows: 'auto',
  }
};

const Hover: React.FC = () => {
  const renderTiles = (amount: number) => {
    let tiles = [];
    for (let i = 0; i < amount; i++) {
      tiles.push(<TileContainer />);
    }
    return tiles;
  };
  return (
    <div style={styles.game}>
      {renderTiles(16)}
    </div>
  )
};

export default Hover;
