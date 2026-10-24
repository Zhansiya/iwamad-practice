import { useState } from 'react'
import type { ChangeEvent, FocusEvent, SubmitEvent, } from 'react'
import type { CampusEvent } from '../data/events'
import { validateSignup, type SignupValues, } from '../lib/validateSignup'
import TextField from './ui/TextField'
import Button from './ui/Button'

type EventSignupFormProps = {
  event: CampusEvent
}

function EventSignupForm({ event }: EventSignupFormProps) {
  const [values, setValues] = useState<SignupValues>({
    fullName: '',
    email: '',
    tickets: '1',
  })

  const [seatsLeft, setSeatsLeft] = useState(event.seats)

  const [touched, setTouched] = useState<
    Partial<Record<keyof SignupValues, boolean>>
  >({})

  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [status, setStatus] = useState('')

  const errors = validateSignup(values, seatsLeft)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target

    setValues((current) => ({
      ...current,
      [name]: value,
    }))
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    const name = event.target.name as keyof SignupValues

    setTouched((current) => ({
      ...current,
      [name]: true,
    }))
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitAttempted(true)

    if (Object.keys(errors).length > 0) {
      return
    }

    const tickets = Number(values.tickets)

    setSeatsLeft((current) => current - tickets)

    setStatus(
      `Booked: ${tickets} for ${values.fullName.trim()}.`
    )

    setValues({
      fullName: '',
      email: '',
      tickets: '1',
    })

    setTouched({})
    setSubmitAttempted(false)
  }

  return (
    <>
      <p>Seats left: {seatsLeft}</p>

      <form onSubmit={handleSubmit} noValidate className="form">
        <TextField
          label="Full name"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            touched.fullName || submitAttempted
              ? errors.fullName
              : undefined
          }
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            touched.email || submitAttempted
              ? errors.email
              : undefined
          }
        />

        <TextField
          label="Tickets"
          name="tickets"
          type="number"
          min={1}
          max={4}
          value={values.tickets}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            touched.tickets || submitAttempted
              ? errors.tickets
              : undefined
          }
        />

        <Button type="submit">Book</Button>
      </form>

      {status && <p role="status">{status}</p>}
    </>
  )
}

export default EventSignupForm