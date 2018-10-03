import React from 'react'
import ColorContext from './color'

const colorArray = ['#3F2A36', '#DB2580', '#C5E1A0', '#75BBC0', '#117D69', '#FAE8C4', '#66D594', '#3F2A36', '#DB2580', '#C5E1A0', '#75BBC0', '#117D69', '#FAE8C4', '#66D594']

const ColorProvider = ({ children }) => (
  <ColorContext.Provider value={colorArray}>{children}</ColorContext.Provider>
)

export default ColorProvider
