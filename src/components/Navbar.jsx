
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Scissors, ArrowUpRight } from "lucide-react";

const links = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Our Story", "/about"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full border-b border-white/10 bg-noir/80 backdrop-blur-md">
      <nav className="mx-auto flex h-[82px] max-w-[1180px] items-center justify-between px-5 md:px-6">

        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <span className="grid h-10 w-10 place-items-center border border-gold text-gold">
            <Scissors size={21} />
          </span>

          <span className="font-display text-[26px] font-bold leading-none tracking-[2px] text-cream">
            NOIR
            <small className="mt-1 block font-sans text-[11px] font-semibold tracking-[2px] text-gold">
              GROOMING STUDIO
            </small>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `text-[16px] font-medium transition-colors hover:text-gold ${
                  isActive ? "text-gold" : "text-cream/75"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/booking"
          className="hidden items-center gap-3 border border-gold px-5 py-3 text-[15px] font-medium text-gold transition hover:bg-gold hover:text-noir md:flex"
        >
          Book a visit <ArrowUpRight size={17} />
        </Link>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-cream md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col border-t border-white/10 bg-noir px-6 py-4 md:hidden">
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `border-b border-white/10 py-4 text-[16px] font-medium hover:text-gold ${
                  isActive ? "text-gold" : "text-cream"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          <Link
            to="/booking"
            onClick={() => setOpen(false)}
            className="mt-5 flex items-center justify-center gap-3 bg-gold py-4 text-[15px] font-semibold text-noir"
          >
            Book a visit <ArrowUpRight size={18} />
          </Link>
        </div>
      )}
    </header>
  );
}
