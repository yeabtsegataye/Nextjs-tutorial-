import Link from "next/link"

async function getTickets() {

  await new Promise(resolve => setTimeout(resolve, 1000))
  try {
    const res = await fetch('http://localhost:4000/tickets', {
      next: {
        revalidate: 0 // use 0 to opt out of using cache
      }
    })

    return res.json()
  } catch (error) {
    console.log(error)
    return []
  }

}

export default async function TicketList() {
  const tickets = await getTickets()
  return (
    <>
      {tickets && tickets.map((ticket) => (
        <div key={ticket?.id} className="card my-5">
          <Link href={`/tikets/${ticket?.id}`}>
            <h3>{ticket?.title}</h3>
            <p>{ticket?.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket?.priority}`}>
              {ticket?.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets, yay!</p>
      )}
    </>
  )
}