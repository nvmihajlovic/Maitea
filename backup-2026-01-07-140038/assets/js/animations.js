/**
 * MAITEA Scroll Reveal Animations
 * Intersection Observer za smooth fade-in na scroll
 */

class ScrollReveal {
    constructor() {
        this.options = {
            root: null,
            rootMargin: '0px 0px -100px 0px', // Trigger 100px before element enters viewport
            threshold: 0.15
        };
        
        this.init();
    }
    
    init() {
        // Elementi za animaciju
        const elementsToAnimate = document.querySelectorAll(`
            .service-card,
            .value-item,
            .process-step,
            .gallery-item,
            .contact-card,
            .service-detail,
            .content-text-column,
            .content-image-column,
            .statement-card
        `);
        
        // Dodaj reveal klasu
        elementsToAnimate.forEach((el, index) => {
            el.classList.add('reveal');
            el.style.setProperty('--reveal-delay', `${index * 0.1}s`);
        });
        
        // Kreiraj observer
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                    // Opciono: prestani da posmatraš nakon što se pojavi
                    // this.observer.unobserve(entry.target);
                }
            });
        }, this.options);
        
        // Posmatraj sve elemente
        elementsToAnimate.forEach(el => this.observer.observe(el));
    }
}

/**
 * Parallax Effect za hero slike
 */
class ParallaxEffect {
    constructor() {
        this.parallaxElements = document.querySelectorAll('.hero-image, .content-image, .service-detail-image');
        this.init();
    }
    
    init() {
        if (this.parallaxElements.length === 0) return;
        
        // Samo za desktop (ne mobil)
        if (window.innerWidth < 768) return;
        
        window.addEventListener('scroll', () => {
            requestAnimationFrame(() => this.handleScroll());
        }, { passive: true });
    }
    
    handleScroll() {
        const scrolled = window.pageYOffset;
        
        this.parallaxElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const elementTop = rect.top + scrolled;
            const elementHeight = rect.height;
            
            // Samo ako je element vidljiv na ekranu
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const yPos = (scrolled - elementTop) * 0.3; // 0.3 je parallax faktor
                el.style.transform = `translateY(${yPos}px)`;
            }
        });
    }
}

/**
 * Smooth Scroll za anchor linkove
 */
class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                
                // Preskoči ako je samo #
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (!target) return;
                
                e.preventDefault();
                
                const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80; // 80px offset za header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            });
        });
    }
}

/**
 * Lazy Loading za slike
 */
class LazyImageLoader {
    constructor() {
        this.images = document.querySelectorAll('img[data-src]');
        this.init();
    }
    
    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px 0px' // Učitaj 50px pre nego što uđe u viewport
            });
            
            this.images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback za stare browsere
            this.images.forEach(img => {
                img.src = img.dataset.src;
            });
        }
    }
}

/**
 * Card Hover Tilt Effect (optional, subtle)
 */
class CardTilt {
    constructor() {
        this.cards = document.querySelectorAll('.service-card, .value-item, .contact-card');
        this.init();
    }
    
    init() {
        // Samo za desktop
        if (window.innerWidth < 768) return;
        
        this.cards.forEach(card => {
            card.addEventListener('mousemove', (e) => this.handleMouseMove(e, card));
            card.addEventListener('mouseleave', () => this.handleMouseLeave(card));
        });
    }
    
    handleMouseMove(e, card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20; // Suptilan efekat
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    }
    
    handleMouseLeave(card) {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    }
}

// Initialize all animations
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
} else {
    initAnimations();
}

function initAnimations() {
    new ScrollReveal();
    new ParallaxEffect();
    new SmoothScroll();
    new LazyImageLoader();
    
    // Tilt efekat je optional - može da bude previše za neke korisnike
    // Odkomentiraj sledeću liniju ako želiš tilt:
    // new CardTilt();
}
