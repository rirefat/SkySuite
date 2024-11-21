import Link from "next/link"
import Image from "next/image"
import { auth } from "@/auth"
import LogoutBTN from "./auth/LogoutBTN";

const Navbar = async ({ sideMenu }) => {
  const session = await auth();
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

      {
        sideMenu &&
        <ul>
          <li>
            <Link href="/recommended-places">Recommended Places</Link>
          </li>

          <li>
            <Link href="/about">About Us</Link>
          </li>

          <li>
            <Link href="/contact">Contact us</Link>
          </li>

          <li>
            <Link href="/bookings">Bookings</Link>
          </li>
          {/* <li>
            <Link href="/hotels">Hotels</Link>
          </li> */}

          <li>
            {
              session?.user ?

                <>
                  <Link href={`/user/userId`} className="font-bold mr-4 capitalize">Hi, {session?.user?.name.split(" ")[0]} 🙋‍♂️</Link>
                  <LogoutBTN />
                </>
                :
                <Link
                  href="/login"
                  className="login shadow-lg hover:shadow-blue-400 transition duration-300"
                >Login</Link>
            }
          </li>
        </ul>
      }
    </nav>
  )
}

export default Navbar