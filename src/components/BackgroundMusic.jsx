import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0;

    audio.play().catch(() => {});

    const fadeIn = setInterval(() => {
      if (audio.volume < 0.5) {
        audio.volume += 0.02;
      } else {
        clearInterval(fadeIn);
      }
    }, 200);

    return () => clearInterval(fadeIn);
  }, []);

  return <audio ref={audioRef} src="/bg.mp3" loop />;
}
