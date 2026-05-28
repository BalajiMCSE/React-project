import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import QuestionCard from "./components/QuestionCard";
import FloatingHearts from "./components/FloatingHearts";
import BackgroundMusic from "./components/BackgroundMusic";
import PhotoReveal from "./components/PhotoReveal";
import LoveLetter from "./components/LoveLetter";
import QuestionTracker from "./components/QuestionTracker";
import TornPhotoReveal from "./components/TornPhotoReveal";
import questions from "./data/questions";
import RoseShower from "./components/RoseShower";
import "./styles.css";


export default function App() {
  const [step, setStep] = useState(0);

  const [answers, setAnswers] = useState([]);

  const next = (selectedOption) => {

    setAnswers(prev => [
      ...prev,
      {
        question:
          questions[step]?.question,

        answer:
          selectedOption ||
          "You can't escape in real life"
      }
    ]);

    setStep(prev => prev + 1);
  };

  return (
    <div className="app">
        <BackgroundMusic />
        <FloatingHearts />
        <RoseShower />

        <AnimatePresence mode="wait">
          {step < questions.length && (
            <QuestionCard
              key={step}
              question={questions[step].question}
              options={questions[step].options}
              onSelect={(option) =>next(option)}
            />
          )}

          {step === questions.length && (
            <TornPhotoReveal key="photo" onNext={next} />
          )}

          {step === questions.length + 1 && (
            <LoveLetter key="letter" answers={answers}/>
          )}
        </AnimatePresence>
        {step < questions.length && (
        <QuestionTracker
          total={questions.length}
          current={step}
          onBack={() => setStep(prev => Math.max(prev - 1, 0))}
          onNext={() => next()}
        />
        )}
    </div>
  );
}
