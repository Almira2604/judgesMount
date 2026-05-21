import React from 'react'
import Onboarding from '../Components/JoinUsComponent/Onboarding'
import Departments from '../Components/JoinUsComponent/Departments'
import SignupForm from '../Components/JoinUsComponent/SignupForm'

function JoinUs() {
  return (
    <div className="w-full text-white min-h-screen pt-36 pb-24 px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto space-y-24">
        
       
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Enlist into the <span className="text-yellow-400">Rankings</span>
          </h1>
        
        </div>

       
        <Onboarding />

       
        <Departments />

        <SignupForm />

      </div>
    </div>
  )
}

export default JoinUs