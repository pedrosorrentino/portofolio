import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { projects } from '~/db/config'
import { Title } from '../Titles'

export const CardProject = component$(() => {
  return (
    <div class='grid sm:grid-cols-2 gap-8 mt-20'>
      {projects.map((i) => {
        return (
          <Link
            href={i.url}
            target='_blank'
            key={i.id}
            class='bg-white dark:bg-slate-900 dark:hover:bg-slate-800 p-2 sm:p-3 overflow-hidden rounded-md shadow transition hover:shadow-xl dark:border dark:border-slate-600 '
          >
            <Title tag='h2' name={i.name} center={false} />

            <div class='flex flex-wrap gap-2'>
              {i.tech.map((i) => (
                <p
                  key={i}
                  class='font-mono text-sm/relaxed bg-green-300 dark:bg-indigo-500 rounded-full px-2 '
                >
                  {i}
                </p>
              ))}
            </div>
          </Link>
        )
      })}
    </div>
  )
})
