import {
  useEffect,
  useState
} from "react";

import {
  motion,
  AnimatePresence
} from "framer-motion";

export default function RoseShower() {
  const [show, setShow] =
    useState(false);

  const [showGif, setShowGif] =
    useState(false);

  const [wave, setWave] =
    useState(0);

  useEffect(() => {
    const trigger = () => {

        setShowGif(true);

        setTimeout(() => {
            setShow(true);

            let count = 0;

            const interval = setInterval(() => {

            setWave(prev => prev + 1);

            count++;

            if (count === 3) {
                clearInterval(interval);
            }

            }, 3000);

        }, 800);

        setTimeout(() => {
            setShowGif(false);
        }, 7600);

        setTimeout(() => {
            setShow(false);
        }, 11000);
    };

    window.addEventListener(
      "roseShower",
      trigger
    );

    return () =>
      window.removeEventListener(
        "roseShower",
        trigger
      );
  }, []);

  const roses =
    Array.from({ length: 35 });

  return (
    <AnimatePresence>
      {show && (
        <>
        {showGif && (
            <motion.div
            className="surprise-gif-wrapper"

            initial={{
                opacity: 0,
                scale: 0.7
            }}

            animate={{
                opacity: 1,
                scale: [0.88, 1.03, 1],
                y: [20, -8, 0, 0]
            }}

            exit={{
                opacity: 0,
                scale: 0.85
            }}

            transition={{
                duration: 1.8,
                ease: "easeInOut"
            }}
            >
            <img
                src="/surprise.gif"
                alt="surprise"
                className="surprise-gif"
            />
            </motion.div>
        )}
          <motion.div
            className="rose-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <div
            className="rose-container"
            key={wave}
          >
            {roses.map((_, i) => {
                const items = [
                    "🌹",
                    "🌸",
                    "💖",
                    "✨",
                    "❤️"
                ];

                const item =
                    items[
                    Math.floor(
                        Math.random() *
                        items.length
                    )
                    ];

                const isRose =
                    item === "🌹";

                return (
                    <motion.div
                    key={i}
                    className="rose"
                    initial={{
                        opacity: 0,
                        x:
                        Math.random() *
                        window.innerWidth,
                        y: -150,
                        rotate:
                        Math.random() * 180
                    }}
                    animate={{
                        opacity: [0, 1, 1, 0],

                        x:
                        Math.random() *
                        window.innerWidth,

                        y:
                        window.innerHeight +
                        150,

                        rotate:
                        Math.random() * 360
                    }}
                    transition={{
                        duration:
                        4 +
                        Math.random() * 3,

                        delay:
                        Math.random() * 0.8,

                        ease: "linear"
                    }}

                    style={{
                        fontSize: isRose
                            ? `${
                                window.innerWidth < 500
                                    ? 70 + Math.random() * 30
                                    : 120 + Math.random() * 40
                                }px`
                            : `${
                                window.innerWidth < 500
                                    ? 24 + Math.random() * 10
                                    : 40 + Math.random() * 12
                                }px`
                    }}
                    >
                    {item}
                    </motion.div>
                );
                })}
          </div>
        </>
      )}
    </AnimatePresence>
  );
}