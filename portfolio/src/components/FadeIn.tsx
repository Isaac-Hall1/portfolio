import { useEffect, useRef } from 'react';

const FadeInSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            observer.unobserve(entry.target); // Stop observing once the animation is triggered
          }
        });
      },
      { threshold: 0 } // Adjust this threshold as needed
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section); // Observe the outer div
    }

    return () => observer.disconnect(); // Clean up the observer on component unmount
  }, []);

  return (
    <div ref={sectionRef} className="fade-in-element">
      {children}
    </div>
  );
};

export default FadeInSection;
