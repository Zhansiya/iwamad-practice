import { describe, expect, it } from 'vitest'
import { validateSignup } from './validateSignup'

const valid = {
  fullName: 'Aliya Nurlanovna',
  email: 'aliya@example.com',
  tickets: '2',
}

describe('validateSignup', () => {
  it('1 accepts valid values', () => {
    const errors = validateSignup(valid, 10)

    expect(errors).toEqual({})
  })

  it('2 rejects a name that is only spaces', () => {
    const errors = validateSignup(
      { ...valid, fullName: '   ' },
      10
    )

    expect(errors.fullName).toBe('Enter your full name')
  })

  it('3 rejects an invalid email', () => {
    const errors = validateSignup(
      { ...valid, email: 'aliya@example' },
      10
    )

    expect(errors.email).toBe(
      'Enter a valid email, like name@example.com'
    )
  })

  it('4 rejects zero tickets', () => {
    const errors = validateSignup(
      { ...valid, tickets: '0' },
      10
    )

    expect(errors.tickets).toBe('Choose 1 to 4 tickets')
  })

  it('5 rejects more than four tickets', () => {
    const errors = validateSignup(
      { ...valid, tickets: '5' },
      10
    )

    expect(errors.tickets).toBe('Choose 1 to 4 tickets')
  })

  it('6 rejects more tickets than seats left', () => {
    const errors = validateSignup(
      { ...valid, tickets: '3' },
      2
    )

    expect(errors.tickets).toBe('Only 2 seats left')
  })
})