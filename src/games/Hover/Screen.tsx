import React from "react";
import {Styles} from "../../../global";

const styles: Styles= {
  tile: {
    height: 100,
    width: 100,
    backgroundColor: 'red'
  }
};

const Hover: React.FC = () => {
  return (
    <div>
      <div style={styles.tile} data-testid="tile">Some image</div>
    </div>
  )
};

export default Hover;
