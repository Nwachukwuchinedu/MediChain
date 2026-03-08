import { useEffect } from 'react';

export function useScrollReveal() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target as HTMLElement;
                        const animClass = el.dataset.anim; // e.g. "anim-fade-up"
                        if (animClass) {
                            el.classList.remove('scroll-hidden');
                            el.classList.add(animClass);
                        }
                        observer.unobserve(el); // fire once
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );

        // Observe every element that has data-anim attribute
        document.querySelectorAll('[data-anim]').forEach((el) => {
            el.classList.add('scroll-hidden'); // hide until triggered
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);
}
