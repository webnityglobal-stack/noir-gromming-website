import { Link } from 'react-router-dom'
import { Instagram, Facebook, ArrowUpRight } from 'lucide-react'
export default function Footer(){return <footer className="footer"><div className="container footer-grid">
  <div><Link to="/" className="brand footer-brand"><span className="brand-mark">N</span><span>NOIR<small>GROOMING STUDIO</small></span></Link><p className="footer-note">Good grooming. Great energy. Your chair is waiting.</p></div>
  <div><h4>Explore</h4><Link to="/services">Services</Link><Link to="/about">Our story</Link><Link to="/gallery">Gallery</Link><Link to="/contact">Contact</Link></div>
  <div><h4>Visit us</h4><p>12, Studio Lane, New Delhi<br/>Mon – Sun · 10 AM – 9 PM</p><a href="tel:+919876543210">+91 98765 43210</a><a href="mailto:hello@noirstudio.in">hello@noirstudio.in</a></div>
  <div><h4>Stay in the loop</h4><p>Fresh looks, studio news and the occasional good hair day.</p><div className="socials"><a href="https://instagram.com" aria-label="Instagram"><Instagram/></a><a href="https://facebook.com" aria-label="Facebook"><Facebook/></a><a href="#top" aria-label="Back to top"><ArrowUpRight/></a></div></div>
</div><div className="container copyright"><span>© 2026 NOIR Grooming Studio. All rights reserved.</span><span>Designed for the detail-obsessed.</span></div></footer>}
