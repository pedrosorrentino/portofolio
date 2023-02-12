import HomePage from '@/components/pages/HomePage'
import AboutPage from '@/components/pages/AboutPage'
import ExperiencePage from '@/components/pages/ExperiencePage'
import WorkPage from '@/components/pages/WorkPage'
import ContactPage from '@/components/pages/ContactPage'
import { FadeInSection } from '@/components/Animations'

export const metadata = {
  title: 'Full-Stack Developer Crafting Outstanding Digital Experiences',
  description:
    'Full-stack developer with a passion for crafting exceptional digital experiences. With a blend of development and design skills, he creates user-centered solutions that are unique and impactful. Discover more about Pedro approach to fullstack development.',
  openGraph: {
    title:
      'Pedro Sorrentino - Full-Stack Developer Crafting Outstanding Digital Experiences',
    description:
      'Full-stack developer driven by a desire to craft outstanding digital experiences.',
    url: 'https://miweb.com',
    siteName:
      'Pedro Sorrentino - Full-Stack Developer Crafting Outstanding Digital Experiences',
    images: [
      {
        url: 'https://miweb.com/og.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
}

export default async function Home() {
  return (
    <>
      <FadeInSection delay={0}>
        <HomePage />
      </FadeInSection>
      <FadeInSection delay={0.2}>
        <AboutPage />
      </FadeInSection>
      <FadeInSection delay={0.4}>
        <ExperiencePage />
      </FadeInSection>
      <FadeInSection delay={0.6}>
        <WorkPage />
      </FadeInSection>
      <FadeInSection delay={0.8}>
        <ContactPage />
      </FadeInSection>
    </>
  )
}
