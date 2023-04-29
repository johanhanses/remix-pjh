import { useTheme } from './theme-provider'

export const Header = () => {
  const [theme, setTheme] = useTheme()

  return (
    <header>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change Theme</button>
    </header>
  )
}
