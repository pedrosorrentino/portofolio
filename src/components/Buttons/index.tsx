import { component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"

export interface ButtonProps {
  name: string
  url: string
}

export const Button = component$<ButtonProps>(({ name, url }) => {
  return (
    <Link
      title={name}
      href={url}
      class="relative inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-slate-600 dark:text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-slate-200 group"
    >
      <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-slate-600 dark:bg-indigo-600 group-hover:h-full"></span>
      <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
        <svg
          class="w-5 h-5 text-slate-800 dark:text-indigo-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
        <svg
          class="w-5 h-5 text-slate-100"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
        {name}
      </span>
    </Link>
  )
})

export const ButtonContact = component$<ButtonProps>(({ name, url }) => {
  return (
    <a
      title={name}
      href={url}
      class="relative inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-slate-600 dark:text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-slate-200 group"
    >
      <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-slate-600 dark:bg-indigo-600 group-hover:h-full"></span>
      <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
        <svg
          class="w-5 h-5 text-slate-800 dark:text-indigo-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
        <svg
          class="w-5 h-5 text-slate-100"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
        {name}
      </span>
    </a>
  )
})
