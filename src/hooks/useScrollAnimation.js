import { useEffect, useRef } from 'react';

/**
 * Activates .fade-up / .fade-in CSS animations via IntersectionObserver.
 * Call this hook in any page/component that uses these animation classes.
 */
export function useScrollAnimation(trigger = null, root = null) {
  const observerRef = useRef(null);

  useEffect(() => {
    const targets = document.querySelectorAll('.fade-up, .fade-in');

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px', root }
    );

    targets.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [trigger, root]);
}
