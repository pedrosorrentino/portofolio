import { FiraCode } from '../Fonts'
import TitleLayout from '../TitleLayout'

const AboutPage = () => {
  return (
    <section id='about' className='mt-10'>
      <TitleLayout title={'About Me'} />
      <p className='leading-relaxed'>
        Hello! My name is Pedro, i am a web developer with a burning passion for
        creating amazing things in the digital world. Born in Italy, I've been
        exploring the secrets and wonders of technology ever since.
      </p>
      <p className='mt-2 leading-relaxed'>
        My skills are impressive, especially in technologies such as HTML, CSS,
        Tailwind, JavaScript, TypeScript, MongoDB, MySQL, PostgreSQL, React,
        Next.js, Node.js, and WordPress. I'm a quick learner and always up for
        new challenges.
      </p>
      <p className='mt-2 leading-relaxed'>
        Aside from being a great developer, I also have an exciting life outside
        of the keyboard. I love reading, listening to music, traveling the
        world, and being surrounded by animals.
      </p>
      <p className='mt-2 leading-relaxed'>
        If you're looking for a talented and passionate developer, Let's talk
        about how I can bring my skills to your team!
      </p>
      <div className='bg-gray-100 p-4 my-10 rounded-lg'>
        <p className='mt-2 leading-relaxed font-bold text-lg'>
          Here are a few technologies I’ve been working with recently
        </p>
        <div className={`sm:flex gap-10 mt-5 ${FiraCode.className} `}>
          <ul className='tech-list'>
            <li>Javascript</li>
            <li>React</li>
            <li>Next.js</li>
          </ul>
          <ul className='tech-list'>
            <li>MongoDb</li>
            <li>Tailwind</li>
            <li>Node</li>
          </ul>
          <ul className='tech-list'>
            <li>Photoshop</li>
            <li>Figma</li>
            <li>Notion</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
