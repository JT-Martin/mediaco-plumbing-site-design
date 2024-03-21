"use client";
import { useState, useEffect } from "react";

export default function Time() {
  const [currentTime, setCurrentTime] = useState();
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    }, 1000);

    // Clean up the timer when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  return <div className="text-gray-50 text-xs">{currentTime}</div>;
}
