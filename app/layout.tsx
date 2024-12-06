import "../styles/globals.css";
import Navbar from "../components/Navbar.jsx";
import { Poppins } from "next/font/google";
import { StateContext } from "../context/StateContext.js";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
const poppins_font = Poppins({
  weight: "400",
  subsets: ["latin"],
});
export const metadata = {
  title: "Distinct Patterns",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <StateContext>
        <body className={poppins_font.className}>
        <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <Navbar />
          {children}
        </body>
      </StateContext>
    </html>
    </ClerkProvider>
  );
}
