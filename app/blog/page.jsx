import { FadeIn, FadeInSection } from '@/components/Animations'
import { allPosts } from 'contentlayer/generated'
import CardTemplate from './card'

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
}

export default async function BlogPage() {
  return (
    <section className='mt-10'>
      <FadeIn>
        <h1 className='font-bold text-3xl'>Don't miss my latest articles</h1>
        <p className='leading-relaxed'>
          Explore my latest articles and gain insights into the world of
          full-stack development. From practical tips to thought-provoking
          discussions, there's something for everyone.
        </p>
      </FadeIn>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 '>
        {allPosts
          .sort((a, b) => {
            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
              return -1
            }
            return 1
          })
          .map((item, i) => {
            return (
              <FadeInSection delay={i * 0.2}>
                <div key={item.title}>
                  <CardTemplate {...item} />
                </div>
              </FadeInSection>
            )
          })}
      </div>
    </section>
  )
}
