import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { FiraCode } from '@/components/Fonts'
import { Mdx } from '@/components/mdx'
import Link from 'next/link'

export async function generateStaticParams() {
  return allPosts.map((item) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }) {
  const post = allPosts.find((post) => post.slug === params.slug)
  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
  } = post
  const ogImage = image
    ? image
    : `${process.env.NEXT_PUBLIC_DOMAIN}/api/og?title=${title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: ogImage,
    },
  }
}

export default async function BlogDetail({ params }) {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article>
      <Link href={`${process.env.NEXT_PUBLIC_DOMAIN}/blog`}>
        <p className='mb-10 hover:text-indigo-400'>↩ Return to blog</p>
      </Link>

      <h1 className={`font-bold text-3xl ${FiraCode.className}`}>
        {post.title}
      </h1>
      <div className='grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm'>
        <div className='bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter'>
          {post.publishedAt}
        </div>
      </div>

      <Mdx code={post.body.code} />
    </article>
  )
}
