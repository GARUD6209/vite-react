import { useEffect, useState } from "react";

function MouseTracker() {
  const [mousePostion, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div>
        <h2>Mouse Tracker</h2>
        <p>
          x:{mousePostion.x} y:{mousePostion.y}
        </p>
      </div>
    </>
  );
}

export default MouseTracker;
