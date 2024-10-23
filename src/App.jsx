import { Canvas, useFrame } from '@react-three/fiber'
import React, { useState, useRef, useEffect } from 'react'
import { Html, OrbitControls, useGLTF } from '@react-three/drei'
import { useNavigate } from 'react-router-dom';
import { DiGulp } from "react-icons/di";
import ShirtModel from './components/ShirtModel';
import SweatShirtModel from './components/SweatShirtModel';
import ColorPallete from './components/ColorPallete';

function App() {
  const [selectedModel, setSelectedModel] = useState('shirt')
  const [selectedColor, setSelectedColor] = useState('#FFFFFF')
  const [selectedMainColor, setSelectedMainColor] = useState('#FFFFFF')
  const [selectedSideColor, setSelectedSideColor] = useState('#000000')
  const [selectedAccentColor, setSelectedAccentColor] = useState('#FF0000')

  // Loader component
  const Loader = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-white mb-5"></div>
          <p className="text-xl font-semibold">Loading Model...</p>
        </div>
      </div>
    );
  };

  const navigate = useNavigate();
  

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value)
  }

  const handleColorChange = (color) => {
    if (selectedModel === 'shirt') {
      setSelectedColor(color)
    } else {
      setSelectedMainColor(color)
    }
  }

  const handleSideColorChange = (color) => {
    setSelectedSideColor(color)
  }

  const handleAccentColorChange = (color) => {
    setSelectedAccentColor(color)
  }

  const colors = ['#FFFFFF', '#FFCCCC', '#CCFFCC', '#CCCCFF', '#FFFFCC', '#FFCCFF', '#CCFFFF', '#CCCCCC']

  return (
    <>   
    <div style={{backgroundColor: '#f0f0f0'}}>
    <div className='flex justify-between items-center mx-10 pt-5'>
      <DiGulp className='text-5xl'/>
      <button 
        className="ml-4 transition-color duration-500 ease-in-out transform hover:scale-110 border-2 border-black rounded-lg px-5 py-2"
        onClick={() => navigate('/')} // Navigate to main page
      >
        <strong>GO BACK</strong>
      </button>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0', overflow:'auto'}}>
      <div style={{ width: '90%', maxWidth: '800px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden', marginTop:'20px'}}>
        <div style={{ padding: '20px' }}>
          <label htmlFor="modelSelect"><strong>Select a clothing: </strong></label>
          <select id="modelSelect" value={selectedModel} onChange={handleModelChange}>
            <option value="shirt">T-Shirt</option>
            <option value="sweatshirt">Sweatshirt</option>
          </select>
        </div>
        <div style={{ height: '60vh', width: '100%' }}>
          <Canvas>
            <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
            <directionalLight position={[1, 1, 1]} />
            <ambientLight intensity={1} />
            {selectedModel === 'shirt' ? (
              <ShirtModel color={selectedColor} />
            ) : (
              <SweatShirtModel 
                mainColor={selectedMainColor} 
                sideColor={selectedSideColor} 
                accentColor={selectedAccentColor} 
              />
            )}
            {/* <Html>
              <ColorPallete colors={colors} selectedModel={selectedModel} selectedColor={selectedColor} selectedMainColor={selectedMainColor} selectedSideColor={selectedSideColor} selectedAccentColor={selectedAccentColor} handleColorChange={handleColorChange} handleSideColorChange={handleSideColorChange} handleAccentColorChange={handleAccentColorChange}/>
            </Html> */}
          </Canvas>
        </div>
        <ColorPallete colors={colors} selectedModel={selectedModel} selectedColor={selectedColor} selectedMainColor={selectedMainColor} selectedSideColor={selectedSideColor} selectedAccentColor={selectedAccentColor} handleColorChange={handleColorChange} handleSideColorChange={handleSideColorChange} handleAccentColorChange={handleAccentColorChange}/>
      </div>
    </div>
    </div>
    </>
 
  )
}

export default App
