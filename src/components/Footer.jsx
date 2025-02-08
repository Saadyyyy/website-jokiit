import './Footer.css';
import instagramIcon from '../assets/img/ig.png';
import phoneIcon from '../assets/img/phone.png';
import tiktokIcon from '../assets/img/tiktok.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-icons">
          <a href="https://www.instagram.com/jokiit_com/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
          <a href="tel:+123456789" target="_blank" rel="noopener noreferrer">
            <img src={phoneIcon} alt="Phone" className="social-icon" />
          </a>
          <a href="https://www.tiktok.com/@jokiit.com" target="_blank" rel="noopener noreferrer">
            <img src={tiktokIcon} alt="Tiktok" className="social-icon" />
          </a>
        </div>
        <div className="footer-copyright">
          <p>© 2025 Hak Cipta Joki IT</p>
        </div>
      </div>
    </footer>
  );
};
