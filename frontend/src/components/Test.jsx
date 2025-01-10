import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

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
    useFrame((state, delta) => {
      ref.current.rotation.x += delta;
      ref.current.rotation.y += delta * 2;
      ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
    });
  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={size} /> {/* Corrected: Use `sphereGeometry` */}
      <meshStandardMaterial color={color} />
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
    useFrame((state, delta) => {
      ref.current.rotation.x += delta;
      ref.current.rotation.y += delta * 2;
      ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
    });
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
      <Sphere position={[0, 0, 0]} size={[1, 32, 32]} color="yellow" />
      <Torus position={[2,0,0]} size={[0.8,0.1,30,30]} color="blue"/>
      <TorusKnot  position={[-2,0,0]} size={[0.5,0.1,100,50]} color="white"/>
    </Canvas>
  );
};

export default Test;
