import { Canvas } from "@react-three/fiber";
import "./styles.css";

const AGeometory = () => {
  return <planeBufferGeometry />;
};

const BGeometory = () => {
  return <sphereBufferGeometry />;
};

export default function App() {
  const SwitchedMaterial = () => {
    const geometryType = "A";
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
    <Canvas>
      <mesh>
        <SwitchedMaterial />
      </mesh>
    </Canvas>
  );
}
