import type { Dispatch, SetStateAction } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'
type ThemeContextType = [Theme, Dispatch<SetStateAction<Theme>>]

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark')

  // For now this will cause a flash of dark theme on first load is users prefered theme is light
  useEffect(() => {
    const preferedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
    setTheme(preferedTheme)
  }, [])

  return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context === undefined) throw new Error('useTheme must be used within a ThemeProvider')
  return context
}
