import Image from 'next/image'
import projects from '../lib/bdworks.json'
import { FiraCode } from './Fonts'

const CardWorks = () => {
  return (
    <ul className='grid sm:grid-cols-2 gap-10 mt-10'>
      {projects.map((item) => {
        return (
          <li
            key={item.id}
            className='grid items-center rounded-xl shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300'
          >
            <a href={item.webpage} target='_blank'>
              <Image
                src={process.env.NEXT_PUBLIC_DOMAIN + '/project/' + item.image}
                width={500}
                height={500}
                alt={item.title}
                title={item.title}
                className='rounded-t-xl'
              />

              <div className='p-2 ml-2'>
                <h3 className='text-xl font-bold text-indigo-500 hover:text-indigo-900'>
                  {item.title}
                </h3>
                <p className={`${FiraCode.className} text-sm`}>
                  {item.techstack}
                </p>
              </div>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default CardWorks
