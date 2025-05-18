// src/components/Graph.jsx
import React, { useEffect, useRef } from 'react'
import JXG from 'jsxgraph'

export default function Graph({ func, min = -5, max = 5 }) {
  const boardRef = useRef(null)

  useEffect(() => {
    const board = JXG.JSXGraph.initBoard(boardRef.current, {
      boundingbox: [min, max, max, min],
      axis: true,
      showNavigation: false,
      showCopyright: false,
    })
    board.create('functiongraph', [func, min, max], {
      strokeWidth: 2,
      strokeColor: '#8b5cf6',
    })
    return () => JXG.JSXGraph.freeBoard(board)
  }, [func, min, max])

  return <div ref={boardRef} className="w-full h-80 bg-gray-800 rounded-lg" />
}
