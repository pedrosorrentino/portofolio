import { RobotoSlab } from '@/components/Fonts'
import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: {
    default: 'Pedro Sorrentino',
    template: '%s | Pedro Sorrentino',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Pedro Sorrentino',
    card: 'twitter card',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
  verification: {
    google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    yandex: '14d2e73487fa6c71',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={RobotoSlab.className}>
      <body className='md:w-[700px] mx-auto  my-10 '>
        <Navbar />
        <main className='mt-10 mx-5 md:mx-0'>{children}</main>
      </body>
    </html>
  )
}
