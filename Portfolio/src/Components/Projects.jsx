import React from 'react'
import Projectsdata from './Projectsdata'
import thinkverse from '../assets/thinkverse.png'
import budgetbliss from '../assets/budgetbliss.png'
import Pathpilot from '../assets/PathPilot.png'

function Projects() {
  return (
    <div className='text-[#ffffff] p-6 flex flex-col gap-6'>
        <p className='text-4xl font-semibold'>Projects</p>
        <Projectsdata source={thinkverse} title={"ThinkVerse"} description={" A feature-rich blogging platform designed for seamless content creation, engagement, and discovery."} features={"Secure Authentication , Blog Management,User Engagement,Search & Sort,Pagination,Responsive UI"}/>
        <Projectsdata source={budgetbliss} title={"BudgetBliss"} description={" A web application for travelers to explore vacation destinations and discover budget-friendly options."} features={"Secure Authentication ,User Engagement,Search & Sort,Pagination,Responsive UI"} reverse={true}/>
        <Projectsdata source={Pathpilot} title={"Path-Pilot"} description={" Path-Pilot is an intelligent career guidance platform that helps users explore career paths, offering personalized suggestions, learning resources, and actionable roadmaps based on their skills and interests."} features={"Personalized Recommendations , Career Roadmaps,Skill Assessment,User Authentication,Resource Library,Progress Tracking,Responsive UI"}/>
    </div>
  )
}

export default Projects