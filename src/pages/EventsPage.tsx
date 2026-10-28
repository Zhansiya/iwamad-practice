import { EventCard } from '../components/EventCard'
import { events } from '../data/events'

function EventsPage() {
  return (
    <>
      <h1>Events</h1>

      <div className="card-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </>
  )
}

export default EventsPage