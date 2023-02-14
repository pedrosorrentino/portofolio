'use client'
import { useState } from 'react'
import { FiraCode } from '../Fonts'

const ExperienceStep = () => {
  const [currentTab, setCurrentTab] = useState('1')
  const experience = [
    {
      id: 1,
      title: 'OrdepDev Freelance',
      tabTitle: 'OrdepDev',
      date: 'December 2014 - Present',
      summary:
        'As a freelance web developer, I have expertise in technologies such as HTML, CSS, JavaScript, React, and Next.js. I take pride in building and maintaining websites that are both visually appealing and user-friendly.',
    },
    {
      id: 2,
      title: 'NextGen Web Technologies',
      tabTitle: 'NextGen',
      date: 'January 2011 - December 2014',
      summary:
        'In this role, I had the chance to work on complex web applications using React, Node.js, and PostgreSQL. I was also involved in the development of RESTful APIs to support the front-end.',
    },
    {
      id: 3,
      title: 'Innovative Interactive Agency',
      tabTitle: 'Innovative',
      date: 'June 2004 - October 2010',
      summary:
        'At this company, I was a part of a team responsible for developing custom WordPress themes and plugins. I learned a great deal about WordPress development and had the opportunity to work on some exciting projects.',
    },
  ]

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id)
  }

  return (
    <div className='sm:flex gap-5 my-10'>
      <div className='flex mb-5 sm:flex-col justify-between'>
        {experience.map((tab, i) => (
          <button
            className={`text-slate-600 p-3 text-left font-semibold hover:bg-gray-200 focus:text-indigo-500 focus:bg-slate-100 active:text-indigo-500 active:bg-slate-100 transition duration-300 ${
              currentTab === `${tab.id}` ? 'border-l-2 border-indigo-500' : ''
            }`}
            key={i}
            id={tab.id}
            onClick={handleTabClick}
            style={{
              borderLeft:
                currentTab === `${tab.id}`
                  ? '2px solid #6366F1'
                  : '2px solid transparent',
              transition: 'border-left 0.8s ease-in-out',
            }}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className='content'>
        {experience.map((tab, i) => (
          <div key={i}>
            {currentTab === `${tab.id}` && (
              <div>
                <p className='text-xl font-bold text-slate-700'>{tab.title}</p>
                <p className={`${FiraCode.className} text-sm`}>{tab.date}</p>
                <p className='mt-3'>{tab.summary}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceStep
