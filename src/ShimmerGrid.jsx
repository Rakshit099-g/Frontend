import React, { useState } from "react";
import { motion } from "@motionone/react";

const patterns = [
  "dots",
  "lines",
  "squares",
  "hexagons",
  "circles",
  "waves",
  "diagonal",
];

const ShimmerGrid = ({
  pattern = "dots",
  hoverColor = "#ffffff",
  tileSize = 10,
  radius = 50,
}) => {
  const [hovered, setHovered] = useState(false);

  const patternClass = `pattern-${pattern}`;

  return (
    <div
      className={`relative grid gap-[${tileSize}px] rounded-[${radius}%] overflow-hidden ${patternClass}`}
      style={{
        gridTemplateColumns: `repeat(auto-fill, minmax(${tileSize}px, 1fr))`,
        backgroundColor: hoverColor,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/30 to-white/10 bg-[length:200%_100%]"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          animation: "shimmer 1.5s infinite linear",
        }}
      />
      {/* Optional content can go here */}
    </div>
  );
};

export default ShimmerGrid;
