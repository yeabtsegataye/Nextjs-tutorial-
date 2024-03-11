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
      </nav>
      {/* this is when the data is loading it will show this loading page */}
      <Suspense fallback={<Loading />}>
      <TicketList />
      </Suspense>
    </main>
  )
}