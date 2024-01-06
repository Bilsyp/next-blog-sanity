"use client";

import Link from "next/link";
import { ModeToggle } from "./Darkmode";
export default function Nav() {
  return (
    <nav className="containers  flex justify-between items-center">
      <div className="brand">
        <Link href={"/"}>
          <h1 className=" text-3xl font-bold">
            Bilsyp<span className=" text-blue-500">Blog</span>{" "}
          </h1>
        </Link>
      </div>
      <ModeToggle />
    </nav>
  );
}
