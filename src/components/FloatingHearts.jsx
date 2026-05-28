import { motion } from "framer-motion";

const particles = Array.from({ length: 36 });

export default function FloatingHearts() {
  const icons = [
    "❤️",
    "💖",
    "✨",
    "🌸"
  ];

  return (
    <div className="hearts-container">
      {particles.map((_, i) => {

        const icon =
          icons[
            Math.floor(
              Math.random() *
              icons.length
            )
          ];

        const size =
          14 + Math.random() * 28;

        return (
          <motion.span
            key={i}
            className="heart"

            initial={{
              opacity: 0,

              y: "110vh",

              x:
                Math.random() *
                window.innerWidth
            }}

            animate={{
              opacity: [
                0,
                0.9,
                0.9,
                0
              ],

              y: "-15vh",

              x:
                Math.random() *
                window.innerWidth
            }}

            transition={{
              duration:
                8 +
                Math.random() * 8,

              repeat: Infinity,

              delay:
                Math.random() * 5,

              ease: "linear"
            }}

            style={{
              fontSize: `${size}px`
            }}
          >
            {icon}
          </motion.span>
        );
      })}
    </div>
  );
}