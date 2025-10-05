"use client";

import Contact from "@/components/Contact";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] mb:mb-5">
      {/* background grid */}

      <div className="flex flex-col items-center">
        <Contact />
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Bilel Dhahri
        </p>

        {/* Icon-only social links with hover-expand */}
        <div className="social-links">
          <a id="email" className="social-btn flex-center" href="mailto:dhahribilel1807@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="/email.svg" alt="email" width={20} height={20} />
            <span>Email</span>
          </a>
          <a id="linkedin" className="social-btn flex-center" href="https://www.linkedin.com/in/bilel-dhahri-a6a0b6255/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.svg" alt="linkedin" width={20} height={20} />
            <span>LinkedIn</span>
          </a>
          <a id="github" className="social-btn flex-center" href="https://github.com/bileldh-ing" target="_blank" rel="noopener noreferrer">
            <img src="/github.svg" alt="github" width={20} height={20} />
            <span>GitHub</span>
          </a>
          <a id="instagram" className="social-btn flex-center" href="https://www.instagram.com/bileldh_ing/" target="_blank" rel="noopener noreferrer">
            <img src="/insta.svg" alt="instagram" width={20} height={20} />
            <span>Instagram</span>
          </a>
          <a id="facebook" className="social-btn flex-center" href="https://www.facebook.com/b.d15013" target="_blank" rel="noopener noreferrer">
            <img src="/fb.png" alt="facebook" width={20} height={20} />
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
