import Image from "next/image";
import Container from "./Container";
import { SITE, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-line py-11">
      <Container className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2.5 mb-2 font-display font-bold text-sm">
            <Image
              src="/images/logos/morubisi-icon.png"
              alt="Morubisi Technologies"
              width={22}
              height={23}
            />
            MORUBISI TECHNOLOGIES
          </div>
          <p className="text-steel text-[12.5px]">
            Surveillance infrastructure specialists · Irene, South Africa · Est. {SITE.founded}
          </p>
        </div>

        <div className="flex gap-6 text-[13px] text-steel">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-orange transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-steel text-[12.5px]">All rights reserved.</p>
      </Container>
    </footer>
  );
}
