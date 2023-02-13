import CardWorks from '../CardWorks'
import TitleLayout from '../TitleLayout'

const WorksPage = () => {
  return (
    <section id='works' className='mt-10'>
      <TitleLayout title={'Some Things I’ve Built'} />
      <CardWorks />
    </section>
  )
}

export default WorksPage
