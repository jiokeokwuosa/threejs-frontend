import React, { useRef, useState } from 'react';
// Special canvas for three js, does not take html
import { useFrame } from 'react-three-fiber'
import { MeshWobbleMaterial } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';


const SpinningBox = ({position, args, color, speed, id, index, handleClickCount, handleHover}) => {
  // const dispatch = useDispatch()
  const mesh = useRef(null)
  const [expand, setExpand] = useState(false) 

  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1]
  })

  const handleClick = () =>{   
    setExpand(!expand)
    handleClickCount(id, index)
  }
  const handlePointerOver = () =>{   
    handleHover('activeStarShip', id)
  }

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    <a.mesh ref={mesh} position={position} castShadow onClick={handleClick} scale={props.scale} onPointerOver={handlePointerOver}>
      <boxBufferGeometry attach='geometry' args={args} />
      <MeshWobbleMaterial attach='material' color={color} speed={speed} factor={0.6} />
    </a.mesh>
  );
};
export default SpinningBox;
 