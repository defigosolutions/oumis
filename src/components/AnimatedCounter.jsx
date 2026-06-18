import { useState, useEffect, useRef } from 'react';

export default function AnimatedCounter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    let startTime;
    let animationFrame;
    let observer;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percent = Math.min(progress / duration, 1);
      
      // ease-out quad
      const easeOut = 1 - (1 - percent) * (1 - percent);
      setCount(Math.floor(easeOut * end));
      
      if (percent < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animationFrame = requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) observer.observe(nodeRef.current);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      if (observer) observer.disconnect();
    };
  }, [end, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}
