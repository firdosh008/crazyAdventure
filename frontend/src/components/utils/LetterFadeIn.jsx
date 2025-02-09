export const LetterFadeIn = ({ text }) => {
  return (
    <div className="left-0 right-0 text-center text-black">
      {[...text].map((letter, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            opacity: 0,
            animation: `fadeIn 0.1s forwards ${index * 0.02}s`,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};
