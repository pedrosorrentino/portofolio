import { Fira_Code, Poppins } from '@next/font/google'

export const FiraCode = Fira_Code({
  subsets: ['latin'],

  display: 'swap',
})

export const PoppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
})
