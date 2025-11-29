import React from "react";
import logo from "../assets/logo.png";
import footer1 from "../assets/footer1.png";
import footer2 from "../assets/footer2.png";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer 
      className="bg-footer bg-cover bg-no-repeat bg-center w-full overflow-hidden relative text-white"
      aria-label="Website Footer"
    >
      <div className="container py-[60px] sm:py-[80px] lg:py-[120px]">

        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div>
            <img 
              src={logo} 
              alt="Modrino bakery logo"
              className="w-[100px] sm:w-[120px]"
            />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-x-5 sm:gap-x-7">
            <p className="font-inter text-[20px] sm:text-[24px] font-semibold text-[#E9BD8D]">
              Follow us
            </p>

            <div className="flex items-center text-[#E9BD8D] text-[26px] sm:text-[30px] gap-x-4">
              <FaFacebook aria-label="Facebook" className="cursor-pointer hover:scale-110 duration-200" />
              <FaPinterest aria-label="Pinterest" className="cursor-pointer hover:scale-110 duration-200" />
              <IoLogoWhatsapp aria-label="WhatsApp" className="cursor-pointer hover:scale-110 duration-200" />
              <AiFillInstagram aria-label="Instagram" className="cursor-pointer hover:scale-110 duration-200" />
            </div>
          </div>
        </div>

        {/* Footer Body */}
        <div className="pt-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">

            {/* About Section */}
            <address className="not-italic">
              <h2 className="text-[#E9BD8D] text-[28px] sm:text-[32px] font-inter font-semibold pb-4">
                About Us
              </h2>
              <ul className="text-[20px] sm:text-[22px] font-medium flex flex-col gap-y-3">
                <li>+88017 234 56789</li>
                <li>info@modrino.co.uk</li>
                <li>South 13th Street</li>
                <li>New York, America</li>
              </ul>
            </address>

            {/* Explore Navigation */}
            <nav aria-label="Footer Navigation">
              <h2 className="text-[#E9BD8D] text-[28px] sm:text-[32px] font-inter font-semibold pb-4">
                Explore
              </h2>
              <ul className="text-[20px] sm:text-[22px] font-medium flex flex-col gap-y-3">
                <li className="cursor-pointer hover:text-[#E9BD8D] duration-200">Home</li>
                <li className="cursor-pointer hover:text-[#E9BD8D] duration-200">Blog</li>
                <li className="cursor-pointer hover:text-[#E9BD8D] duration-200">Contact Us</li>
                <li className="cursor-pointer hover:text-[#E9BD8D] duration-200">Services</li>
              </ul>
            </nav>

            {/* Recent News */}
            <div>
              <h2 className="text-[#E9BD8D] text-[28px] sm:text-[32px] font-inter font-semibold pb-4">
                Recent News
              </h2>

              <div className="flex flex-col gap-y-6">
                {/* Card 1 */}
                <div className="flex items-center gap-x-4">
                  <img 
                    src={footer1} 
                    alt="Fresh puff pastry displayed on a tray" 
                    className="w-[120px] sm:w-[150px] rounded-lg"
                  />
                  <div>
                    <p className="text-[#E9BD8D] font-poppins text-[18px]">June 14, 2024</p>
                    <p className="text-[20px]">Puff pastry bliss.</p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex items-center gap-x-4">
                  <img 
                    src={footer2} 
                    alt="Sweet tart with cream topping" 
                    className="w-[120px] sm:w-[150px] rounded-lg"
                  />
                  <div>
                    <p className="text-[#E9BD8D] font-poppins text-[18px]">June 14, 2024</p>
                    <p className="text-[20px]">Tart that melts hearts.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
