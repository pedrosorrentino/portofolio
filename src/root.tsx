import { component$ } from "@builder.io/qwik"
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city"
import { RouterHead } from "./components/router-head/router-head"

import "./global.css"
import { useThemeProvider } from "./context"

export default component$(() => {
  useThemeProvider()
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <script
          dangerouslySetInnerHTML={`
          if (window.matchMedia("(prefers-color-scheme: dark)").matches &&
            localStorage.theme !== 'light') {
            localStorage.theme = 'dark';
          }
        
          document.documentElement.className = localStorage.theme || 'dark';
        `}
        />
      </head>
      <body lang="en" class="bg-white dark:bg-[#010409]">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  )
})
