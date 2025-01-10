import React from 'react'
import {Canvas} from '@react-three/fiber'

const Cube  = ({position, size, color}) =>{
    return (
        <mesh position={position}>
            <boxGeometry args={size} />
            <meshStandardMaterial color={color}/>
        </mesh>
    )
}

const Test = () => {
  return (
    <Canvas>
     <directionalLight position={[0,0,2]}/>
     <ambientLight/>
       <Cube position={[1,0,0]} color="green" size={[1,1,1]} />
       <Cube position={[-1,0,0]} color="pink" size={[1,1,1]} />
       <Cube position={[-1,2,0]} color="blue" size={[1,1,1]} />
       <Cube position={[1,2,0]}color="yellow" size={[1,1,1]} />
        
        
    </Canvas>
  )
}

export default Test