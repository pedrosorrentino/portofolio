import TitleLayout from '../TitleLayout'

const ContactPage = () => {
  return (
    <section id='contact'>
      <TitleLayout title={'Get In Touch'} />
      <p className='leading-relaxed'>
        I would love to hear from you! If you're interested in working together
        or just want to say hello, feel free to reach out...
      </p>
      <div className='flex justify-center p-8'>
        <a
          href='mailto:elpelusashop@gmail.com'
          className='text-indigo-900 font-semibold border-2 border-indigo-500 rounded-xl text-lg p-3 hover:border-indigo-400 hover:bg-indigo-100 hover:transform hover:-translate-y-2 duration-300'
        >
          Say Hello
        </a>
      </div>
    </section>
  )
}

export default ContactPage
