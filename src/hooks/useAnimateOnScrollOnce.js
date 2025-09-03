import { useEffect, useRef } from 'react';

const useAnimateOnScrollOnce = (threshold = 0.1) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return elementRef;
};

export default useAnimateOnScrollOnce;
