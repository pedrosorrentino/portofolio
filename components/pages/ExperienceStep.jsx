const ExperienceStep = () => {
  const experience = [
    {
      id: 0,
      title: 'OrdepDev Freelance',
      date: 'December 2014 - Present',
      summary:
        'As a freelance junior web developer, I have expertise in technologies such as HTML, CSS, JavaScript, React, and Next.js. I take pride in building and maintaining websites that are both visually appealing and user-friendly. I work closely with design teams to ensure a smooth and seamless user experience for all clients.',
    },
    {
      id: 1,
      title: 'NextGen Web Technologies',
      date: 'January 2011 - December 2014',
      summary:
        'In this role, I had the chance to work on complex web applications using React, Node.js, and PostgreSQL. I was also involved in the development of RESTful APIs to support the front-end.',
    },
    {
      id: 2,
      title: 'Innovative Interactive Agency',
      date: 'June 2004 - October 2010',
      summary:
        'At this company, I was a part of a team responsible for developing custom WordPress themes and plugins. I learned a great deal about WordPress development and had the opportunity to work on some exciting projects.',
    },
  ]
  return (
    <ol className='border-l-2 border-blue-600 mt-10'>
      {experience.map((item) => {
        return (
          <li key={item.id}>
            <div className='flex flex-start items-center'>
              <div className='bg-blue-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2'></div>
              <h3 className='text-gray-800 font-semibold text-xl -mt-2'>
                {item.title}
              </h3>
            </div>
            <div className='ml-6 mb-6 pb-6'>
              <p className='text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm'>
                {item.date}
              </p>
              <p className='text-gray-700 mt-2 mb-4 leading-relaxed'>
                {item.summary}
              </p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}

export default ExperienceStep
