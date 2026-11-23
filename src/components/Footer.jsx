
import { Link } from "react-router-dom";
import { Instagram, Facebook, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-noir text-cream">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 px-5 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-8 lg:py-16">

        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center border border-gold text-xl font-bold text-gold">
              N
            </span>

            <span className="font-display text-[26px] font-bold leading-none tracking-[2px]">
              NOIR
              <small className="mt-1 block font-sans text-[11px] font-semibold tracking-[2px] text-gold">
                GROOMING STUDIO
              </small>
            </span>
          </Link>

          <p className="mt-5 max-w-[260px] text-[15px] leading-7 text-cream/65">
            Good grooming. Great energy. Your chair is waiting.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="mb-5 text-[18px] font-semibold text-gold">
            Explore
          </h4>

          <div className="flex flex-col items-start gap-3">
            <Link to="/services" className="text-[15px] text-cream/70 transition hover:text-gold">
              Services
            </Link>
            <Link to="/about" className="text-[15px] text-cream/70 transition hover:text-gold">
              Our Story
            </Link>
            <Link to="/gallery" className="text-[15px] text-cream/70 transition hover:text-gold">
              Gallery
            </Link>
            <Link to="/contact" className="text-[15px] text-cream/70 transition hover:text-gold">
              Contact
            </Link>
          </div>
        </div>

        {/* Visit Us */}
        <div>
          <h4 className="mb-5 text-[18px] font-semibold text-gold">
            Visit Us
          </h4>

          <p className="mb-4 text-[15px] leading-7 text-cream/70">
            12, Studio Lane, New Delhi
            <br />
            Mon – Sun · 10 AM – 9 PM
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="tel:+919876543210"
              className="text-[15px] text-cream/70 transition hover:text-gold"
            >
              +91 98765 43210
            </a>

            <a
              href="mailto:hello@noirstudio.in"
              className="break-all text-[15px] text-cream/70 transition hover:text-gold"
            >
              hello@noirstudio.in
            </a>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="mb-5 text-[18px] font-semibold text-gold">
            Stay in the Loop
          </h4>

          <p className="mb-5 text-[15px] leading-7 text-cream/65">
            Fresh looks, studio news and the occasional good hair day.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-11 w-11 place-items-center border border-white/15 text-cream transition hover:border-gold hover:bg-gold hover:text-noir"
            >
              <Instagram size={19} />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-11 w-11 place-items-center border border-white/15 text-cream transition hover:border-gold hover:bg-gold hover:text-noir"
            >
              <Facebook size={19} />
            </a>

            <a
              href="#top"
              aria-label="Back to top"
              className="grid h-11 w-11 place-items-center border border-white/15 text-cream transition hover:border-gold hover:bg-gold hover:text-noir"
            >
              <ArrowUpRight size={19} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-3 px-5 py-5 text-center text-[13px] text-cream/50 sm:px-6 md:flex-row md:text-left">
          <span>
            © 2026 NOIR Grooming Studio. All rights reserved.
          </span>

          <span>
            Designed for the detail-obsessed.
          </span>
        </div>
      </div>
    </footer>
  );
}
