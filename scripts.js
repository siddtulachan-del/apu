// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Newsletter Form Submission (Home Page)
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('newsletterEmail').value;
            const message = document.getElementById('newsletterMessage');
            
            if (validateEmail(email)) {
                message.textContent = 'Thank you for subscribing! You will receive updates via email.';
                message.style.color = '#27ae60';
                newsletterForm.reset();
            } else {
                message.textContent = 'Please enter a valid email address.';
                message.style.color = '#e74c3c';
            }
        });
    }

    // Newsletter Form Submission (News Page)
    const newsletterFormNews = document.getElementById('newsletterFormNews');
    if (newsletterFormNews) {
        newsletterFormNews.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('newsletterEmailNews').value;
            const message = document.getElementById('newsletterMessageNews');
            
            if (validateEmail(email)) {
                message.textContent = 'Thank you for subscribing! You will receive updates via email.';
                message.style.color = '#27ae60';
                newsletterFormNews.reset();
            } else {
                message.textContent = 'Please enter a valid email address.';
                message.style.color = '#e74c3c';
            }
        });
    }

    // Program Registration Form
    const programRegistrationForm = document.getElementById('programRegistrationForm');
    if (programRegistrationForm) {
        programRegistrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('programName').value;
            const email = document.getElementById('programEmail').value;
            const program = document.getElementById('programSelect').value;
            const message = document.getElementById('programRegistrationMessage');
            
            if (name && email && program) {
                if (validateEmail(email)) {
                    message.textContent = `Thank you, ${name}! Your registration for ${program} has been received. We will contact you soon.`;
                    message.style.color = '#27ae60';
                    message.style.backgroundColor = '#d4edda';
                    message.style.padding = '1rem';
                    message.style.borderRadius = '5px';
                    programRegistrationForm.reset();
                } else {
                    message.textContent = 'Please enter a valid email address.';
                    message.style.color = '#e74c3c';
                    message.style.backgroundColor = '#f8d7da';
                    message.style.padding = '1rem';
                    message.style.borderRadius = '5px';
                }
            } else {
                message.textContent = 'Please fill in all required fields.';
                message.style.color = '#e74c3c';
                message.style.backgroundColor = '#f8d7da';
                message.style.padding = '1rem';
                message.style.borderRadius = '5px';
            }
        });
    }

    // Membership Form
    const membershipForm = document.getElementById('membershipForm');
    if (membershipForm) {
        membershipForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const firstName = document.getElementById('memberFirstName').value;
            const lastName = document.getElementById('memberLastName').value;
            const email = document.getElementById('memberEmail').value;
            const phone = document.getElementById('memberPhone').value;
            const studentId = document.getElementById('memberStudentId').value;
            const program = document.getElementById('memberProgram').value;
            const membershipType = document.getElementById('memberType').value;
            const message = document.getElementById('membershipMessage');
            
            if (firstName && lastName && email && phone && studentId && program && membershipType) {
                if (validateEmail(email)) {
                    message.textContent = `Thank you, ${firstName} ${lastName}! Your membership application has been received. We will process it and contact you soon.`;
                    message.style.color = '#27ae60';
                    message.style.backgroundColor = '#d4edda';
                    message.style.padding = '1rem';
                    message.style.borderRadius = '5px';
                    membershipForm.reset();
                } else {
                    message.textContent = 'Please enter a valid email address.';
                    message.style.color = '#e74c3c';
                    message.style.backgroundColor = '#f8d7da';
                    message.style.padding = '1rem';
                    message.style.borderRadius = '5px';
                }
            } else {
                message.textContent = 'Please fill in all required fields.';
                message.style.color = '#e74c3c';
                message.style.backgroundColor = '#f8d7da';
                message.style.padding = '1rem';
                message.style.borderRadius = '5px';
            }
        });
    }

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const subject = document.getElementById('contactSubject').value;
            const messageText = document.getElementById('contactMessage').value;
            const message = document.getElementById('contactFormMessage');
            
            if (name && email && subject && messageText) {
                if (validateEmail(email)) {
                    message.textContent = `Thank you, ${name}! Your message has been sent. We will get back to you soon.`;
                    message.style.color = '#27ae60';
                    message.style.backgroundColor = '#d4edda';
                    message.style.padding = '1rem';
                    message.style.borderRadius = '5px';
                    contactForm.reset();
                } else {
                    message.textContent = 'Please enter a valid email address.';
                    message.style.color = '#e74c3c';
                    message.style.backgroundColor = '#f8d7da';
                    message.style.padding = '1rem';
                    message.style.borderRadius = '5px';
                }
            } else {
                message.textContent = 'Please fill in all required fields.';
                message.style.color = '#e74c3c';
                message.style.backgroundColor = '#f8d7da';
                message.style.padding = '1rem';
                message.style.borderRadius = '5px';
            }
        });
    }

    // Forum Topic Form
    const newTopicForm = document.getElementById('newTopicForm');
    if (newTopicForm) {
        newTopicForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const title = document.getElementById('topicTitle').value;
            const category = document.getElementById('topicCategory').value;
            const content = document.getElementById('topicContent').value;
            const message = document.getElementById('topicMessage');
            
            if (title && category && content) {
                message.textContent = 'Your topic has been posted successfully! It will appear in the forums shortly.';
                message.style.color = '#27ae60';
                message.style.backgroundColor = '#d4edda';
                message.style.padding = '1rem';
                message.style.borderRadius = '5px';
                newTopicForm.reset();
            } else {
                message.textContent = 'Please fill in all required fields.';
                message.style.color = '#e74c3c';
                message.style.backgroundColor = '#f8d7da';
                message.style.padding = '1rem';
                message.style.borderRadius = '5px';
            }
        });
    }

    // Event Filtering
    const filterButtons = document.querySelectorAll('.events-filter .filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter events
            const events = document.querySelectorAll('.event-card');
            events.forEach(event => {
                if (filter === 'all' || event.getAttribute('data-category') === filter) {
                    event.style.display = 'flex';
                } else {
                    event.style.display = 'none';
                }
            });
        });
    });
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Event Registration Function
function registerEvent(eventName) {
    alert(`Thank you for your interest in ${eventName}! Registration details will be sent to your email.`);
}

// Membership Selection Function
function selectMembership(type) {
    const membershipType = document.getElementById('memberType');
    if (membershipType) {
        const options = {
            'student': 'Student Member (Free)',
            'premium': 'Premium Member (RM 50/year)',
            'lifetime': 'Lifetime Member (RM 200)'
        };
        membershipType.value = type;
        // Scroll to form
        document.getElementById('membershipForm').scrollIntoView({ behavior: 'smooth' });
    }
}

// Forum Search Function
function filterForums() {
    const searchInput = document.getElementById('forumSearch');
    const filter = searchInput.value.toLowerCase();
    const topics = document.querySelectorAll('.forum-topic');
    
    topics.forEach(topic => {
        const text = topic.textContent.toLowerCase();
        if (text.includes(filter)) {
            topic.style.display = 'flex';
        } else {
            topic.style.display = 'none';
        }
    });
}

// Resource Search Function
function searchResources() {
    const searchInput = document.getElementById('resourceSearch');
    const filter = searchInput.value.toLowerCase();
    const resources = document.querySelectorAll('.resource-item');
    const resultsDiv = document.getElementById('searchResults');
    
    let foundCount = 0;
    
    resources.forEach(resource => {
        const text = resource.textContent.toLowerCase();
        if (text.includes(filter)) {
            resource.style.display = 'block';
            foundCount++;
        } else {
            resource.style.display = 'none';
        }
    });
    
    if (resultsDiv) {
        if (filter === '') {
            resultsDiv.innerHTML = '';
        } else {
            resultsDiv.innerHTML = `<p>Found ${foundCount} resource(s) matching "${filter}"</p>`;
        }
    }
}

// Gallery Filter Function
function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    const buttons = document.querySelectorAll('.gallery-filter .filter-btn');
    
    // Update active button
    buttons.forEach(btn => {
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Filter items
    items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// FAQ Toggle Function
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Image Lazy Loading (if images are present)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Form Input Validation on Blur
document.querySelectorAll('input[type="email"]').forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value && !validateEmail(this.value)) {
            this.style.borderColor = '#e74c3c';
        } else {
            this.style.borderColor = '#dee2e6';
        }
    });
});

// Animate on Scroll (Simple fade-in effect)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to cards and sections
document.querySelectorAll('.feature-card, .program-card, .event-card, .resource-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Counter Animation for Statistics (if needed)
function animateCounter(element, target, duration) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Back to Top Button (if needed)
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        if (scrollTop > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    }
});

// Header Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Video Play/Pause Tracking
document.querySelectorAll('video').forEach(video => {
    video.addEventListener('play', function() {
        console.log('Video playing:', this.src);
        // Track video engagement (can be extended with analytics)
    });
    
    video.addEventListener('pause', function() {
        console.log('Video paused:', this.src);
    });
    
    video.addEventListener('ended', function() {
        console.log('Video completed:', this.src);
    });
});

// Audio Play/Pause Tracking
document.querySelectorAll('audio').forEach(audio => {
    audio.addEventListener('play', function() {
        console.log('Audio playing:', this.src);
    });
    
    audio.addEventListener('pause', function() {
        console.log('Audio paused:', this.src);
    });
    
    audio.addEventListener('ended', function() {
        console.log('Audio completed:', this.src);
    });
});

// Image Lazy Loading Enhancement
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    }, {
        rootMargin: '50px'
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Smooth Scroll Enhancement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form Input Enhancement - Real-time Validation
document.querySelectorAll('input[type="email"]').forEach(input => {
    input.addEventListener('input', function() {
        if (this.value && validateEmail(this.value)) {
            this.style.borderColor = '#10b981';
            this.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.1)';
        } else if (this.value) {
            this.style.borderColor = '#ef4444';
            this.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
        } else {
            this.style.borderColor = '#e5e7eb';
            this.style.boxShadow = 'none';
        }
    });
    
    input.addEventListener('blur', function() {
        if (this.value && !validateEmail(this.value)) {
            this.style.borderColor = '#ef4444';
        } else {
            this.style.borderColor = '#e5e7eb';
            this.style.boxShadow = 'none';
        }
    });
});

// Gallery Image Modal (if needed)
function openImageModal(imageSrc, imageAlt) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    `;
    
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = imageAlt;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 12px;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    `;
    
    modal.appendChild(img);
    document.body.appendChild(modal);
    
    modal.addEventListener('click', function() {
        document.body.removeChild(modal);
    });
}

// Add click handlers to gallery images
document.querySelectorAll('.gallery-image img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
        openImageModal(this.src, this.alt);
    });
});

// Console welcome message
console.log('%cWelcome to APU Academic Excellence Society Website!', 'color: #4f46e5; font-size: 20px; font-weight: bold;');
console.log('%cThis website was built with HTML, CSS, and JavaScript.', 'color: #1a2332; font-size: 14px;');
console.log('%cMultimedia elements include videos, audio, and images.', 'color: #6b7280; font-size: 12px;');

