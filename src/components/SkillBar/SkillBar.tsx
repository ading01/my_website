// SkillBar.tsx
import "./SkillBar.css";

import React, { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  label: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ label, percentage }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // You may want to include visibility checking here to start the animation when the bar is in view
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (isInView) {
          setWidth(percentage);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger it on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, [percentage]);

  return (
    <div ref={ref} className="skill-container">
      <div className="skill-name">{label}</div>
      <div className="skill-bar">
        <div className="skill-percentage" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
};

export default SkillBar;
