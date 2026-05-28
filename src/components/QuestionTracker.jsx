import "./QuestionTracker.css";
export default function QuestionTracker({ total, current, onBack, onNext }) {
  return (
    <div className="tracker">
      <button disabled={current === 0} onClick={onBack}>←</button>

      <div className="dots">
        {Array.from({ length: total }).map((_, i) => (
          <span key={i} className={i === current ? "active" : ""} />
        ))}
      </div>

      <button disabled={current === total - 1} onClick={onNext}>→</button>
    </div>
  );
}
