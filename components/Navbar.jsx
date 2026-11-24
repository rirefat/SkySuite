import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";
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
            priority
          />
          <span className="font-light text-2xl">SkySuite</span>
        </span>
      </Link>

      {
        sideMenu &&
        <ul>
          <li>
            <Link href="/about">About Us</Link>
          </li>

          <li>
            <Link href="/contact">Contact us</Link>
          </li>

          <li>
            <Link href="/bookings">Bookings</Link>
          </li>

          <li>
            {
              session?.user ?
                <div className="flex items-center gap-3">
                  <Link
                    href={`/user/${session.user.id || 'me'}`}
                    className="font-bold hover:text-primary transition-colors capitalize"
                  >
                    Hi, {session.user.name?.split(" ")[0] || "User"} 🙋‍♂️
                  </Link>
                  <LogoutBTN />
                </div>
                :
                <Link
                  href="/login"
                  className="login shadow-lg hover:shadow-blue-400 transition duration-300"
                >
                  Login
                </Link>
            }
          </li>
        </ul>
      }
    </nav>
  );
};

export default Navbar;
