import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'


export default function ShirtModel({ color }) {
    const groupRef = useRef() 
    const [rotation, setRotation] = useState(0)
    const [targetRotation, setTargetRotation] = useState(0)
    const scale = window.innerWidth < 600 ? 0.065 : 0.07; // Adjust scale based on screen size
  
    useEffect(() => {
      useGLTF.preload('t-shirt/scene.gltf')
    }, [])
  
    const { nodes, materials } = useGLTF('t-shirt/scene.gltf')
    
    // Create a new material with the selected color
    const coloredMaterial = new THREE.MeshStandardMaterial({ color: color })
  
    useFrame(() => {
      if (groupRef.current) {
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, rotation, 0.1)
      }
    })
  
    const handleMouseEnter = (e) => {
      const direction = e.nativeEvent.clientX > window.innerWidth / 2 ? -1 : 1
      setTargetRotation(direction * Math.PI / 12)
      setRotation(targetRotation)
    }
  
    const handleMouseLeave = () => {
      setTargetRotation(0)
      setRotation(targetRotation)
    }
  
    return (
      <group 
        ref={groupRef} 
        dispose={null} 
        scale={scale}
        onPointerEnter={handleMouseEnter}
        onPointerLeave={handleMouseLeave}
      >
        <mesh
          geometry={nodes.AM_102_035_003_AM_102_035_002_0.geometry} 
          material={coloredMaterial} 
        />
      </group>
    )
  }