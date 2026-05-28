import { motion } from "framer-motion";
import { useState } from "react";

export default function QuestionCard({
  question,
  options,
  onSelect
}) {
  const isFinalQuestion =
    question.includes("Wanna Be Mine");

  const [runawayStyle, setRunawayStyle] =
  useState({
    top: "0px",
    left: "0px"
  });

  const moveButton = () => {

    const isMobile =
      window.innerWidth < 600;

    const maxX =
      isMobile ? 180 : 260;

    const maxY =
      isMobile ? 120 : 180;

    const x =
      Math.random() * maxX -
      maxX / 2;

    const y =
      Math.random() * maxY -
      maxY / 2;

    setRunawayStyle({
      position: "absolute",

      left: `${x}px`,
      top: `${y}px`,
      
      transition:
        "all 0.18s ease",
      transform: `rotate(${Math.random() * 20 - 10}deg)`
    });
  };

  return (
    <motion.div
      className="card"
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.95
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1
      }}
      exit={{
        opacity: 0,
        y: -40
      }}
      transition={{ duration: 0.5 }}
      
    >
      <h2>{question}</h2>

      <div className="options">
        {options.map((opt, i) => {
          const isNoFade =
            isFinalQuestion && i === 2;

          const isRunaway =
            isFinalQuestion && i === 3;

          return (
            <motion.button
              key={i}
              whileHover={{
                scale:
                  !isRunaway ? 1.05 : 1
              }}
              whileTap={{
                scale:
                  !isRunaway ? 0.95 : 1
              }}

              className={
                isNoFade
                  ? "fade-no-btn"
                  : ""
              }

              style={
                isRunaway
                  ? runawayStyle
                  : {}
              }

              onMouseEnter={() => {
                if (isRunaway)
                  moveButton();
              }}

              onTouchStart={() => {
                if (isRunaway)
                  moveButton();
              }}

              onClick={(e) => {

                if (isNoFade) {

                  e.currentTarget.style.opacity = "0.08";
                  e.currentTarget.style.transform =
                    "scale(0.92)";

                  return;
                }

                if (isRunaway) {
                  return;
                }

                onSelect(opt);
              }}
            >
              {opt}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}