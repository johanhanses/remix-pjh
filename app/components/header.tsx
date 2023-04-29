import { RxMoon, RxSun } from 'react-icons/rx'
import { useTheme } from './theme-provider'

export const Header = () => {
  const [theme, setTheme] = useTheme()

  return (
    <header className="flex justify-end h-12 md:h-20">
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200"
      >
        {theme === 'light' ? <RxSun className="w-5 h-5" /> : <RxMoon className="w-5 h-5" />}
      </button>
    </header>
  )
}
