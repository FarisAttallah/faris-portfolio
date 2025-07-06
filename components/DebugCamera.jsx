import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'

export default function DebugCamera() {
  const { camera } = useThree()

  useEffect(() => {
    const log = () => {
      console.log("Camera Position:", camera.position)
      console.log("Camera Rotation:", camera.rotation)
    }

    const onKeyDown = (e) => {
      if (e.key === 'p') {
        log() // Press "p" to print the camera info
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [camera])

  return null
}
