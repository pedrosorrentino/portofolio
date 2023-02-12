import Image from 'next/image'
import { FiraCode } from '../Fonts'

const HomePage = () => {
  return (
    <section id='home' className='mx-auto'>
      <div className='flex items-center gap-10'>
        <div>
          <h1 className='text-5xl font-bold '>Pedro Sorrentino</h1>
          <p className={`text-md font-semibold ${FiraCode.className}`}>
            Crafting{' '}
            <span className='bg-lime-500 text-white px-2'>
              digital solutions
            </span>{' '}
            to bring ideas to life.
          </p>
        </div>
        <div>
          <Image
            className='h-36 w-36 rounded-full bg-black my-5 hover:scale-110 transition duration-300 ease-in-out'
            src={'/images/Me.png'}
            width={200}
            height={200}
            title='Pedro Sorrentino'
            alt='Fullstack Developer'
          />
        </div>
      </div>
    </section>
  )
}

export default HomePage
