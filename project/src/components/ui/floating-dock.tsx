import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Home, Gamepad, Search, Instagram } from "lucide-react";

export const FloatingDock = () => {
  const scrollToSearch = () => {
    const searchElement = document.getElementById("search");
    searchElement?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    {
      name: "Home",
      icon: <Home className="h-6 w-6" />,
      href: "#",
    },
    {
      name: "Games",
      icon: <Gamepad className="h-6 w-6" />,
      href: "#games",
    },
    {
      name: "Search",
      icon: <Search className="h-6 w-6" />,
      onClick: scrollToSearch,
    },
    {
      name: "Cart",
      icon: <ShoppingCart className="h-6 w-6" />,
      href: "#cart",
    },
    {
      name: "Contact",
      icon: <Instagram className="h-6 w-6" />,
      href: "https://instagram.com/bargaingamershq",
      target: "_blank"
    }
  ];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-lg border border-white/10 px-8 py-4 rounded-full z-50"
    >
      <nav className="flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target={item.target}
            onClick={item.onClick}
            className="text-white/70 hover:text-white transition-colors duration-200"
          >
            {item.icon}
          </a>
        ))}
      </nav>
    </motion.div>
  );
};