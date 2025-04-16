import React, { useRef } from "react";

const HorizontalImageScroll = () => {
  const scrollContainerRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    const container = scrollContainerRef.current;
    container.isDown = true;
    container.startX = e.pageX - container.offsetLeft;
    container.scrollLeft = container.scrollLeft;
  };

  const handleMouseLeave = () => {
    const container = scrollContainerRef.current;
    container.isDown = false;
  };

  const handleMouseUp = () => {
    const container = scrollContainerRef.current;
    container.isDown = false;
  };

  const handleMouseMove = (e) => {
    const container = scrollContainerRef.current;
    if (!container.isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - container.startX) * 2; // Adjust the speed
    container.scrollLeft = container.scrollLeft - walk;
  };

  return (
    <div
      ref={scrollContainerRef}
      className="w-full h-96 overflow-x-scroll cursor-grab flex items-end"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <img
        src="/images/runningtrain2.svg"
        alt="Indore Railway Station"
        className="h-full min-w-[350%] object-cover items-start "
      />
    </div>
  );
};

export default HorizontalImageScroll;
