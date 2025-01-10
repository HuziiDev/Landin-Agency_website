import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei"
const Cube = ({ position, size, color }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2;
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
  });
  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Sphere = ({ position, size, color }) => {
    const ref = useRef();
    const[isHover, setIsHover] = useState(false)
    const[isClicked, setIsClicked] = useState(false)
    useFrame((state, delta) => {
        const speed = isHover ? 1 : 0.2
  
      ref.current.rotation.y += delta * speed
      
    });
  return (
    <mesh position={position} ref={ref} onPointerEnter={(event)=> (event.stopPropagation(), setIsHover(true))} 
    onPointerLeave={()=> isHover(false)}
    onClick={()=> setIsClicked(!isClicked)}
    scale={isClicked ? 1.5 : 1}
    >
      <sphereGeometry args={size}  /> 
      <meshStandardMaterial color={isHover ? 'orange' : 'blue'} wireframe />
    </mesh>
  );
};
const Torus = ({ position, size, color }) => {
    const ref = useRef();
    useFrame((state, delta) => {
      ref.current.rotation.x += delta;
      ref.current.rotation.y += delta * 2;
      ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
    });
  return (
    <mesh position={position} ref={ref}>
      <torusGeometry args={size} /> {/* Corrected: Use `sphereGeometry` */}
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
const TorusKnot = ({ position, size, color }) => {
    const ref = useRef();
    // useFrame((state, delta) => {
    //   ref.current.rotation.x += delta;
    //   ref.current.rotation.y += delta * 2;
    //   ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
    // });
  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={size} /> {/* Corrected: Use `sphereGeometry` */}
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Test = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} intensity={0.5} />
      <ambientLight intensity={0.1} />

      {/* Uncomment for cube examples */}
      {/* <group position={[0, -1, 0]}>
        <Cube position={[1, 0, 0]} color="green" size={[1, 1, 1]} />
        <Cube position={[-1, 0, 0]} color="pink" size={[1, 1, 1]} />
        <Cube position={[-1, 2, 0]} color="blue" size={[1, 1, 1]} />
        <Cube position={[1, 2, 0]} color="yellow" size={[1, 1, 1]} />
      </group> */}

      {/* Single Cube */}
      {/* <Cube position={[0, 0, 0]} size={[1, 1, 1]} color="orange" /> */}

      {/* Sphere Example */}
      {/* <Sphere position={[0, 0, 0]} size={[1, 32, 32]} color="yellow" /> */}


      {/* <Torus position={[2,0,0]} size={[0.8,0.1,30,30]} color="blue"/> */}
      <TorusKnot  position={[0,0,0]} size={[1,0.1,100,50]} color="white"/>
      <OrbitControls/>
    </Canvas>
  );
};

export default Test;
