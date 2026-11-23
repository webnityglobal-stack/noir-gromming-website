
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Scissors,
  ShieldCheck,
  Clock3,
  Star,
  Award,
  Check,
  Instagram,
} from "lucide-react";

import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const images = {
  hero: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=90",
  about: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1100&q=90",
  detail: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=90",
  interior: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=90",
  grooming: "https://images.unsplash.com/photo-1593702295094-aea6392f2a0a?auto=format&fit=crop&w=900&q=90",
  styling: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=90",
  gallery: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1000&q=90",
};

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Experience",
    desc: "Luxury grooming with attention to every little detail.",
  },
  {
    icon: Scissors,
    title: "Expert Barbers",
    desc: "Experienced artists with a passion for perfect styling.",
  },
  {
    icon: Clock3,
    title: "Easy Booking",
    desc: "Your preferred service and time, just a few clicks away.",
  },
  {
    icon: Award,
    title: "Quality Products",
    desc: "Carefully selected premium products for your grooming.",
  },
];

const galleryImages = [
  { src: images.interior, title: "The Studio" },
  { src: images.detail, title: "Precision" },
  { src: images.grooming, title: "The Experience" },
  { src: images.styling, title: "Modern Style" },
];

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap');

        :root {
          --noir: #11110f;
          --noir-card: #1b1a17;
          --gold: #c6a56a;
          --cream: #f1ede5;
        }

        .noir-home {
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
        }

        .noir-display {
          font-family: 'Playfair Display', serif;
        }

        .gold-text {
          background: linear-gradient(110deg,#f0d9a7,#b38a4c,#e9d2a1);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-glow {
          background: radial-gradient(circle,rgba(198,165,106,.22),transparent 68%);
          filter: blur(25px);
        }

        .hero-image {
          animation: heroFloat 6s ease-in-out infinite;
          transform-style: preserve-3d;
        }

        @keyframes heroFloat {
          0%,100% { transform: translateY(0) rotateY(-5deg); }
          50% { transform: translateY(-12px) rotateY(3deg); }
        }

        @keyframes revealUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .reveal-up {
          animation: revealUp .9s ease both;
        }

        .luxury-card {
          transition: transform .4s ease, border-color .4s ease, box-shadow .4s ease;
          transform-style: preserve-3d;
        }

        .luxury-card:hover {
          transform: translateY(-9px);
          border-color: rgba(198,165,106,.7);
          box-shadow: 0 25px 50px rgba(0,0,0,.25);
        }

        .gallery-item img {
          transition: transform .7s cubic-bezier(.2,.8,.2,1);
        }

        .gallery-item:hover img {
          transform: scale(1.09);
        }

        .gold-button {
          transition: all .3s ease;
        }

        .gold-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(198,165,106,.25);
          background: #dfc18e;
        }

        .outline-button {
          transition: all .3s ease;
        }

        .outline-button:hover {
          background: var(--gold);
          color: var(--noir);
          border-color: var(--gold);
        }

        .gold-line {
          height: 1px;
          background: linear-gradient(90deg,transparent,#c6a56a,transparent);
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-image, .reveal-up {
            animation: none;
          }

          .luxury-card, .gallery-item img {
            transition: none;
          }
        }
      `}</style>

      <main className="noir-home bg-[#11110f] text-[#f1ede5]">

        {/* HERO SECTION */}
        <section className="relative min-h-[580px] overflow-hidden bg-[#11110f] pt-[30px] md:min-h-[660px]">

          <div className="hero-glow absolute -right-20 top-0 h-[550px] w-[550px]" />

          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: "radial-gradient(#c6a56a 1px,transparent 1px)",
              backgroundSize: "35px 35px",
            }}
          />

          <div className="relative mx-auto grid min-h-[580px] max-w-[1250px] items-center gap-5 px-5 py-[30px] md:min-h-[660px] md:grid-cols-2 md:px-8">

            <div className="relative z-10 reveal-up">

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#c6a56a]" />
                <span className="text-[10px] font-bold tracking-[4px] text-[#c6a56a]">
                  THE ART OF MODERN GROOMING
                </span>
              </div>

              <h1 className="noir-display text-[clamp(55px,8vw,100px)] leading-[.99] tracking-[-3px]">
                Define
                <br />
                Your
                <br />
                <span className="gold-text italic">Presence.</span>
              </h1>

              <p className="mt-6 max-w-[430px] text-sm leading-7 text-[#aaa49a] md:text-base">
                More than grooming. It's a statement of confidence,
                individuality and timeless style. Discover the art of
                looking your absolute best.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">

                <Link
                  to="/booking"
                  className="gold-button inline-flex items-center gap-4 bg-[#c6a56a] px-6 py-4 text-sm font-bold text-[#11110f]"
                >
                  Book Your Experience
                  <ArrowUpRight size={19} />
                </Link>

                <Link
                  to="/services"
                  className="outline-button inline-flex items-center gap-3 border border-white/20 px-6 py-4 text-sm"
                >
                  Explore Services
                  <ArrowRight size={17} />
                </Link>

              </div>

              <div className="mt-9 flex gap-8 border-t border-white/10 pt-5">

                <div>
                  <h3 className="noir-display text-3xl gold-text">4.9/5</h3>
                  <p className="mt-1 text-[9px] tracking-[2px] text-[#aaa49a]">
                    CLIENT RATING
                  </p>
                </div>

                <div className="h-12 w-px bg-white/10" />

                <div>
                  <h3 className="noir-display text-3xl gold-text">8K+</h3>
                  <p className="mt-1 text-[9px] tracking-[2px] text-[#aaa49a]">
                    HAPPY VISITS
                  </p>
                </div>

                <div className="h-12 w-px bg-white/10" />

                <div>
                  <h3 className="noir-display text-3xl gold-text">6+</h3>
                  <p className="mt-1 text-[9px] tracking-[2px] text-[#aaa49a]">
                    EXPERT ARTISTS
                  </p>
                </div>

              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="relative mx-auto flex h-[420px] w-full max-w-[520px] items-center justify-center md:h-[550px]">

              <div
                className="absolute h-[330px] w-[330px] rounded-full border border-[#c6a56a]/20 md:h-[430px] md:w-[430px]"
                style={{ transform: "rotateX(65deg) rotateZ(-20deg)" }}
              />

              <div
                className="absolute h-[370px] w-[370px] rounded-full border border-[#c6a56a]/10 md:h-[490px] md:w-[490px]"
                style={{ transform: "rotateX(65deg) rotateZ(35deg)" }}
              />

              <div className="absolute h-[300px] w-[300px] rounded-full hero-glow" />

              <div className="hero-image relative z-10 h-[350px] w-[250px] overflow-hidden rounded-t-[150px] rounded-b-[18px] border border-[#c6a56a]/60 shadow-[0_30px_80px_rgba(0,0,0,.7)] sm:h-[410px] sm:w-[300px]">

                <img
                  src={images.hero}
                  alt="Luxury barber studio"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

                <div className="absolute bottom-6 left-5">
                  <p className="text-[10px] tracking-[4px] text-[#c6a56a]">
                    NOIR STUDIO
                  </p>
                  <h3 className="noir-display mt-2 text-3xl">
                    The Art of Detail.
                  </h3>
                </div>

              </div>

              <div className="absolute right-0 top-10 z-20 w-[125px] rotate-[7deg] border border-white/20 bg-[#24231f] p-2 shadow-2xl sm:right-[-5px] sm:w-[155px]">

                <img
                  src={images.detail}
                  alt="Precision haircut"
                  className="h-[100px] w-full object-cover sm:h-[125px]"
                />

                <p className="py-2 text-center text-[9px] tracking-[3px] text-[#c6a56a]">
                  PRECISION CUT
                </p>
              </div>

              <div className="absolute bottom-3 left-0 z-20 border border-[#c6a56a]/40 bg-[#1c1b18] px-5 py-3 shadow-xl">
                <p className="text-[9px] tracking-[3px] text-[#aaa49a]">
                  YOUR SIGNATURE
                </p>
                <p className="noir-display mt-1 text-xl gold-text">
                  Your Style.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="bg-[#f1ede5] py-[35px] text-[#1b1a17]">

          <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-5 md:grid-cols-2 md:px-8">

            <div className="relative pb-5 pr-5">

              <img
                src={images.about}
                alt="NOIR luxury barber interior"
                className="h-[350px] w-full object-cover shadow-[15px_15px_0_#d7cbb7] md:h-[440px]"
              />

              <div className="absolute bottom-0 right-0 bg-[#171613] px-5 py-4 text-[#f1ede5] shadow-xl">
                <p className="text-[9px] tracking-[3px] text-[#c6a56a]">
                  THE NOIR EXPERIENCE
                </p>
                <p className="noir-display mt-1 text-2xl">EST. 2020</p>
              </div>

              <div className="absolute left-[-8px] top-7 flex h-16 w-16 items-center justify-center rounded-full border border-[#c6a56a] bg-[#171613] text-[#c6a56a] shadow-xl">
                <Scissors size={27} />
              </div>

            </div>

            <div>

              <p className="text-[10px] font-bold tracking-[3px] text-[#967444]">
                MORE THAN A HAIRCUT
              </p>

              <h2 className="noir-display mt-4 text-4xl leading-tight md:text-[55px]">
                A Little Time For
                <br />
                <em className="gold-text">The Best Version</em>
                <br />
                Of You.
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#706a61]">
                We believe great grooming is personal. Our artists
                combine timeless craftsmanship with a modern eye,
                creating a space where you can relax, recharge and
                leave feeling like your best self.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">

                {["Personalized Styling", "Premium Products", "Modern Techniques", "Luxury Ambience"].map(item => (
                  <div key={item} className="flex items-center gap-2 text-xs font-semibold text-[#39352f]">
                    <Check size={15} className="text-[#a4824c]" />
                    {item}
                  </div>
                ))}

              </div>

              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-3 border-b border-[#b89b6a] pb-2 text-sm font-bold text-[#8a6c3f]"
              >
                Discover Our Story
                <ArrowUpRight size={18} />
              </Link>

            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="bg-[#171715] py-[35px]">

          <div className="mx-auto max-w-[1180px] px-5 md:px-8">

            <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">

              <div>
                <p className="mb-3 text-[10px] font-bold tracking-[3px] text-[#c6a56a]">
                  THE NOIR MENU
                </p>

                <h2 className="noir-display text-4xl md:text-5xl">
                  The Details Make
                  <br />
                  <em className="gold-text">The Difference.</em>
                </h2>

                <p className="mt-3 text-sm text-[#aaa49a]">
                  Thoughtfully curated services. Expert hands. No shortcuts.
                </p>
              </div>

              <Link
                to="/services"
                className="hidden items-center gap-2 border-b border-[#c6a56a] pb-2 text-sm text-[#c6a56a] md:flex"
              >
                View All Services <ArrowUpRight size={17} />
              </Link>

            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 3).map((s, i) => (
                <ServiceCard key={s.title} item={s} index={i} />
              ))}
            </div>

            <Link
              to="/services"
              className="mt-7 inline-flex items-center gap-2 border-b border-[#c6a56a] pb-2 text-sm text-[#c6a56a] md:hidden"
            >
              View All Services <ArrowUpRight size={17} />
            </Link>

          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="relative overflow-hidden bg-[#11110f] py-[35px]">

          <div className="absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-[#c6a56a]/10 blur-[100px]" />

          <div className="relative mx-auto grid max-w-[1180px] items-center gap-9 px-5 md:grid-cols-2 md:px-8">

            <div className="order-2 md:order-1">

              <p className="text-[10px] font-bold tracking-[3px] text-[#c6a56a]">
                BEYOND THE ORDINARY
              </p>

              <h2 className="noir-display mt-4 text-4xl leading-tight md:text-[55px]">
                Not Just A Cut.
                <br />
                <em className="gold-text">An Experience.</em>
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#aaa49a]">
                Step into a world where precision meets relaxation.
                Every visit is designed around your comfort, your
                personality and your individual style.
              </p>

              <div className="mt-7 space-y-5">

                {[
                  ["01", "Personal Consultation", "We understand your style before we begin."],
                  ["02", "Precision Grooming", "Every detail crafted by experienced hands."],
                  ["03", "Signature Finish", "Leave with a look that feels uniquely yours."]
                ].map(([number, title, desc]) => (
                  <div key={number} className="flex gap-4 border-b border-white/10 pb-4">

                    <span className="noir-display text-2xl gold-text">
                      {number}
                    </span>

                    <div>
                      <h3 className="text-sm font-semibold">{title}</h3>
                      <p className="mt-1 text-xs text-[#99938a]">{desc}</p>
                    </div>

                  </div>
                ))}

              </div>

              <Link
                to="/booking"
                className="gold-button mt-8 inline-flex items-center gap-3 bg-[#c6a56a] px-6 py-4 text-sm font-bold text-[#11110f]"
              >
                Experience NOIR
                <ArrowUpRight size={18} />
              </Link>

            </div>

            <div className="order-1 relative md:order-2">

              <div className="absolute -right-3 -top-3 h-full w-full border border-[#c6a56a]/30" />

              <img
                src={images.interior}
                alt="Luxury barber experience"
                className="relative z-10 h-[340px] w-full object-cover md:h-[460px]"
              />

              <div className="absolute bottom-5 left-[-10px] z-20 bg-[#c6a56a] px-5 py-4 text-[#11110f] shadow-xl sm:left-[-20px]">
                <p className="text-[9px] font-bold tracking-[2px]">THE NOIR PROMISE</p>
                <p className="noir-display mt-1 text-2xl">Simply Exceptional.</p>
              </div>

            </div>

          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="bg-[#f1ede5] py-[35px] text-[#1b1a17]">

          <div className="mx-auto max-w-[1180px] px-5 md:px-8">

            <div className="mb-10 text-center">
              <p className="text-[10px] font-bold tracking-[3px] text-[#967444]">
                THE NOIR STANDARD
              </p>

              <h2 className="noir-display mt-3 text-4xl md:text-5xl">
                Crafted Around <em className="gold-text">You.</em>
              </h2>

              <p className="mx-auto mt-3 max-w-[450px] text-sm text-[#777067]">
                Every detail matters. Every visit should feel exceptional.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {features.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className="luxury-card border border-[#d9d0c2] bg-[#ebe5da] p-6"
                >

                  <div className="flex h-12 w-12 items-center justify-center border border-[#b89b6a]/50 bg-[#f5efe3] text-[#997744] shadow-sm">
                    <Icon size={23} />
                  </div>

                  <p className="mt-5 text-[10px] tracking-[2px] text-[#a48758]">
                    0{i + 1}
                  </p>

                  <h3 className="noir-display mt-2 text-xl font-semibold">
                    {title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-[#777067]">
                    {desc}
                  </p>

                </div>
              ))}

            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="bg-[#171715] py-[35px]">

          <div className="mx-auto max-w-[1180px] px-5 md:px-8">

            <div className="mb-8 flex items-end justify-between gap-4">

              <div>
                <p className="text-[10px] font-bold tracking-[3px] text-[#c6a56a]">
                  A GLIMPSE INSIDE
                </p>

                <h2 className="noir-display mt-3 text-4xl md:text-5xl">
                  The <em className="gold-text">Gallery.</em>
                </h2>
              </div>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="hidden items-center gap-2 text-xs text-[#c6a56a] sm:flex"
              >
                <Instagram size={16} />
                FOLLOW US
              </a>

            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">

              {galleryImages.map((item) => (
                <div
                  key={item.title}
                  className="gallery-item group relative h-[210px] overflow-hidden md:h-[280px]"
                >

                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-4 left-4">
                    <p className="text-[9px] tracking-[2px] text-[#c6a56a]">
                      NOIR STUDIO
                    </p>
                    <h3 className="noir-display mt-1 text-xl">
                      {item.title}
                    </h3>
                  </div>

                  <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/30 opacity-0 transition group-hover:opacity-100">
                    <ArrowUpRight size={17} />
                  </div>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="relative overflow-hidden bg-[#f1ede5] py-[35px] text-[#1b1a17]">

          <div className="mx-auto max-w-[950px] px-5 text-center">

            <div className="mb-5 flex justify-center gap-1 text-[#b28b4f]">
              {[1, 2, 3, 4, 5].map(n => (
                <Star key={n} size={17} fill="currentColor" />
              ))}
            </div>

            <p className="text-[10px] font-bold tracking-[3px] text-[#967444]">
              WORDS THAT MATTER
            </p>

            <h2 className="noir-display mt-4 text-4xl leading-tight md:text-5xl">
              “Confidence Is The
              <br />
              <em className="gold-text">Best Thing You Can Wear.</em>”
            </h2>

            <div className="gold-line mx-auto my-6 max-w-[100px]" />

            <p className="text-sm text-[#777067]">
              Come as you are. Leave a little more you.
            </p>

            <p className="mt-4 text-[10px] font-bold tracking-[3px] text-[#997744]">
              THE NOIR PHILOSOPHY
            </p>

          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden bg-[#24231f] py-[35px]">

          <div className="absolute inset-0 opacity-20">
            <img
              src={images.gallery}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#11110f]/80" />
          </div>

          <div className="relative mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-7 px-5 md:flex-row md:items-center md:px-8">

            <div>
              <p className="text-[10px] font-bold tracking-[3px] text-[#c6a56a]">
                YOUR NEXT LOOK STARTS HERE
              </p>

              <h2 className="noir-display mt-3 text-4xl md:text-5xl">
                Ready For A <em className="gold-text">Reset?</em>
              </h2>

              <p className="mt-3 text-sm text-[#aaa49a]">
                Pick your service. Choose your time. We'll take it from there.
              </p>
            </div>

            <Link
              to="/booking"
              className="gold-button inline-flex shrink-0 items-center gap-4 bg-[#c6a56a] px-7 py-4 text-sm font-bold text-[#11110f]"
            >
              Reserve Your Chair
              <ArrowUpRight size={20} />
            </Link>

          </div>
        </section>

      </main>
    </>
  );
}
