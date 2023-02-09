import { shortify } from '@/lib/helpers'
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

export default async function handler(req) {
  const { searchParams } = req.nextUrl
  const postTitle = searchParams.get('title')

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundImage: `url(${process.env.NEXT_PUBLIC_DOMAIN}/og-bg.png)`,
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: 'flex',
            fontSize: 120,
            letterSpacing: '-0.05em',
            color: 'white',
            lineHeight: '320px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {shortify(postTitle, 25)}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
    }
  )
}
