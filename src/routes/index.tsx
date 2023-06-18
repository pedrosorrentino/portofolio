import { component$, useSignal } from "@builder.io/qwik"
import { Link, type DocumentHead } from "@builder.io/qwik-city"
import { About, MoonIcon, Projects, SunIcon, Works } from "~/components"
import { Image } from "@unpic/qwik"
import "animate.css"
import { useTheme } from "~/context"
import { menuTab, socialLink } from "~/db/config"
import { getDateToString } from "~/Utils"

export default component$(() => {
  const theme = useTheme()
  const openTab = useSignal(1)
  const darkMode = useSignal(false)

  return (
    <>
      <div class="md:flex items-center justify-center my-10 mx-5 ">
        <div class="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 rounded-lg pb-2 px-2 tracking-wider border border-slate-300 dark:border-slate-800 shadow-xl">
          <div id="Header" class="flex justify-between items-center -mb-5">
            <div class="flex gap-1">
              <span class="text-4xl text-red-500">•</span>
              <span class="text-4xl text-yellow-500">•</span>
              <span class="text-4xl text-blue-500">•</span>
            </div>
            <span class="text-gray-800 dark:text-gray-500 text-sm font-mono">
              dev - pedro_sorrentino
            </span>

            <div class="mt-2">
              <button
                class={{
                  "text-yellow-400": darkMode.value,
                  "text-slate-400": !darkMode.value,
                }}
                onClick$={() => {
                  darkMode.value = !darkMode.value
                  darkMode.value
                    ? (theme.theme = "dark")
                    : (theme.theme = "light")
                }}
              >
                {darkMode.value ? <SunIcon /> : <MoonIcon />}
              </button>
            </div>
          </div>
          <br></br>
          <div id="Content">
            <nav
              aria-label="Tabs"
              class="flex text-sm bg-neutral-100 dark:bg-neutral-950 border-b border-slate-300 dark:border-slate-800 shadow-sm dark:shadow-black"
            >
              {menuTab.map((i) => (
                <button
                  key={i.id}
                  class={{
                    "font-mono text-xs sm:text-base flex gap-2 flex-1 justify-center items-center py-2  cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-900 dark:hover:text-indigo-400 text-slate-700 dark:text-indigo-400 transition-colors hover:border-t hover:border-slate-700 dark:hover:border-indigo-400":
                      true,
                    " border-t border-slate-300 dark:border-slate-800":
                      openTab.value !== i.id,
                    "dark:text-indigo-400 bg-slate-300 dark:bg-slate-900 border-t border-current":
                      openTab.value === i.id,
                  }}
                  onClick$={() => (openTab.value = i.id)}
                >
                  <Image
                    src="/icons/typescript-icon.png"
                    width={18}
                    height={18}
                    title="Typescript"
                    alt="Typescript"
                  />{" "}
                  {i.name}
                </button>
              ))}
            </nav>
            <div class="py-10 m-3 text-slate-800 dark:text-white">
              {openTab.value === 1 && <About />}
              {openTab.value === 2 && <Works />}
              {openTab.value === 3 && <Projects />}
            </div>
          </div>

          <div
            id="Footer"
            class="flex justify-between items-center border-t border-slate-300 dark:border-slate-800 py-2"
          >
            <div class="text-gray-500 text-sm flex gap-3">
              {socialLink.map((i) => (
                <Link key={i.id} href={i.url} target="_blank" title={i.name}>
                  <Image
                    class="transition-transform duration-300 transform-gpu hover:-translate-y-1"
                    src={i.icon}
                    width={20}
                    height={20}
                    title={i.name}
                    alt={i.name}
                  />
                </Link>
              ))}
            </div>
            <div class="text-gray-500 text-xs font-mono">
              Last update {getDateToString()}
            </div>
          </div>
        </div>
      </div>
    </>
  )
})

export const head: DocumentHead = {
  title: "Pedro Sorrentino | Building the Future with TypeScript",
  meta: [
    {
      name: "description",
      content:
        "Welcome to my portfolio! I'm Pedro Sorrentino, a skilled TypeScript developer passionate about building robust and scalable applications. Explore my projects and witness the power of type safety and modern JavaScript concepts in action.",
    },
    {
      name: "keywords",
      content:
        "TypeScript, JavaScript, Programming, Web Development, Software Development, Front-end Development, Back-end Development, Full Stack Development, Type Safety, Object-Oriented Programming, Functional Programming, JavaScript Frameworks, Node.js, React, Angular, Vue.js, Express.js, RESTful APIs, Database Integration, Project Showcase, Code Samples, Portfolio, Developer, Software Engineer, TypeScript Developer, Web Developer, Software Projects, Scalable Applications, Responsive Design",
    },
    {
      name: "robots",
      content: "index,follow",
    },
    {
      name: "author",
      content: "Pedro Sorrentino",
    },
    {
      name: "publisher",
      content: "Pedro Sorrentino",
    },
  ],
}
