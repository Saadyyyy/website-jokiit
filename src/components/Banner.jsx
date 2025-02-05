import { useState, useEffect } from "react";
import image from "../assets/img/image.png";
import ellipse from "../assets/img/ellipse2.png";
import ellipse2 from "../assets/img/ellipse1.png";

import "./Banner.css";

export const Banner = () => {
  const fullTextArray = [
    "Anda Butuh Bantuan Profesional ",
    "Menyelesaikan Masalah IT Anda? ",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (isWaiting) return;

    const interval = setInterval(() => {
      const currentText = fullTextArray[lineIndex];
      if (charIndex < currentText.length) {
        setDisplayedText((prev) => prev + currentText.charAt(charIndex));
        setCharIndex((prevIndex) => prevIndex + 1);
      } else {
        // Saat satu baris selesai, tunggu 1 detik lalu lanjut ke baris berikutnya
        clearInterval(interval);
        if (lineIndex < fullTextArray.length - 1) {
          setTimeout(() => {
            setDisplayedText((prev) => prev + "\n"); // Menambahkan baris baru
            setLineIndex((prevIndex) => prevIndex + 1);
            setCharIndex(0);
          }, 0); // Delay sebelum ke baris berikutnya
        } else {
          // Semua baris selesai, tunggu 3 detik lalu reset
          setIsWaiting(true);
          setTimeout(() => {
            setDisplayedText("");
            setLineIndex(0);
            setCharIndex(0);
            setIsWaiting(false);
          }, 7000); // Delay 3 detik sebelum reset
        }
      }
    }, 30); // Kecepatan per huruf

    return () => clearInterval(interval);
  }, [charIndex, lineIndex, isWaiting]);

  return (
    <section className="banner">
      <div className="banner-container">
        <div className="banner-text">
          <pre className="animated-text">{displayedText}</pre>
          <p className="banner-text-small">
            Jangan khawatir, tim Joki IT siap membantu! Hubungi kami
          </p>
          <p className="banner-text-small">
            sekarang dan dapatkan solusi cepat, efisien, dan terpercaya
          </p>
          <p className="banner-text-small">
            untuk semua kebutuhan teknologi anda
          </p>
          <br />
          <div className="banner-text-order">
            <a
              target="_blank"
              href="https://wa.me/6287817649178?text=Halo kak saya mau joki di JOKI IT!!"
            >
              Order Langsung
            </a>
          </div>
          <img src={ellipse2} className="ellipse2" alt="" />
        </div>
        <div className="banner-image">
          <img className="banner-image-i bounce" src={image} alt="Banner" />
        </div>

        <img src={ellipse} className="ellipse1" alt="" />
      </div>
    </section>
  );
};
