import React, {useState} from "react";
import Tile from "./Tile";
import styled, {keyframes} from 'styled-components';

const TileContainer: React.FC = () => {
  const [taco, setTaco] = useState('46deg');
  // const styles: Styles = {
  //   container: {
  //     transform: `perspective(500px) rotateX(${taco}) rotateY(0deg) rotateZ(0deg)`,
  //   }
  // };

  const rotate = keyframes`
    0% {
      height: 200px;
      transform: perspective(500px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    100% {
      transform: perspective(500px) rotateX(90deg) rotateY(0deg) rotateZ(0deg);
      height: 600px;
    }
  `;


  const Box = styled.div`
    animation: ${rotate} 2s ease-in-out 0s forwards;
  `;

  const handleHover = (direction: string) => {
    setTaco('60deg');
  };

  return (
    <Box>
      <Tile onHover={handleHover}/>
    </Box>
  )
};

export default TileContainer;
