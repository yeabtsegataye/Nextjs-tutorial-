import Link from "next/link";
import Loading from "../loading";
import TicketList from "./Tikets";
import { Suspense } from "react"

export default function Tikets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Currently open tickets.</small></p>
        </div>
        <Link href="/tikets/create" className="ml-auto">
          <button className="btn-primary">New Ticket</button>
        </Link>
      </nav>
      {/* this is when the data is loading it will show this loading page */}
      <Suspense fallback={<Loading />}>
      <TicketList />
      </Suspense>
    </main>
  )
}