import { component$ } from "@builder.io/qwik"
import { Title } from "../Titles"
import { works } from "~/db/config"

export const Works = component$(() => {
  return (
    <article class="lg:w-[800px] md:mx-10 animate__animated animate__fadeIn">
      <Title tag="h1" name="Where I’ve Worked" center={false} />
      <p>
        I have had the opportunity to work with a variety of clients and
        companies in the tech industry, honing my skills and expanding my
        knowledge. Some of my previous experience includes:
      </p>
      {works.map((i) => (
        <div key={i.id} class="mt-10 ">
          <div class="sm:flex justify-between items-center mb-4 ">
            <Title tag="h2" name={i.company} center={false} />
            <span class="font-mono text-sm text-slate-100 bg-slate-700 dark:bg-indigo-600 dark:text-slate-100 px-2 rounded-xl">
              {i.date}
            </span>
          </div>

          <p>{i.role}</p>
          <div class="mx-auto w-1/5 border border-slate-300 mt-8"></div>
        </div>
      ))}
      <p class="mt-10 border-l-2 border-indigo-500 dark:border-indigo-300 pl-2">
        Each experience has played a significant role in shaping my expertise,
        fostering adaptability, and nurturing a passion for continuous learning.
        I am eager to bring this wealth of knowledge and a track record of
        success to a new opportunity where I can make a meaningful impact.
      </p>
    </article>
  )
})
