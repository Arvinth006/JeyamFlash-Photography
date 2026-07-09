/* 
 * JeyamFlash Photography - Category Page JavaScript
 */

// Gallery data for each category
const galleryData = {
    wedding: {
        title: 'Wedding Collection',
        description: 'Capturing the love, joy, and beautiful moments of your special day',
        images: [
            { src: 'Jeyamwedding.jpg', alt: 'Wedding Photography 1' },
            { src: 'Jeyamwedding1.jpg', alt: 'Wedding Photography 2' },
            { src: 'Jeyamwedding2.jpg', alt: 'Wedding Photography 3' },
            { src: 'Jeyamwedding3.jpg', alt: 'Wedding Photography 4' },
            { src: 'Jeyamwedding4.jpg', alt: 'Wedding Photography 5' },
            { src: 'Jeyamwedding5.jpg', alt: 'Wedding Photography 6' },
            { src: 'Jeyamwedding6.jpg', alt: 'Wedding Photography 7' },
            { src: 'Jeyamwedding7.jpg', alt: 'Wedding Photography 8' },
            { src: 'Jeyamwedding8.jpg', alt: 'Wedding Photography 9' },
            { src: 'Jeyamwedding9.jpg', alt: 'Wedding Photography 10' },
            { src: 'Jeyamwedding10.jpg', alt: 'Wedding Photography 11' },
            { src: 'Jeyamwedding11.png', alt: 'Wedding Photography 12' }
        ]
    },
    couple: {
        title: 'Couple Collection',
        description: 'Beautiful traditional photography moments',
        images: [
            { src: 'Jeyamwedding3.jpg', alt: 'Couple Photography 1' },
            { src: 'Jeyamwedding4.jpg', alt: 'Couple Photography 2' },
            { src: 'Jeyamprewed1.jpg', alt: 'Couple Photography 3' },
            { src: 'Jeyamwedding6.jpg', alt: 'Couple Photography 4' }
        ]
    },
    baby: {
        title: 'Baby Collection',
        description: 'Precious moments of newborns and growing babies',
        images: [
            { src: 'JeyamBaby.jpg', alt: 'Baby Photography 1' },
            { src: 'Jeyambaby1.jpg', alt: 'Baby Photography 2' },
            { src: 'Jeyambaby2.jpg', alt: 'Baby Photography 3' },
            { src: 'Jeyambaby3.jpg', alt: 'Baby Photography 4' },
            { src: 'Jeyambaby4.jpg', alt: 'Baby Photography 5' },
            { src: 'Jeyambaby5.jpg', alt: 'Baby Photography 6' },
            { src: 'Jeyambaby6.jpg', alt: 'Baby Photography 7' },
            { src: 'Jeyambaby7.jpg', alt: 'Baby Photography 8' }
        ]
    },
    couples: {
        title: 'Couples Collection',
        description: 'Beautiful moments of love and togetherness',
        images: [
            { src: 'Jeyamprewed1.jpg', alt: 'Couples Photography 1' },
            { src: 'prewed.jpg', alt: 'Couples Photography 2'  },
            { src: 'prewed2.jpg', alt: 'Couples Photography 3' },
            { src: 'prewed3.jpg', alt: 'Couples Photography 4' },
            { src: 'prewed4.jpg', alt: 'Couples Photography 5' },
            { src: 'Jeyamprewed2.jpg', alt: 'Couples Photography 8' },
            { src: 'Jeyamprewed3.jpg', alt: 'Couples Photography 9' },
            { src: 'Jeyamprewed4.jpg', alt: 'Couples Photography 10' },
            { src: 'Jeyamprewed5.jpg', alt: 'Couples Photography 11' },
            { src: 'Jeyamprewed6.jpg', alt: 'Couples Photography 12' },
            { src: 'Jeyamprewed7.jpg', alt: 'Couples Photography 13' },
            { src: 'Jeyamprewed8.jpg', alt: 'Couples Photography 14' },
            { src: 'Jeyamprewed9.jpg', alt: 'Couples Photography 15' },
            { src: 'Jeyamprewed10.jpg', alt: 'Couples Photography 16' },
            { src: 'Jeyamprewed11.jpg', alt: 'Couples Photography 17' }, 
        ]
    },
    traditional: {
        title: 'Traditional Collection',
        description: 'Beautiful traditional photography moments',
        images: [
            { src: 'JeyamTraditional.jpg', alt: 'Traditional Photography 1' },
            { src: 'Jeyamtraditional1.jpg', alt: 'Traditional Photography 2' },
            { src: 'Jeyamtraditional2.jpg', alt: 'Traditional Photography 3' },
            { src: 'Jeyamtraditional3.jpg', alt: 'Traditional Photography 4' }
        ]
    },
    maternity: {
        title: 'Maternity Collection',
        description: 'Celebrating the beautiful journey of motherhood',
        images: [
            { src: 'JeyamMaternity.jpg', alt: 'Maternity Photography 1' },
            { src: 'Jeyammaternity2.jpg', alt: 'Maternity Photography 2' },
            { src: 'Jeyammaternity3.jpg', alt: 'Maternity Photography 3' },
            { src: 'Jeyammaternity4.jpg', alt: 'Maternity Photography 4' },
            { src: 'Jeyammaternity5.jpg', alt: 'Maternity Photography 5' },
            { src: 'Jeyammaternity6.jpg', alt: 'Maternity Photography 6' },
            { src: 'Jeyammaternity7.jpg', alt: 'Maternity Photography 7' },
            { src: 'Jeyammaternity8.jpg', alt: 'Maternity Photography 8' },
            { src: 'Jeyammaternity9.jpg', alt: 'Maternity Photography 9' }, 
        ]
    },
    groom: {
        title: 'Groom Collection',
        description: 'Stunning portraits and moments of the groom',
        images: [
            { src: 'Jeyamgroom.jpg', alt: 'Groom Photography 1' },
            { src: 'Jeyamgroom2.jpg', alt: 'Groom Photography 2' },
            { src: 'Jeyamgroom3.jpg', alt: 'Groom Photography 3' },
            { src: 'Jeyamgroom4.jpg', alt: 'Groom Photography 4' },
            { src: 'Jeyamgroom5.jpg', alt: 'Groom Photography 5' },
        ]
    },
    model: {
        title: 'Models Collection',
        description: 'Stunning portraits and moments of the models',
        images: [
            { src: 'Jeyammodel.jpg', alt: 'Models Photography 1' },
            { src: 'Jeyammodel2.jpg', alt: 'Models Photography 2' },
            { src: 'Jeyammodel3.jpg', alt: 'Models Photography 3' },
            { src: 'Jeyammodel1.jpg', alt: 'Models Photography 4' }
        ]
    },
    bride: {
        title: 'Bride Collection',
        description: 'Stunning bridal portraits and moments',
        images: [
            { src: 'JeyamBride.jpg', alt: 'Bride Photography 1' },
            { src: 'Jeyambride2.jpg', alt: 'Bride Photography 2' },
            { src: 'Jeyambride3.jpg', alt: 'Bride Photography 3' },
            { src: 'Jeyambride4.jpg', alt: 'Bride Photography 4' },
            { src: 'Jeyambride5.jpg', alt: 'Bride Photography 5' },
            { src: 'Jeyambride6.jpg', alt: 'Bride Photography 6' },
            { src: 'Jeyambride7.jpg', alt: 'Bride Photography 7' },
            { src: 'Jeymbride4.jpg', alt: 'Bride Photography 8' },
             { src: 'bride1.jpg', alt: 'Bride Photography 9' },
        ]
    },
    'birthday baby': {
        title: 'Birthday Baby Collection',
        description: 'Capturing the joy and excitement of birthday celebrations',
        images: [
            { src: 'birthday.JPG', alt: 'Birthday Baby Photography 1' },
            { src: 'birthday2.JPG', alt: 'Birthday Baby Photography 2' },
            { src: 'birthday3.JPG', alt: 'Birthday Baby Photography 3' },
            { src: 'birthday4.JPG', alt: 'Birthday Baby Photography 4' }
        ]
    },

    housewarming: {
        title: 'Housewarming Collection',
        description: 'Celebrating the new home and its inhabitants',
        images: [
            { src: 'House1.jpg', alt: 'Housewarming Photography 1' },
            { src: 'House2.jpg', alt: 'Housewarming Photography 2' },
            { src: 'House3.jpg', alt: 'Housewarming Photography 3' },
            { src: 'House4.jpg', alt: 'Housewarming Photography 4' },
            { src: 'House5.jpg', alt: 'Housewarming Photography 5' },
            { src: 'House6.jpg', alt: 'Housewarming Photography 6' },
            { src: 'House7.jpg', alt: 'Housewarming Photography 7' },
            { src: 'House8.jpg', alt: 'Housewarming Photography 8' },
            { src: 'House9.jpg', alt: 'Housewarming Photography 9' },
        ]
    }
};

            

document.addEventListener('DOMContentLoaded', () => {
    // Get category from URL parameter
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category') || 'wedding';
    
    // Load category data
    loadCategory(category);
    
    // Custom Cursor (same as main site)
    setupCustomCursor();
    
    // Mobile Menu Toggle
    setupMobileMenu();
    
    // Setup Lightbox
    setupLightbox();
    
    // Sticky Navbar on Scroll
    setupStickyNavbar();
});

/**
 * Load category gallery
 */
function loadCategory(category) {
    const categoryData = galleryData[category];
    
    if (!categoryData) {
        // Invalid category - show error
        showEmptyState();
        return;
    }
    
    // Update page title
    document.title = `JeyamFlash Photography | ${categoryData.title}`;
    
    // Update header
    document.getElementById('categoryTitle').textContent = categoryData.title;
    document.getElementById('categoryDesc').textContent = categoryData.description;
    
    // Load gallery items
    loadGalleryItems(categoryData.images);
}

/**
 * Load gallery items into the grid
 */
function loadGalleryItems(images) {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';
    
    images.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img class="gallery-item-img" src="${image.src}" alt="${image.alt}" loading="lazy">
            <div class="gallery-item-overlay">
                <button class="expand-icon" data-index="${index}">
                    <i class="fas fa-expand"></i>
                </button>
            </div>
        `;
        
        galleryGrid.appendChild(galleryItem);
        
        // Click the full-size button or any image area to open the lightbox
        const expandBtn = galleryItem.querySelector('.expand-icon');
        expandBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openLightbox(index);
        });

        galleryItem.querySelector('.gallery-item-img').addEventListener('click', () => {
            openLightbox(index);
        });

        galleryItem.addEventListener('click', () => {
            openLightbox(index);
        });
    });
}

/**
 * Show empty state when no images available
 */
function showEmptyState() {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = `
        <div class="empty-state" style="grid-column: 1/-1;">
            <div class="empty-state-icon">
                <i class="fas fa-image"></i>
            </div>
            <h2>Category Not Found</h2>
            <p>Sorry, we couldn't find the category you're looking for.</p>
            <a href="index.html#portfolio" class="btn btn-primary">Back to Portfolio</a>
        </div>
    `;
}

/**
 * Setup Custom Cursor
 */
function setupCustomCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    if (window.matchMedia("(pointer: fine)").matches) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        const hoverElements = document.querySelectorAll('a, button, .gallery-item');
        
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursorOutline.style.width = '60px';
                cursorOutline.style.height = '60px';
                cursorOutline.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
            });

            element.addEventListener('mouseleave', () => {
                cursorOutline.style.width = '40px';
                cursorOutline.style.height = '40px';
                cursorOutline.style.backgroundColor = 'transparent';
            });
        });
    }
}

/**
 * Setup Mobile Menu
 */
function setupMobileMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li a');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('open');
            navLinks.classList.toggle('active');
        });

        navLinksItems.forEach(item => {
            item.addEventListener('click', () => {
                menuBtn.classList.remove('open');
                navLinks.classList.remove('active');
            });
        });
    }
}

/**
 * Setup Sticky Navbar
 */
function setupStickyNavbar() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/**
 * Setup Lightbox
 */
function setupLightbox() {
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', prevImage);
    lightboxNext.addEventListener('click', nextImage);
    
    // Close on background click
    lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) {
            closeLightbox();
        }
    });
    
    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        if (!lightboxModal.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
    });
}

let currentImageIndex = 0;
let currentImages = [];

/**
 * Open Lightbox
 */
function openLightbox(index) {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category') || 'wedding';
    const categoryData = galleryData[category];

    currentImages = categoryData.images;
    currentImageIndex = index;

    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImage = document.getElementById('lightboxImage');

    lightboxImage.src = currentImages[currentImageIndex].src;
    lightboxImage.alt = currentImages[currentImageIndex].alt;

    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    updateLightboxNav();
}

/**
 * Close Lightbox
 */
function closeLightbox() {
    const lightboxModal = document.getElementById('lightboxModal');
    lightboxModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

/**
 * Previous Image
 */
function prevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateLightboxImage();
    }
}

/**
 * Next Image
 */
function nextImage() {
    if (currentImageIndex < currentImages.length - 1) {
        currentImageIndex++;
        updateLightboxImage();
    }
}

/**
 * Update Lightbox Image
 */
function updateLightboxImage() {
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = currentImages[currentImageIndex].src;
    lightboxImage.alt = currentImages[currentImageIndex].alt;
    updateLightboxNav();
}

/**
 * Update Navigation Buttons
 */
function updateLightboxNav() {
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    
    lightboxPrev.disabled = currentImageIndex === 0;
    lightboxNext.disabled = currentImageIndex === currentImages.length - 1;
}
