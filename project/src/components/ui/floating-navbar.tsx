import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Home, Gamepad, Instagram } from "lucide-react";

interface FloatingNavProps {
  onCartClick: () => void;
  cartCount: number;
}

export const FloatingNav = ({ onCartClick, cartCount }: FloatingNavProps) => {
  const navItems = [
    {
      name: "Home",
      icon: <Home className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />,
      href: "#",
    },
    {
      name: "Games",
      icon: <Gamepad className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />,
      href: "#games",
    },
    {
      name: "Cart",
      icon: (
        <div className="relative">
          <ShoppingCart className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
      ),
      onClick: onCartClick,
    },
    {
      name: "Contact",
      icon: <Instagram className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />,
      href: "https://instagram.com/bargaingamershq",
      target: "_blank"
    }
  ];

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-5 inset-x-0 max-w-2xl mx-auto border border-white/[0.2] rounded-full bg-black/50 shadow-lg backdrop-blur-md z-[5000] px-8 py-3"
    >
      <nav className="flex items-center justify-between">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target={item.target}
            onClick={item.onClick}
            className="group flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            <span>{item.icon}</span>
            <span className="hidden sm:block">{item.name}</span>
          </a>
        ))}
      </nav>
    </motion.div>
  );
};