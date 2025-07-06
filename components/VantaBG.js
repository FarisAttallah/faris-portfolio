import { useEffect, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

export default function VantaBG() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = FOG({
        el: vantaRef.current,
        THREE,
        highlightColor: 0x225Eaa,
        midtoneColor: 0x2324aa,
        lowlightColor: 0x1a1216,
        baseColor: 0x111216,
        blurFactor: 0.2,
        speed: 0.3,
        zoom: 1.7,
        mouseControls: true,
        touchControls: true,
      });
    }
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
}