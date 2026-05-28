import { motion } from "framer-motion";

export default function LoveReveal() {
  return (
    <motion.div
      className="reveal"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        💖 Happy Valentine’s Day 💖
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        You are not just someone I like…  
        You are someone my heart feels safe with.  
        Thank you for being you 🫶
      </motion.p>

      <motion.div
        className="signature"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        — Always yours ❤️
      </motion.div>
    </motion.div>
  );
}
