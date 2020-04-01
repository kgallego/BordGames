import React from "react";

const styles: Styles = {
  tile: {
    height: 100,
    width: 100,
  }
};

interface TileProps {
  onHover: (direction: string) => void;
}

interface HoverLocation {
  direction: string;
  originOffset: number
}

const Tile: React.FC<TileProps> = (props: TileProps) => {
  const {onHover} = props;

  const handleHover = (e: any) => {
    const tile = e.target.getBoundingClientRect();
    const coords: HoverLocation[] = [
      {direction: 'top', originOffset: Math.abs(e.clientY - tile.top)},
      {direction: 'bottom', originOffset: Math.abs(e.clientY - tile.bottom)},
      {direction: 'left', originOffset: Math.abs(e.clientX - tile.left)},
      {direction: 'right', originOffset: Math.abs(e.clientX - tile.right)},
    ];

    const minimum = (acc: any, current: any) => acc.originOffset < current.originOffset ? acc : current;
    const hover = coords.reduce(minimum);

    console.log(hover.direction);
    onHover(hover.direction);
  };

  return (
    <div>
      <div style={styles.tile} onMouseOver={handleHover} data-testid="tile" />
    </div>
  )
};

export default Tile;
