"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navigation = () => {
  const path = usePathname();
  const [count, setCount] = useState(0);
  console.log(path)

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">home</Link> {path === "/" ? "✨" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link> {path === "/about-us" ? "✨" : ""}
        </li>
      </ul>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </nav>
  )
}

export default Navigation;