
import React from 'react'

function ECardSkeleton() {
    
  return (
    <div className="relative w-80 h-80 rounded-t-md bg-gray-800 z-10 shadow-sm animate-pulse">
  <div className="flex flex-col h-full">
    <div className="flex-1 bg-gray-200">
     
    </div>
    <div className="text h-24 px-4 py-2 flex flex-col justify-center items-start">
        <div className="h-4 bg-gray-200 w-3/4 rounded mt-2"></div>
        <div className="h-3 bg-gray-200 w-1/2 rounded mt-2"></div>
        <div className="h-4 bg-gray-200 w-1/4 rounded mt-2"></div>
    </div>
  </div>
</div>
  )
}

export default ECardSkeleton