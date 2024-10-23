import React from 'react'
 
export default function ColorPallete({selectedModel, colors, selectedColor, selectedMainColor, selectedSideColor, selectedAccentColor, handleColorChange, handleSideColorChange, handleAccentColorChange}) {
  return (
    <div style={{ padding: '20px', borderTop: '1px solid #e0e0e0' }}>
          <div style={{ marginBottom: '10px' }}>
            <p><strong>{selectedModel === 'shirt' ? 'T-Shirt Color' : 'Sweatshirt Main Color'}:</strong></p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {colors.map((color) => (
                <div
                  key={color}
                  style={{
                    width: '30px',
                    height: '30px',
                    backgroundColor: color,
                    margin: '0 5px',
                    cursor: 'pointer',
                    borderRadius:'100%',
                    border: color === (selectedModel === 'shirt' ? selectedColor : selectedMainColor) ? '2px solid black' : '1px solid #ccc',
                  }}
                  onClick={() => handleColorChange(color)}
                />
              ))}
            </div>
          </div>
          {selectedModel === 'sweatshirt' && (
            <>
              <div>
                <p><strong>Sweatshirt Side Color:</strong></p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {colors.map((color) => (
                    <div
                      key={color}
                      style={{
                        width: '30px',
                        height: '30px',
                        backgroundColor: color,
                        margin: '0 5px',
                        cursor: 'pointer',
                        borderRadius:'100%',
                        border: color === selectedSideColor ? '2px solid black' : '1px solid #ccc',
                      }}
                      onClick={() => handleSideColorChange(color)}
                    />
                  ))}
                </div>
              </div>
              <div>
                <p><strong>Sweatshirt Accent Color:</strong></p>
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                  {colors.map((color) => (
                    <div
                      key={color}
                      style={{
                        width: '30px',
                        height: '30px',
                        backgroundColor: color,
                        margin: '0 5px',
                        cursor: 'pointer',
                        borderRadius:'100%',
                        border: color === selectedAccentColor ? '2px solid black' : '1px solid #ccc',
                      }}
                      onClick={() => handleAccentColorChange(color)}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
  )
}

