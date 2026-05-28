import { motion } from "framer-motion";
import generateLovePdf from "./generateLovePdf";
import "./LoveLetter.css";

const paragraph = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.4 }
  })
};

export default function LoveLetter({answers}) {
  const text = [
    "To My Love ❤️",
    "I don’t know when it happened,but somewhere between our talks,your laughter, and your silence… you became important to me.",
    "You make ordinary moments feel special. You make distance feel lighter. You make my heart feel calm.This is real, quiet, honest love.",
    "Always choosing you ❤️"
  ];

  return (
    <motion.div
      className="letter"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      {text.map((t, i) => (
        <motion.p
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={paragraph}
        >
          {t}
        </motion.p>
      ))}

      <div className="letter-footer">
        <motion.div
          className="signature"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          — Yours ❤️
        </motion.div>

        <button
          className="surprise-link"
          onClick={() => {
            const event =
              new CustomEvent("roseShower");

            window.dispatchEvent(event);
            generateLovePdf(answers);
          }}
        >
          One last little surprise for you 🌹
        </button>
      </div>
    </motion.div>
  );
}
