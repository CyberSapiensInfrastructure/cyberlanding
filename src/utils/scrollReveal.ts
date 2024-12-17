export const initScrollReveal = () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Tüm scroll-reveal elementlerini gözlemle
  document.querySelectorAll('.scroll-reveal').forEach(element => {
    observer.observe(element);
  });
}; 