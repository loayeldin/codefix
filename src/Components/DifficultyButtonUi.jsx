import React from 'react'

function DifficultyButtonUi({problem}) {
  return (
    <span className={`
    ${problem.difficulty === 'Easy' ? 'text-[#46c6c2] bg-bgTransparent px-3 py-2 rounded-full' : 
    problem.difficulty === 'Medium' ? 'text-yellow-400 bg-bgTransparent px-3 py-2 rounded-full' :
    problem.difficulty === 'Hard' ? 'text-red-600 bg-bgTransparent px-3 py-2 rounded-full' : 'text-whiteText'}

 `}>{problem.difficulty}</span>
  )
}

export default DifficultyButtonUi