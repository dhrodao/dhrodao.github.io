// Smooth scroll functionality
const scrollIndicator = document.querySelector('.scroll-indicator');
const experienceSection = document.getElementById('experience');

scrollIndicator.addEventListener('click', () => {
    experienceSection.scrollIntoView({ behavior: 'smooth' });
});

// Intersection Observer for timeline animations
const timelineItems = document.querySelectorAll('.timeline-item');

const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const item = entry.target;
        
        if (entry.isIntersecting) {
            const delay = Array.from(timelineItems).indexOf(item) * 200;
            setTimeout(() => {
                item.classList.add('fade-in');
            }, delay);
        } else {
            // Only if scrolling up, remove the fade-in class to allow re-triggering the animation
            if (entry.boundingClientRect.bottom > window.innerHeight / 2) {
                item.classList.remove('fade-in');
            }
        }
    });
}, observerOptions);

timelineItems.forEach(item => {
    observer.observe(item);
});
