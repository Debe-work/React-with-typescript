import { Canvas } from "@react-three/fiber";
import "./styles.css";

const AGeometory = () => {
  return <boxBufferGeometry args={[10, 10, 10]} />;
};

const BGeometory = () => {
  return <sphereBufferGeometry args={[10, 10, 10]} />;
  // return <sphereBufferGeometry args={[10, 10, 10]} />;
};

const CGeometory = () => {
  return <sphereBufferGeometry args={[10, 10, 10]} />;
};

export default function App() {
  const SwitchedMaterial = () => {
    const geometryType = "B";
    switch (geometryType) {
      case "A": {
        return <AGeometory />;
      }
      case "B": {
        return <BGeometory />;
      }
      default: {
        return <planeBufferGeometry />;
      }
    }
  };
  // const geometryType = "B";
  return (
    <Canvas
    // camera={{
    //   position: [100, 100, 100], // camera position x, y, z (*)
    //   fov: 50, // field of view : 視野角 (*)
    //   aspect: window.innerWidth / window.innerHeight, // アス比
    //   near: -100, // 描画する最近接位置
    //   far: 100 // 描画する最遠方位置
    // }}
    >
      {/* <mesh position={[-10, -10, -10]}> */}
      <mesh>
        <SwitchedMaterial />
      </mesh>
    </Canvas>
  );
}
