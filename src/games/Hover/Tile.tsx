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
    const top = Math.abs(e.clientY - tile.top);
    const bottom = Math.abs(e.clientY - tile.bottom);
    const direction = top < bottom ? 'top' : 'bottom';
    onHover(direction);
  };

  return (
    <div>
      <div style={styles.tile} onMouseOver={handleHover} data-testid="tile">Some image</div>
    </div>
  )
};

export default Tile;
