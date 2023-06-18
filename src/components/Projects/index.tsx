import { component$ } from "@builder.io/qwik"
import { Title } from "../Titles"
import { CardProject } from "./Card"

export const Projects = component$(() => {
  return (
    <article class="lg:w-[800px] md:mx-10 animate__animated animate__fadeIn ">
      <Title tag="h1" name="Things I have built" center={false} />
      <p>
        Explore my creative portfolio, where innovation and craftsmanship
        converge. From captivating designs to functional websites, each project
        showcases my expertise and passion.
      </p>
      <CardProject />
    </article>
  )
})
