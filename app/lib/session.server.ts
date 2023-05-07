import { createCookieSessionStorage, redirect } from '@remix-run/node'
import bcrypt from 'bcryptjs'
import { prisma } from './prisma.server'

type LoginForm = {
  password: string
  username: string
}

export async function login({ password, username }: LoginForm) {
  console.log('login', username, password)

  const user = await prisma.user.findUnique({ where: { username } })
  console.log(user)

  if (!user) return null

  const isCorrectPassword = await bcrypt.compare(password, user.passwordHash)
  if (!isCorrectPassword) return null

  return { id: user.id, username }
}

const storage = createCookieSessionStorage({
  cookie: {
    name: 'PJH__session',
    secure: process.env.NODE_ENV === 'production',
    secrets: [process.env.SESSION_SECRET as string],
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30, // 30 days
    httpOnly: true,
  },
})

export async function createUserSession(userId: string, redirectTo: string) {
  const session = await storage.getSession()
  session.set('userId', userId)

  return redirect(redirectTo, { headers: { 'Set-Cookie': await storage.commitSession(session) } })
}
