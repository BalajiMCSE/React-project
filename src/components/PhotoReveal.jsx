import { motion } from "framer-motion";

export default function PhotoReveal({ onNext }) {
  return (
    <motion.div
      className="reveal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src="/final-photo.jpg"
        alt="Us"
        className="final-photo"
        style = {{ color : "chocolate"}}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style = {{ color : "chocolate"}}
      >
        This is my favorite picture…  
        because it holds my favorite feeling ❤️
      </motion.p>

      <motion.button
        className="next-btn"
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
      >
        Read my letter 💌
      </motion.button>
    </motion.div>
  );
}
