import { Link } from '@remix-run/react'
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai'

const links = [
  {
    url: 'https://github.com/johanhanses',
    title: 'GitHub',
    icon: <AiFillGithub className="w-5 h-5" />,
  },
  {
    url: 'https://www.linkedin.com/in/johanhanses/',
    title: 'LinkedIn',
    icon: <AiFillLinkedin className="w-5 h-5" />,
  },
  {
    url: 'mailto:johanhanses@gmail.com',
    title: 'Email',
    icon: <AiFillMail className="w-5 h-5" />,
  },
]

export const Contact = () => (
  <div className="flex items-center gap-6 justify-end">
    {links.map((link) => (
      <Link
        key={link.url}
        to={link.url}
        title={link.title}
        target="_blank"
        rel="noreferrer"
        className="hover:text-gray-300 transition-colors duration-200"
      >
        {link.icon}
      </Link>
    ))}
  </div>
)
