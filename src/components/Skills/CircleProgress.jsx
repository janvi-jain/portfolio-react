import { useEffect, useState } from "react";

function CircleProgress({ percentage, title }) {
  const [progress, setProgress] = useState(0);

  const radius = 90;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    let start = 0;

    const interval = setInterval(() => {
      start += 1;
      setProgress(start);

      if (start >= percentage) clearInterval(interval);
    }, 15);

    return () => clearInterval(interval);
  }, [percentage]);

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="text-center">
      <div className="position-relative d-flex justify-content-center align-items-center">

        <svg width="200" height="200">
          
          {/* Background */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke="#e6e6e6"
            strokeWidth="3"
            fill="none"
          />

          {/* Glow effect */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Progress */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke="#80db66"
            strokeWidth="3"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            filter="url(#glow)"
            style={{
              transition: "stroke-dashoffset 0.3s ease",
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
            }}
          />
        </svg>

        {/* Center Text */}
        <div className="position-absolute">
          <h4 className="fw-bold m-0">{progress}%</h4>
        </div>
      </div>

      <p className="mt-3 fw-semibold">{title}</p>
    </div>
  );
}

export default CircleProgress;