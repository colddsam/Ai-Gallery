'use client'

import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Group } from 'three'  // ✅ Import Group from THREE

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  const modelRef = useRef<Group>(null) // ✅ Use Group type from three

  // Rotate the model continuously
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01
    }
  })

  return <primitive ref={modelRef} object={scene} scale={1} />

}

export default function ModelViewer() {
  const currentModel = '/dragon.glb'

  return (
    <div className="w-full h-full overflow-hidden flex flex-row items-center justify-center"> {/* ✅ Fix overflow */}
      <Canvas 
       camera={{ position: [0, 1, 3], fov: 50, near: 0.01, far: 500 }} 
  gl={{ antialias: true, logarithmicDepthBuffer: true }} // ✅ Fix depth issue
  className="h-full w-full "
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 2, 2]} />
        <Suspense fallback={null}>
          <Model url={currentModel} />
          <OrbitControls 
  enableZoom={false} 
  minDistance={2}  // ✅ Prevent too much zoom in
  maxDistance={15} // ✅ Prevent too much zoom out
  autoRotate={true} // ✅ Rotate to see full model
  autoRotateSpeed={1} 
  target={[0, 0, 0]} 
/>
        </Suspense>
      </Canvas>
    </div>
  )
}
