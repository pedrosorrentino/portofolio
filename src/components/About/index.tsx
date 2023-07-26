import { component$ } from '@builder.io/qwik'
import { Image } from '@unpic/qwik'
import { frameworks } from '~/db/config'
import { Button, ButtonContact } from '../Buttons'
import { Title } from '../Titles'

export const About = component$(() => {
  return (
    <article class='lg:w-[800px] animate__animated animate__fadeIn md:mx-10'>
      <div class='flex justify-center items-center gap-5 sm:gap-10 my-10'>
        <div>
          <Title tag='h1' name='Pedro Sorrentino' center={false} />
          <p class='text-sm sm:text-lg mt-2 font-mono'>
            Crafting{' '}
            <span class='bg-slate-700 dark:bg-indigo-500 text-white p-1 rounded-lg truncate leading-relaxed'>
              digital solutions
            </span>{' '}
            to bring ideas to life.
          </p>
        </div>
        <Image
          class='rounded-full bg-slate-800 dark:bg-slate-300 w-24 sm:w-auto'
          src='/assets/pedrosorrentino.png'
          width={120}
          height={120}
          title='Pedro Sorrentino'
          alt='TypeScript developer'
        />
      </div>
      <div class='my-20'>
        <p>
          Hello! With over{' '}
          <span class='font-bold'>
            10 years of web development experience, specialize in JavaScript and
            TypeScript
          </span>
          . I have a strong background in creating web applications using React,
          Next.js, Qwik, and Node.js. My passion lies in crafting innovative and
          seamless digital experiences. Throughout my career, I have
          consistently delivered high-quality solutions, exceeding client
          expectations. If you are looking for a dedicated professional who is
          ready to take on new challenges, I am here to collaborate with you.
          Let's discuss how I can contribute to the success of your team and
          projects!
        </p>
      </div>
      <div class='flex justify-center gap-10'>
        <Button name='Curriculum' url='curriculum-pedro-sorrentino.pdf' />
        <ButtonContact name='Contact' url='mailto:elpelusashop@gmail.com' />
      </div>
      <div class='p-4 rounded-lg my-10'>
        <Title
          tag='h2'
          name='Here are a few technologies I’ve been working with recently'
          center={true}
        />

        <div class='flex flex-wrap justify-center items-center gap-5 mt-4'>
          {frameworks.map((i) => (
            <Image
              class='transition-transform duration-300 transform-gpu hover:-translate-y-2 '
              key={i.id}
              src={i.icon}
              width={60}
              height={60}
              title={i.name}
              alt={i.name}
            />
          ))}
        </div>
      </div>
    </article>
  )
})
