import React from 'react'
const DifficultyButtonUi = React.lazy(()=>import("../../../Components/DifficultyButtonUi"))
function TableView({filteredProblems,navigateToDetails}) {
  return (
    <div className="overflow-x-auto">
  <table className="table bg-gray-700 ">
    {/* head */}
    <thead>
      <tr className=' text-mainColor'>
        <th></th>
        <th className='text-md md:text-lg  capitalize'>title</th>
        <th className='text-md md:text-lg  capitalize'>type</th>
        <th className='text-md md:text-lg  capitalize'>difficulty</th>
      </tr>
    </thead>
    <tbody>
    {
      filteredProblems && filteredProblems.map((problem,index)=>(
        <tr key={problem.id} className='hover:cursor-pointer hover:bg-mainColor  transition-all ease-in' onClick={()=>navigateToDetails(problem.id)}>
          <th className='text-whiteText'>{index+1}</th>
          <td className='text-whiteText py-5'>{problem.challenge}</td>
          <td className='text-whiteText py-5'>{problem.type}</td>
          <td className={`py-5 
          ${problem.difficulty.trim() === 'Easy' ? 'text-green-500' : 
          problem.difficulty === 'Medium' ? 'text-yellow-400' :
          problem.difficulty === 'Hard' ? 'text-red-600' : 'text-whiteText'}
          `}>
         <DifficultyButtonUi problem={problem}/>
          </td>
      </tr>
      ))
    }
      
   

    </tbody>
  </table>
</div>
  )
}

export default TableView