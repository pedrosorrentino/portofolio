import Image from 'next/image'
import Link from 'next/link'
import { FiraCode } from './Fonts'
import { Github, Linkedin, Twitter } from './Icons'

const Navbar = () => {
  const socialIcon = [
    {
      name: 'Github',
      url: 'https://github.com/pedrosorrentino',
      icon: <Github />,
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/pedro-sorrentino',
      icon: <Linkedin />,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/PedroSorrentin0',
      icon: <Twitter />,
    },
  ]

  return (
    <header className='flex justify-between items-center mx-5'>
      <div>
        <Link href='/'>
          <Image
            src={'/logo.png'}
            width={40}
            height={49}
            alt='Pedro Sorrentino'
          />
        </Link>
      </div>
      <nav className={FiraCode}>
        <ol className='flex items-center gap-5'>
          {/* <li
            className={`text-sm bg-indigo-600 px-2 py-1 text-white rounded-md hover:bg-[#02F3A0] hover:text-black transition duration-300 ${FiraCode.className}`}
          >
            <Link href={'/blog'}>Blog</Link>
          </li> */}
          {socialIcon.map((item) => (
            <li
              key={item.name}
              className='hover:scale-110 hover:-translate-y-1 transition duration-300 ease-in-out'
            >
              <Link href={item.url}>{item.icon}</Link>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  )
}

export default Navbar
