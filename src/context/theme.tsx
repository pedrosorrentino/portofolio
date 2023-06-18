import {
  createContextId,
  useContext,
  useContextProvider,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik"

interface Theme {
  theme: string
}

export const ThemeContext = createContextId<Theme>("theme")

export const useThemeProvider = () => {
  const store = useStore<{ theme: string }>({
    theme: "",
  })

  useContextProvider(ThemeContext, store)

  useVisibleTask$(({ track }) => {
    const change = track(() => store.theme)
    if (!store.theme) {
      store.theme = localStorage.theme || "light"
    }
    if (!change) return
    if (document.documentElement.className !== change) {
      document.documentElement.className = change
    }
    localStorage.theme = change
  })
}

export const useTheme = () => useContext(ThemeContext)
