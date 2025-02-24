'use client'

import {  Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
// import { Button } from '@/components/ui/button'

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  return <primitive  object={scene} scale={1} />
}

export default function ThreeDModelViewer() {
  const currentModel = '/dragon.glb';
  


  return (

    <Canvas camera={{ position: [0, 1, 2], fov: 50 }} className="h-[500px]">
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Suspense fallback={null}>
        <Model url={currentModel} />
      <OrbitControls enableZoom={true} />

          </Suspense>
    </Canvas>
    

  )
}