import React, { useState, useEffect } from 'react';

export default function Typewriter({ text, speed = 100 }) {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse text-blue-400">|</span>
    </span>
  );
}