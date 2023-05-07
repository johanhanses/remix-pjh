import type { ActionArgs } from '@remix-run/node'
import { Form, useActionData } from '@remix-run/react'
import { createUserSession, login } from '~/lib/session.server'

type FormErrors = {
  fieldErrors: {
    username: string
    password: string
  }
  authError: string
}

const validateForm = (username: string, password: string) => {
  const fieldErrors = { username: '', password: '' }
  if (!password.length) fieldErrors.password = 'Password is required.'
  if (!username.length) fieldErrors.username = 'Username is required.'
  return fieldErrors
}

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData()
  const password = form.get('password') as string
  const username = form.get('username') as string
  const fieldErrors = validateForm(username, password)

  if (fieldErrors.password || fieldErrors.username) return { fieldErrors, authError: '' }

  const user = await login({ username, password })
  if (!user) return { fieldErrors, authError: 'Invalid username or password' }

  return createUserSession(user.id, '/')
}

export default function Login() {
  const actionData = useActionData<typeof action>()

  return (
    <div className="">
      <div>
        <h1>Login</h1>
        <Form method="POST">
          <div>
            <label>
              Username
              <input
                type="text"
                name="username"
                aria-invalid={!!(actionData as FormErrors)?.fieldErrors?.username}
                aria-errormessage={(actionData as FormErrors)?.fieldErrors?.username}
                className="text-neutral-900 p-1"
              />
            </label>
            {(actionData as FormErrors)?.fieldErrors?.username && (
              <p className="text-red-500">{(actionData as FormErrors)?.fieldErrors?.username}</p>
            )}
          </div>
          <div>
            <label>
              Password
              <input
                name="password"
                type="password"
                aria-invalid={!!(actionData as FormErrors)?.fieldErrors?.password}
                aria-errormessage={(actionData as FormErrors)?.fieldErrors?.password}
                className="text-neutral-900 p-1"
              />
            </label>
            {(actionData as FormErrors)?.fieldErrors?.password && (
              <p className="text-red-500">{(actionData as FormErrors)?.fieldErrors?.password}</p>
            )}
          </div>
          {(actionData as FormErrors)?.authError && (
            <p className="text-red-500">{(actionData as FormErrors)?.authError}</p>
          )}
          <button type="submit" className="">
            Submit
          </button>
        </Form>
      </div>
    </div>
  )
}
