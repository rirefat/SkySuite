import Navbar from "@/components/Navbar";
import "../globals.css";
import { connectDB } from "@/database/service/mongo";

export const metadata = {
  title: "SkySuite",
  description: "",
};

export default async function RootLayout({ children }) {
  await connectDB();

  return (
    <html lang="en">
      <body className="geistSans geistMono antialiased">
        <Navbar sideMenu={true}/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
