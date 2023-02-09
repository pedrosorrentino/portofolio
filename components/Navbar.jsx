// 'use-client'
import Image from 'next/image'
import Link from 'next/link'
import { FiraCode } from './Fonts'

import { Github, Linkedin, Twitter } from './Icons'
const Navbar = () => {
  const socialIcon = [
    {
      name: 'Github',
      url: 'asdasdas',
      icon: <Github />,
    },
    {
      name: 'Twitter',
      url: 'asdasdas',
      icon: <Twitter />,
    },
    {
      name: 'Linkedin',
      url: 'asdasdas',
      icon: <Linkedin />,
    },
  ]

  return (
    <header className='flex justify-between items-center mx-5'>
      <div>
        <Link href='/'>
          <Image src={'/logo.png'} width={38} height={38} />
        </Link>
      </div>
      <nav className={FiraCode}>
        <ol className='flex gap-5'>
          {socialIcon.map((item) => (
            <li key={item.name}>
              <Link href={item.url}>{item.icon}</Link>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  )
}

export default Navbar

// const Navbar = () => {
//   const menuItems = [
//     {
//       before: '01',
//       name: 'About',
//       url: '/about',
//     },
//     {
//       before: '02',
//       name: 'Works',
//       url: '/works',
//     },
//     {
//       before: '03',
//       name: 'Contact',
//       url: '/contact',
//     },
//     // {
//     //   before: '04',
//     //   name: 'Blog',
//     //   url: '/blog',
//     // },
//   ]

//   return (
//     <header className='flex justify-between mx-5'>
//       <div>
//         <Link href='/'>LOGO</Link>
//       </div>
//       <nav className={fira_code.className}>
//         <ol className='flex gap-5'>
//           {menuItems.map((item) => (
//             <li key={item.name}>
//               <span className='text-xs text-[#43e2bd]'>{item.before}. </span>
//               <Link href={item.url}>{item.name}</Link>
//             </li>
//           ))}
//         </ol>
//       </nav>
//     </header>
//   )
// }
