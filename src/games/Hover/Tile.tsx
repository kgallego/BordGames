import React from "react";

const styles: Styles = {
  tile: {
    height: 100,
    width: 100,
    backgroundColor: 'red'
  }
};

interface TileProps {
  onHover: (direction: string) => void;
}

const Tile: React.FC<TileProps> = (props: TileProps) => {
  const {onHover} = props;

  const handleHover = (e: any) => {
    const tile = e.target.getBoundingClientRect();

    const cooridanates = {
      top: Math.abs(e.clientY - tile.top),
      bottom: Math.abs(e.clientY - tile.bottom),
      left: Math.abs(e.clientX - tile.left),
      right: Math.abs(e.clientX - tile.right),
    };

    const value = Math.min(...Object.values(cooridanates));
    const direction = Object.keys(cooridanates).filter(coordinate => cooridanates[coordinate] == value);

    console.log(...direction);
    onHover(...direction);
  };

  return (
    <div>
      <div style={styles.tile} onMouseOver={handleHover} data-testid="tile">Some image</div>
    </div>
  )
};

export default Tile;
