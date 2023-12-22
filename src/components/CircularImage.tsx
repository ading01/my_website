import React from "react";

interface CircularImageProps {
  src: string;
  alt?: string;
  borderColor?: string;
  borderWidth?: number;
  size?: number; // You can define a size for the circular frame
}

const CircularImage: React.FC<CircularImageProps> = ({
  src,
  alt = "",
  borderColor = "blue",
  borderWidth = 5,
  size = 200, // Default size, if not specified
}) => {
  const style = {
    borderRadius: "50%",
    border: `${borderWidth}px solid ${borderColor}`,
    width: `${size}px`, // Set a single dimension
    height: `${size}px`,
    objectFit: "cover" as "cover", // TypeScript cast for strict typing
    objectPosition: "center .25px",
  };

  return <img src={src} alt={alt} style={style} />;
};

export default CircularImage;
