import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <span className="flex items-center justify-center">
          <Image
            src="/skysuite.png"
            alt="Sky Suite Logo"
            width={60}
            height={100}
          />
          <span className="font-light text-2xl">SkySuite</span>
        </span>
      </Link>

      <ul>
        <li>
          <Link href="#">Recommended Places</Link>
        </li>

        <li>
          <Link href="#">About Us</Link>
        </li>

        <li>
          <Link href="#">Contact us</Link>
        </li>

        <li>
          <Link href="/bookings">Bookings</Link>
        </li>

        <li>
          <Link href="/login" className="login">Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar