import { component$ } from '@builder.io/qwik'

export interface TitleProps {
  tag: string
  name: string
  center: boolean
}

export const Title = component$<TitleProps>(({ name, tag, center }) => {
  return (
    <>
      {tag === 'h1' && (
        <h1
          class={`${
            center && 'text-center'
          } mb-1 pb-1 bg-gradient-to-r from-slate-500 via-blue-500 to-purple-600 dark:from-green-400 dark:via-blue-500 dark:to-purple-600 bg-clip-text font-extrabold text-transparent text-2xl sm:text-4xl`}
        >
          {name}
        </h1>
      )}
      {tag === 'h2' && (
        <h2
          class={`${
            center && 'text-center'
          } font-bold mb-2 bg-gradient-to-r from-slate-500 via-blue-500 to-purple-600 dark:from-green-400 dark:via-blue-500 dark:to-purple-600 bg-clip-text  text-transparent text-xl sm:text-2xl`}
        >
          {name}
        </h2>
      )}
      {tag === 'h3' && (
        <h3
          class={`${
            center && 'text-center'
          } mb-2 bg-gradient-to-r from-slate-500 via-blue-500 to-purple-600 dark:from-green-400 dark:via-blue-500 dark:to-purple-600 bg-clip-text font-semibold text-transparent text-lg sm:text-xl`}
        >
          {name}
        </h3>
      )}
    </>
  )
})
