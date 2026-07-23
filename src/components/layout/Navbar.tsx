"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import Button from "@/components/ui/Button";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-ink/90 backdrop-blur-md border-b border-line">
      <Container className="flex items-center justify-between py-3.5">
        <Link href="/" className="flex items-center gap-3 font-display font-bold text-[17px]">
          <Image
            src="/images/logos/morubisi-icon.png"
            alt="Morubisi Technologies"
            width={34}
            height={35}
            className="flex-shrink-0"
            priority
          />
          <span>
            MORUBISI
            <small className="block font-mono font-normal text-[9px] tracking-[0.18em] text-steel mt-0.5">
              TECHNOLOGIES · EST. {SITE.founded}
            </small>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-steel hover:text-paper transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href="/contact" variant="solid">
            Request assessment
          </Button>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1.5"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="w-5 h-0.5 bg-paper" />
          <span className="w-5 h-0.5 bg-paper" />
        </button>
      </Container>

      {open && (
        <div className="md:hidden border-t border-line bg-ink px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-steel hover:text-paper transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" variant="solid" className="w-fit">
            Request assessment
          </Button>
        </div>
      )}
    </header>
  );
}
