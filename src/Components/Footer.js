import React from "react";
import FooterLogo from "./assets/Footerlogo.png";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="w-full bg-[#81452E] text-white py-10">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-start px-6">
          
          <div className="space-y-3 text-left">
            <h3 className="text-xl font-bold">Info:</h3>
            <p className="text-lg">Support: info@gopalgirfarm.in</p>
            <p className="text-lg">Email: gopalgirfarm@gmail.com</p>
            <p className="text-lg">Phone: +91-9669105055</p>
            <div className="mt-4 space-y-2">
              <a href="#home" className="block text-lg hover:underline">Home</a>
              <a href="#about" className="block text-lg hover:underline">About</a>
              <a href="#contact" className="block text-lg hover:underline">Contact Us</a>
              <a href="#order" className="block text-lg hover:underline">Order</a>
              <a href="#blog" className="block text-lg hover:underline">Blog</a>
            </div>
          </div>

          
          <div className="flex flex-col items-center text-center mt-2 sm:mt-0">
            <img
              src={FooterLogo}
              alt="Footer Logo"
              className="w-60 h-auto object-contain" 
            />
            <p className="text-[20px] max-w-lg mt-1 font-normal">
              With a commitment to excellence, we thrive in delivering exceptional
              solutions and building lasting partnerships. Our journey is defined
              by a relentless pursuit of growth.
            </p>
            <div className="flex space-x-4 mt-7">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <FaYoutube size={30} />
              </a>
              <a
                href="https://www.instagram.com/gopal.gir.farm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=9669105055&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <FaWhatsapp size={30} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61556444174971"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <FaFacebook size={30} />
              </a>
            </div>
          </div>

        
          <div className="space-y-3 text-right mt-8 sm:mt-0">
            <h3 className="text-xl font-bold">Address:</h3>
            <p className="text-lg">Address: Gopal Gir Cow Farm</p>
            <p className="text-lg">City: Bhavnagar (Gujarat)</p>
            <p className="text-lg">Country: India</p>
            <div className="mt-4 space-y-2">
              <a href="#faqs" className="block text-lg hover:underline">FAQ's</a>
              <a href="#privacy" className="block text-lg hover:underline">Privacy Policy</a>
              <a href="#refund" className="block text-lg hover:underline">Refund Policy</a>
              <a href="#support" className="block text-lg hover:underline">Customer Support</a>
            </div>
          </div>
        </div>
      </footer>
      
      
      <div className="w-full bg-[#D05E2D] text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <p className="text-base sm:text-lg">
            Copyright @2034 Gopal Gir Farm All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
