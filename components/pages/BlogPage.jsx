import CardTemplate from '@/app/blog/card'
import { allPosts } from 'contentlayer/generated'
import TitleLayout from '../TitleLayout'

const BlogPage = () => {
  return (
    <section id='blog' className='mt-10'>
      <TitleLayout title={'Check my latest articles'} />
      <p className='leading-relaxed'>
        Explore my latest articles and gain insights into the world of
        full-stack development. From practical tips to thought-provoking
        discussions, there's something for everyone.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
        {allPosts.map((item) => {
          return (
            <div key={item.title}>
              <CardTemplate {...item} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default BlogPage
