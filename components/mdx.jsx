import Link from 'next/link'
import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'

const CustomLink = (props) => {
  const href = props.href

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <Link {...props} />
  }

  return <Link target='_blank' rel='noopener noreferrer' {...props} />
}

function RoundedImage(props) {
  return <Image alt={props.alt} className='rounded-lg' {...props} />
}

function Callout(props) {
  return (
    <div className='flex bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 my-8'>
      <div className='flex items-center w-4 mr-4'>{props.emoji}</div>
      <div className='w-full callout'>{props.children}</div>
    </div>
  )
}

const components = {
  Image: RoundedImage,
  a: CustomLink,
  Callout,
}

export function Mdx({ code }) {
  const MDXContent = useMDXComponent(code)

  return (
    <article className='prose prose-quoteless prose-neutral dark:prose-invert'>
      <MDXContent components={components} />
    </article>
  )
}
