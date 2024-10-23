/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 scene.gltf 
Author: Hyperrealitystudio (https://sketchfab.com/Hyperrealitystudio)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/t-shirt-7c8a4dede482474fa5a74f24c6fc5e81
Title: T-shirt
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function ShirtModel(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.AM_102_035_003_AM_102_035_002_0.geometry} material={materials.AM_102_035_002} />
    </group>
  )
}

useGLTF.preload('/scene.gltf')