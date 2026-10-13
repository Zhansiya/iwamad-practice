import {
  useState,
  type ChangeEvent,
  type FocusEvent,
  type SyntheticEvent,
} from 'react'

import {
  validateRegistration,
  type RegistrationValues,
} from '../lib/validateRegistration'

import Button from '../components/ui/Button'
import TextField from '../components/ui/TextField'

export default function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  })

  const [touched, setTouched] = useState<
    Partial<Record<keyof RegistrationValues, boolean>>
  >({})

  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const errors = validateRegistration(values)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target

    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    const name = event.target.name as keyof RegistrationValues

    setTouched((current) => ({
      ...current,
      [name]: true,
    }))
  }

  function showError(field: keyof RegistrationValues) {
    return touched[field] || submitAttempted
      ? errors[field]
      : undefined
  }

  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitAttempted(true)

    if (Object.keys(errors).length === 0) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <main>
        <h1>Register</h1>

        <p role="status">
          Thanks, {values.fullName}. You are registered.
        </p>
      </main>
    )
  }

  return (
    <main>
      <h1>Register</h1>

      <form
        className="form"
        onSubmit={handleSubmit}
        noValidate
      >
        <TextField
          label="Full name"
          name="fullName"
          type="text"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError('fullName')}
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError('email')}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError('password')}
        />

        <TextField
          label="Confirm password"
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError('confirmPassword')}
        />

        <label className="check">
          <input
            name="acceptTerms"
            type="checkbox"
            checked={values.acceptTerms}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          I accept the terms
        </label>

        {showError('acceptTerms') && (
          <p className="field-error">
            {showError('acceptTerms')}
          </p>
        )}

        <Button type="submit">
          Create account
        </Button>
      </form>
    </main>
  )
}