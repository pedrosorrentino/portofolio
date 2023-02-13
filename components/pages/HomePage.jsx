import Image from 'next/image'
import { FiraCode } from '../Fonts'

const HomePage = () => {
  return (
    <section id='home' className='mx-auto'>
      <div className='flex items-center gap-10'>
        <div>
          <h1 className='text-2xl sm:text-5xl font-bold '>Pedro Sorrentino</h1>
          <p className={`text-sm sm:text-xl  ${FiraCode.className}`}>
            Crafting{' '}
            <span className='bg-[#02F3A0] px-2 rounded-md font-semibold'>
              digital solutions
            </span>{' '}
            to bring ideas to life.
          </p>
        </div>
        <div>
          <Image
            className='rounded-full bg-black hover:scale-110 transition duration-300 ease-in-out'
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
