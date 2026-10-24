import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import EventsPage from './EventsPage'
import { events } from '../data/events'

describe('EventsPage', () => {
  it('renders one card for every event', () => {
    render(
      <MemoryRouter>
        <EventsPage />
      </MemoryRouter>
    )

    events.forEach((event) => {
      expect(
        screen.getByRole('heading', { name: event.title })
      ).toBeInTheDocument()
    })
  })
})