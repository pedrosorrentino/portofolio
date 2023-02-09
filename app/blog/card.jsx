import { FiraCode } from '@/components/Fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardTemplate = (props) => {
  const { title, publishedAt, summary, image } = props

  return (
    <article className='rounded-xl bg-white p-3 shadow-lg hover:shadow-xl'>
      <Link href={`blog/${props.slug}`}>
        <div className='relative flex items-end overflow-hidden rounded-xl'>
          <Image
            src={
              image !== undefined
                ? process.env.NEXT_PUBLIC_DOMAIN + image
                : `${process.env.NEXT_PUBLIC_DOMAIN}/og.jpg`
            }
            width={500}
            height={500}
            alt={title}
          />
        </div>

        <div className='mt-1 p-2'>
          <h2 className={`text-slate-700 font-semibold ${FiraCode.className}`}>
            {title}
          </h2>
          <p className='text-slate-400 mt-1 text-sm'>{summary}</p>
        </div>
      </Link>
    </article>
  )
}

export default CardTemplate
