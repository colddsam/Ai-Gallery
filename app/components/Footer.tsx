"use client"; // এটা ফাইলের একদম প্রথম লাইনে লিখো

import { motion } from "framer-motion";
// import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebook, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-black text-gray-300 py-6 "
    >
      <div className="container mx-auto flex flex-col items-center text-center space-y-4">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl font-semibold"
        >
          AI-Generated Anime Wallpapers
        </motion.h2>

        <div className="flex space-x-6">
          {[
            { icon: FaInstagram, link: "https://instagram.com" },
            { icon: FaTwitter, link: "https://twitter.com" },
            { icon: FaFacebook, link: "https://facebook.com" },
            { icon: FaTiktok, link: "https://tiktok.com" },
          ].map(({ icon: Icon, link }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl text-gray-400 hover:text-white transition"
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-sm"
        >
          &copy; {new Date().getFullYear()} Anime Wallpapers. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
}
