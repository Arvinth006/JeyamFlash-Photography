/* 
 * JeyamFlash Photography - JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    // Only apply custom cursor on non-touch devices
    if (window.matchMedia("(pointer: fine)").matches) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Add a slight delay to the outline for a cool effect
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Hover effect for links and buttons
        const hoverElements = document.querySelectorAll('a, button, .portfolio-item');
        
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

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li a');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            menuBtn.classList.remove('open');
            navLinks.classList.remove('active');
        });
    });

    // Sticky Navbar on Scroll
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate
    const animateElements = document.querySelectorAll('.animate-fade-up, .reveal-up, .reveal-left, .reveal-right');
    
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Hero Background Animation Trigger
    setTimeout(() => {
        document.querySelector('.hero').classList.add('loaded');
        
        // Trigger initial fade-ups in hero
        document.querySelectorAll('.hero .animate-fade-up').forEach(el => {
            el.classList.add('active');
        });
    }, 100);

    // Active Navigation Link on Scroll
    const sections = document.querySelectorAll('section, header');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinksItems.forEach(li => {
            li.classList.remove('active');
            if (li.getAttribute('href') === `#${current}`) {
                li.classList.add('active');
            }
        });
    });

    // Portfolio Filter Buttons now navigate to category pages
    // (See category.html for the full gallery implementation)

    // Phone Number Input — allow only numbers
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            // Remove any non-numeric characters
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        });
    }

    // Contact Form Submission — open WhatsApp with prefilled message
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;

            // Gather form values (note: input id 'email' is used for contact number in markup)
            const name = (document.getElementById('name') || {}).value || '';
            const contact = (document.getElementById('phone') || {}).value || '';
            const email = (document.getElementById('email') || {}).value || '';
            const service = (document.getElementById('service') || {}).value || '';
            const message = (document.getElementById('message') || {}).value || '';

            // Construct message for WhatsApp
            const whatsappMessage = `Hello JeyamFlash, My name is ${name}.\nContact: ${contact}.\nEmail: ${email}.\nService: ${service}.\nMessage: ${message}`;

            const encoded = encodeURIComponent(whatsappMessage);
            // Include country code +91 for the provided number
            const whatsappNumber = '919944253386';
            const url = `https://wa.me/${whatsappNumber}?text=${encoded}`;

            // Provide user feedback on the button
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Opening WhatsApp...';
            btn.disabled = true;

            // Open WhatsApp in a new tab/window
            window.open(url, '_blank');

            // Reset button and optionally reset form after a short delay
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
                // Keep the form values so user can retry; uncomment to reset:
                // contactForm.reset();
            }, 1500);
        });
    }
});
