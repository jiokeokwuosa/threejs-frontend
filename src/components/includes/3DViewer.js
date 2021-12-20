import React from 'react';
import { Canvas } from 'react-three-fiber';
import { useDispatch} from 'react-redux'
import Mesh from './SpinningBox';
import { softShadows, OrbitControls } from '@react-three/drei'; 
import { updateStarShipCount,inputChange } from '../../redux/actions/starShipActions';

softShadows()

const colors = ['lightblue','pink','red','green','purple','orange','blue','aqua']

const Viewer = ({data}) => {
  const dispatch = useDispatch()

  const randomNumber =(min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const handleClick = (id,index) =>{
    dispatch(updateStarShipCount(id,index))
  }
  
  const handleHover = (name, value) =>{
    dispatch(inputChange(name, value))
  }

  const starShips = () =>{
    if(data && data.length>0){
       return data.map((item, index)=>{
         return   <Mesh key={item.uid} id={item.uid} handleClickCount={handleClick} handleHover={handleHover} index={index} position={[randomNumber(-2,7),randomNumber(-1,1) , randomNumber(-5,0)]} args={[randomNumber(1,3),randomNumber(1,2),randomNumber(1,2)]} color={colors[randomNumber(0,6)]} speed={randomNumber(2,6)}/>
       })
    }
  }

  return (
    <section className='col-md-10'>
      <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 60 }} shadows>
        <group>
          <ambientLight intensity={0.3} />
          <directionalLight 
            castShadow
            position={[0,10,0]} 
            intensity={1.5} 
            shadowMapWidth={1024}
            shadowMapHeight={1024}
            shadowCameraFar={50}
            shadowCameraLeft={-10}
            shadowCameraRight={10}
            shadowCameraTop={10}
            shadowCameraBottom={-10}/>
          <pointLight position={[-10, 0, -20]} intensity={0.5}/>
          <pointLight position={[0, -10, 0]} intensity={1.5}/>
        </group>    
     
        <group>
          <mesh receiveShadow rotation={[-Math.PI/2, 0, 0]} position={[0, -3, 0]}>
              <planeBufferGeometry attach='geometry' args={[100,100]}/>
              <shadowMaterial attach='material' opacity={0.3}/>              
          </mesh>
          {starShips()}
        </group>       
        <OrbitControls/>
      </Canvas>
    </section>
  );
}

export default Viewer;



