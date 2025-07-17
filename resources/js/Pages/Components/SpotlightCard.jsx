import { useRef } from "react";
import "../../../css/SpotlightCard.css"

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(255, 255, 255, 0.05)", imageSrc }) => {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate mouse position as a percentage of the element's dimensions
      const mouseXPercent = (x / rect.width) * 100;
      const mouseYPercent = (y / rect.height) * 100;

      divRef.current.style.setProperty("--mouse-x", `${mouseXPercent}%`);
      divRef.current.style.setProperty("--mouse-y", `${mouseYPercent}%`);
      divRef.current.style.setProperty("--spotlight-color", spotlightColor);
    }
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`card-spotlight ${className}`}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt=""
          className="card-spotlight-image"
          // Add an error handler for broken image links
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/600x400/1a202c/ffffff?text=Image+Not+Found';
          }}
        />
      )}
      <div className="card-spotlight-content">
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;
