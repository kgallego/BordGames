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
    const left = Math.abs(e.clientX - tile.left);
    const right = Math.abs(e.clientX - tile.right);

    const coords = [
      {val: top, dir: 'top'},
      {val: bottom, dir: 'bottom'},
      {val: left, dir: 'left'},
      {val: right, dir: 'right'},
    ];

    const direction = coords.reduce((acc, current) => acc.val < current.val ? acc : current);

    onHover(direction.dir);
  };

  return (
    <div>
      <div style={styles.tile} onMouseOver={handleHover} data-testid="tile">Some image</div>
    </div>
  )
};

export default Tile;
