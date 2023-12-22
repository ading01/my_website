// CircularProgress.tsx

import React, { useEffect, useState } from "react";
import "./CircularProgress.css";

interface CircularProgressProps {
  size: number; // Size of the circular progress bar in pixels
  strokeWidth: number; // Width of the stroke
  percentage: number; // Percentage of the circle to be filled
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  size,
  strokeWidth,
  percentage,
}) => {
  // Calculate the center of the circle
  const center = size / 2;
  // Calculate the radius of the circle
  const radius = size / 2 - strokeWidth / 2;
  // Calculate the circumference of the circle
  const circumference = 2 * Math.PI * radius;
  // Calculate the stroke dash offset
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    // Calculate the offset for the stroke dash
    const progressOffset = ((100 - percentage) / 100) * circumference;
    setOffset(progressOffset);
  }, [setOffset, circumference, percentage, offset]);

  return (
    <svg className="circular-progress" width={size} height={size}>
      <circle
        className="circular-progress__background"
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className="circular-progress__value"
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        // Start the progress marker at the top of the circle
        transform={`rotate(-90 ${center} ${center})`}
        style={{
          strokeDasharray: circumference,
          strokeDashoffset: offset,
        }}
      />
    </svg>
  );
};

export default CircularProgress;
