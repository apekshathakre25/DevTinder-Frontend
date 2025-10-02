import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-300 text-neutral-content items-center p-4 fixed bottom-0 left-0 right-0">
      <aside className="grid-flow-col items-center">
        <span className="text-xl">💝</span>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-sm">
        <Link to="/about" className="hover:underline">About Us</Link>
        <Link to="/contact" className="hover:underline">Contact Us</Link>
        <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
        <Link to="/return-policy" className="hover:underline">Return Policy</Link>
        <Link to="/refund-policy" className="hover:underline">Refund Policy</Link>
        <Link to="/disclaimer" className="hover:underline">Disclaimer</Link>
      </nav>
    </footer>
  );
};

export default Footer;