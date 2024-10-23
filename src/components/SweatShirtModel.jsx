import React, { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'


export default function SweatShirtModel({ mainColor, sideColor, accentColor }) {
    const groupRef = useRef()
    const [rotation, setRotation] = useState(0)
    const [targetRotation, setTargetRotation] = useState(0)
    const scale = window.innerWidth < 600 ? 4 : 5.5; // Adjust scale based on screen size
  
  
    useEffect(() => {
      useGLTF.preload('swaetshirt_men_gltf_orange/swaetshirt_men_gltf_orange.gltf')
    }, [])
  
    const { nodes, materials } = useGLTF('swaetshirt_men_gltf_orange/swaetshirt_men_gltf_orange.gltf')
    
    // Create new materials with the selected colors
    const mainMaterial = new THREE.MeshStandardMaterial({ color: mainColor })
    const sideMaterial = new THREE.MeshStandardMaterial({ color: sideColor })
    const accentMaterial = new THREE.MeshStandardMaterial({ color: accentColor })
    const metalMaterial = new THREE.MeshStandardMaterial({ color: '#888888', metalness: 0.8, roughness: 0.2 })
  
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
        position={[0, scale == 4 ? -6 : -7.5, 0]}
        onPointerEnter={handleMouseEnter}
        onPointerLeave={handleMouseLeave}
      >
        {Object.entries(nodes).map(([name, node]) => {
          if (node.geometry) {
            let material;
            if (name.includes('Zipper') || name.includes('metall')) {
              material = metalMaterial;
            } else if (name.includes('Sleeves') || name.includes('rib2X2')) {
              material = sideMaterial;
            } else if (name.includes('Stitch') || name.includes('Internal_Line')) {
              material = accentMaterial;
            } else {
              material = mainMaterial;
            }
  
            return (
              <mesh
                key={name}
                geometry={node.geometry}
                material={material}
                position={node.position}
                rotation={node.rotation}
              />
            )
          }
          return null;
        })}
      </group>
    )
  }