import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import DebugCamera from './DebugCamera'
import { useEffect, useState } from 'react'

// Simple animated mouse icon component
function MouseDragHint() {
  return (
    <div className="gaming-mouse-hint">
      <svg width="36" height="56" viewBox="0 0 36 56" fill="none">
        <rect x="1.5" y="1.5" width="33" height="53" rx="16.5" stroke="#b6aaff" strokeWidth="3" fill="rgba(34,34,51,0.2)" />
        <circle cx="18" cy="16" r="4" fill="#b6aaff">
          <animate
            attributeName="cy"
            values="16;28;16"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
      <span className="gaming-mouse-hint-text">
        Drag to rotate
      </span>
    </div>
  )
}

function GamingModel(props) {
  const { scene } = useGLTF('/models/scene.gltf')
  return <primitive object={scene} scale={0.7} {...props} />
}

useGLTF.preload('/models/scene.gltf')

export default function GamingSetup3D() {
  // Responsive height, width, and model scale based on window size
  const [height, setHeight] = useState(600);
  const [width, setWidth] = useState("100%");
  const [modelScale, setModelScale] = useState(0.7);

  useEffect(() => {
    function handleResize() {
      const w = window.innerWidth;
      setHeight(Math.max(220, Math.min(window.innerHeight * 0.6, 700)));
      setModelScale(w < 500 ? 0.38 : w < 700 ? 0.5 : 0.7);
      setWidth(w < 700 ? "96vw" : "100%"); // Make window smaller on mobile
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive camera position for mobile/desktop
  const isMobile = typeof window !== "undefined" && window.innerWidth < 700;
  const cameraPosition = isMobile ? [7, 1.5, 3] : [12, 1.5, 5];
  const screenTarget = [-5, 1, 0];

  return (
    <div style={{ width, height, position: "relative", margin: "0 auto" }}>
      <MouseDragHint />
      <Canvas camera={{ position: cameraPosition, fov: 28 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <GamingModel scale={modelScale} />
        <OrbitControls enablePan={false} target={screenTarget} />
        <DebugCamera />
      </Canvas>
    </div>
  );
}