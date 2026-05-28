import { motion } from "framer-motion";
import "./TornPhotoReveal.css";

export default function TornPhotoReveal({ onNext }) {
  return (
    <div className="photo-stage">
      <motion.img
        src="/paper.png"
        className="paper"
        initial={{ scale: 1, rotate: 0 }}
        animate={{
          scale: 1.45,
          rotate: 14,
          opacity: 0
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut"
        }}
      />

      <motion.img
        src="/final-photo.png"
        className="photo"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      />

      <motion.p
        className="photo-caption"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        This is my favorite picture…  
        because it holds my favorite feeling ❤️
      </motion.p>

      <motion.button
        className="next-btn"
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={onNext}
      >
        Read my letter 💌
      </motion.button>
    </div>
  );
}
