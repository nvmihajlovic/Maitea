/**
 * MAITEA Premium Lightbox
 * Full-screen image viewer sa navigation, zoom, i smooth animations
 */

class PremiumLightbox {
    constructor() {
        this.currentIndex = 0;
        this.images = [];
        this.isOpen = false;
        this.isZoomed = false;
        
        this.init();
    }
    
    init() {
        this.createLightboxHTML();
        this.bindEvents();
        this.collectGalleryImages();
    }
    
    createLightboxHTML() {
        const lightbox = document.createElement('div');
        lightbox.className = 'premium-lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-backdrop"></div>
            <button class="lightbox-close" aria-label="Zatvori">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            <button class="lightbox-prev" aria-label="Prethodna slika">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            <button class="lightbox-next" aria-label="Sledeća slika">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
            <div class="lightbox-content">
                <img class="lightbox-image" src="" alt="">
                <div class="lightbox-counter"></div>
            </div>
            <button class="lightbox-zoom" aria-label="Zoom">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
            </button>
        `;
        
        document.body.appendChild(lightbox);
        this.lightbox = lightbox;
        this.lightboxImage = lightbox.querySelector('.lightbox-image');
        this.lightboxCounter = lightbox.querySelector('.lightbox-counter');
    }
    
    collectGalleryImages() {
        const galleryItems = document.querySelectorAll('.gallery-item img, .content-image, .side-image, .service-detail-image');
        
        this.images = Array.from(galleryItems).map((img, index) => {
            // Dodaj click listener na svaku sliku
            img.style.cursor = 'pointer';
            img.addEventListener('click', (e) => {
                e.preventDefault();
                this.open(index);
            });
            
            return {
                src: img.src,
                alt: img.alt || ''
            };
        });
    }
    
    bindEvents() {
        // Close button
        this.lightbox.querySelector('.lightbox-close').addEventListener('click', () => this.close());
        
        // Navigation buttons
        this.lightbox.querySelector('.lightbox-prev').addEventListener('click', () => this.prev());
        this.lightbox.querySelector('.lightbox-next').addEventListener('click', () => this.next());
        
        // Zoom button
        this.lightbox.querySelector('.lightbox-zoom').addEventListener('click', () => this.toggleZoom());
        
        // Backdrop click to close
        this.lightbox.querySelector('.lightbox-backdrop').addEventListener('click', () => this.close());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!this.isOpen) return;
            
            switch(e.key) {
                case 'Escape':
                    this.close();
                    break;
                case 'ArrowLeft':
                    this.prev();
                    break;
                case 'ArrowRight':
                    this.next();
                    break;
                case 'z':
                case 'Z':
                    this.toggleZoom();
                    break;
            }
        });
        
        // Pinch to zoom on mobile
        let initialDistance = 0;
        this.lightboxImage.addEventListener('touchstart', (e) => {
            if (e.touches.length === 2) {
                initialDistance = this.getDistance(e.touches[0], e.touches[1]);
            }
        });
        
        this.lightboxImage.addEventListener('touchmove', (e) => {
            if (e.touches.length === 2) {
                const currentDistance = this.getDistance(e.touches[0], e.touches[1]);
                if (currentDistance > initialDistance * 1.1 && !this.isZoomed) {
                    this.toggleZoom();
                } else if (currentDistance < initialDistance * 0.9 && this.isZoomed) {
                    this.toggleZoom();
                }
            }
        });
    }
    
    getDistance(touch1, touch2) {
        const dx = touch1.clientX - touch2.clientX;
        const dy = touch1.clientY - touch2.clientY;
        return Math.sqrt(dx * dx + dy * dy);
    }
    
    open(index) {
        this.currentIndex = index;
        this.isOpen = true;
        this.updateImage();
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        
        // Show lightbox
        this.lightbox.classList.add('active');
        
        // Animate in
        setTimeout(() => {
            this.lightbox.classList.add('visible');
        }, 10);
    }
    
    close() {
        this.isOpen = false;
        this.isZoomed = false;
        
        // Hide lightbox
        this.lightbox.classList.remove('visible');
        
        // Remove after animation
        setTimeout(() => {
            this.lightbox.classList.remove('active');
            document.body.style.overflow = '';
            this.lightboxImage.classList.remove('zoomed');
        }, 300);
    }
    
    next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateImage();
    }
    
    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.updateImage();
    }
    
    updateImage() {
        const image = this.images[this.currentIndex];
        
        // Fade out
        this.lightboxImage.style.opacity = '0';
        
        setTimeout(() => {
            this.lightboxImage.src = image.src;
            this.lightboxImage.alt = image.alt;
            this.updateCounter();
            
            // Fade in
            this.lightboxImage.style.opacity = '1';
        }, 150);
        
        // Hide/show nav buttons
        const prevBtn = this.lightbox.querySelector('.lightbox-prev');
        const nextBtn = this.lightbox.querySelector('.lightbox-next');
        
        prevBtn.style.opacity = this.currentIndex === 0 ? '0.3' : '1';
        nextBtn.style.opacity = this.currentIndex === this.images.length - 1 ? '0.3' : '1';
    }
    
    updateCounter() {
        this.lightboxCounter.textContent = `${this.currentIndex + 1} / ${this.images.length}`;
    }
    
    toggleZoom() {
        this.isZoomed = !this.isZoomed;
        this.lightboxImage.classList.toggle('zoomed');
        
        const zoomBtn = this.lightbox.querySelector('.lightbox-zoom svg');
        
        if (this.isZoomed) {
            // Change icon to zoom out
            zoomBtn.querySelector('line:nth-child(3)').style.display = 'none';
            zoomBtn.querySelector('line:nth-child(4)').style.display = 'none';
        } else {
            zoomBtn.querySelector('line:nth-child(3)').style.display = 'block';
            zoomBtn.querySelector('line:nth-child(4)').style.display = 'block';
        }
    }
}

// Initialize lightbox when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new PremiumLightbox();
    });
} else {
    new PremiumLightbox();
}
