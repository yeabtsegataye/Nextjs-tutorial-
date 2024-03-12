import Link from 'next/link'
import logo from './logo2.png'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <nav>
      <Image
      src={logo}
      alt = 'some logo'
      width={70}
      placeholder='blur'
      quality={100}
      />
      <h2>Tati Practice</h2>
        <Link href="/">Dash board</Link>
        <Link href="/tikets">tikets</Link>
    </nav>
  )
}
