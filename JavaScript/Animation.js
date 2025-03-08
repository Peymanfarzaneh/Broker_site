// animation button
const sections = document.querySelectorAll('.hidden');
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
        }
    });
}, options);
sections.forEach(section => {
    observer.observe(section);
});

