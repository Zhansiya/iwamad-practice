import { describe, expect, it } from 'vitest'
import {
  validateRegistration,
  type RegistrationValues,
} from './validateRegistration'

const validValues: RegistrationValues = {
  fullName: 'Aliya Nurlanovna',
  email: 'aliya@example.com',
  password: 'almaty2026',
  confirmPassword: 'almaty2026',
  acceptTerms: true,
}

describe('validateRegistration', () => {
  it('returns no errors for valid values', () => {
    expect(validateRegistration(validValues)).toEqual({})
  })

  it('shows an error for empty full name', () => {
    const values = {
      ...validValues,
      fullName: '   ',
    }

    const errors = validateRegistration(values)

    expect(errors.fullName).toBe('Enter your full name')
  })

  it('shows an error for invalid email', () => {
    const values = {
      ...validValues,
      email: 'aliya@example',
    }

    const errors = validateRegistration(values)

    expect(errors.email).toBe(
      'Enter a valid email, like name@example.com'
    )
  })

  it('accepts an eight-character password with a number', () => {
    const values = {
      ...validValues,
      password: 'almaty26',
      confirmPassword: 'almaty26',
    }

    expect(validateRegistration(values)).toEqual({})
  })

  it('shows an error for a short password', () => {
    const values = {
      ...validValues,
      password: 'almaty2',
      confirmPassword: 'almaty2',
    }

    const errors = validateRegistration(values)

    expect(errors.password).toBe('Use at least 8 characters')
  })

  it('shows an error when password has no number', () => {
    const values = {
      ...validValues,
      password: 'almatycity',
      confirmPassword: 'almatycity',
    }

    const errors = validateRegistration(values)

    expect(errors.password).toBe('Include at least one number')
  })

  it('shows an error for mismatched passwords', () => {
    const values = {
      ...validValues,
      confirmPassword: 'almaty2027',
    }

    const errors = validateRegistration(values)

    expect(errors.confirmPassword).toBe('Passwords do not match')
  })

  it('shows an error when terms are not accepted', () => {
    const values = {
      ...validValues,
      acceptTerms: false,
    }

    const errors = validateRegistration(values)

    expect(errors.acceptTerms).toBe('Accept the terms to continue')
  })
})