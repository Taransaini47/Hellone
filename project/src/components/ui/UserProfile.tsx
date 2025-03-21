import React from 'react';
import { motion } from 'framer-motion';
import { LogOut, User } from 'lucide-react';
import { auth } from '../../config/firebase';
import { useAuth } from '../auth/AuthContext';

export const UserProfile = () => {
  const { user } = useAuth();
  
  // Extract username from email (remove @bargaingamers.com)
  const username = user?.email?.split('@')[0];

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 text-white/70 hover:text-white">
        <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
      </button>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute right-0 mt-2 w-48 py-2 bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl invisible group-hover:visible"
      >
        <div className="px-4 py-2 border-b border-white/10">
          <p className="text-sm font-medium text-white">{username}</p>
        </div>
        <button
          onClick={() => auth.signOut()}
          className="w-full flex items-center gap-2 px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </motion.div>
    </div>
  );
};