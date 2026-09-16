import "./footer.css";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>© 2026 Tío Ben Pino Suárez</p>
      </div>

      <div className="footer-right">
        <span className="footer-text">Síguenos en redes:</span>
        <div className="footer-links">
          <a href="https://www.facebook.com/tioben" target="_blank" rel="noopener noreferrer" title="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/tioben" target="_blank" rel="noopener noreferrer" title="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@tioben" target="_blank" rel="noopener noreferrer" title="TikTok">
            <FaTiktok />
          </a>
        </div>
      </div>
    </footer>
  );
}
