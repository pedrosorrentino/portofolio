import ExperienceStep from './ExperienceStep'
import TitleLayout from '../TitleLayout'

const ExperiencePage = () => {
  return (
    <section id='experience' className='mt-10'>
      <TitleLayout title={'Where I’ve Worked'} />

      <p className='leading-relaxed'>
        I have had the opportunity to work with a variety of clients and
        companies in the tech industry, honing my skills and expanding my
        knowledge. Some of my previous experience includes:
      </p>
      <ExperienceStep />
    </section>
  )
}

export default ExperiencePage
