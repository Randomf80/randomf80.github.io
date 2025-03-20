document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add active class to current nav item
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('nav a');
    menuItems.forEach(item => {
        if(item.href === currentLocation) {
            item.classList.add('active');
        }
    });

    // Verbeterd parallax effect voor tijdlijn items
    const timelineContents = document.querySelectorAll('.timeline-content');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        
        timelineContents.forEach((content, index) => {
            // Verschillende snelheden voor afwisselende items
            const speed = index % 2 === 0 ? 0.05 : 0.03;
            const yPos = scrollPosition * speed;
            
            // Pas alleen transformatie toe op de content, niet het hele item
            content.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Fade-in animatie voor tijdlijn items
    const timelineItems = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
            }
        });
    });

    timelineItems.forEach(item => {
        item.style.opacity = 0;
        observer.observe(item);
    });
});