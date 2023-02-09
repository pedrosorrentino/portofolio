import Image from 'next/image'

const HomePage = () => {
  return (
    <section id='home'>
      <h1 className='text-4xl mb-5 font-bold'>Pedro Sorrentino</h1>
      <p className='leading-relaxed'>
        Hi, I'm Pedro! I'm a full-stack developer driven by a desire to craft
        outstanding digital experiences. My skillset encompasses both
        development and design, allowing me to create user-focused solutions
        that stand out from the crowd.
      </p>

      <div className='flex justify-center items-center mt-10'>
        <Image
          className='h-36 w-36 rounded-full bg-black my-5 hover:scale-110 transition duration-300 ease-in-out'
          src={'/images/Me.png'}
          width={200}
          height={200}
          title='Pedro Sorrentino'
          alt='Fullstack Developer'
        />
        <div className='mx-5 leading-relaxed'>
          <p>6,665 tweets all time</p>
          <p>5,087 stars on this repo</p>
          <p>1,569,978 blog views all time</p>
        </div>
      </div>
    </section>
  )
}

export default HomePage
