// Main JavaScript functionality for the portfolio website

// Theme management
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

// Set initial theme
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Mobile menu functionality
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Smooth scrolling for navigation links
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

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Header background on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Load skills dynamically
function loadSkills() {
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer) return;

    skillsContainer.innerHTML = '';

    Object.entries(portfolioData.skills).forEach(([category, skills]) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category fade-in-up';
        
        categoryDiv.innerHTML = `
            <h3 class="skill-category-title">
                <i class="fas fa-code"></i>
                ${category}
            </h3>
            <div class="skills-grid">
                ${skills.map(skill => `
                    <div class="skill-card">
                        <div class="skill-header">
                            <i class="${skill.icon}"></i>
                            <span class="skill-name">${skill.name}</span>
                        </div>
                        <div class="skill-level">${skill.level}</div>
                        <div class="progress-bar">
                            <div class="progress-fill" data-width="${skill.progress}%"></div>
                        </div>
                        <div class="skill-description">${skill.description}</div>
                    </div>
                `).join('')}
            </div>
        `;
        
        skillsContainer.appendChild(categoryDiv);
    });

    // Animate progress bars when they come into view
    const progressBars = document.querySelectorAll('.progress-fill');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width;
            }
        });
    });

    progressBars.forEach(bar => observer.observe(bar));
}

// Load featured projects
function loadFeaturedProjects() {
    const projectsContainer = document.getElementById('featured-projects');
    if (!projectsContainer) return;

    const featuredProjects = getFeaturedProjects();
    
    projectsContainer.innerHTML = featuredProjects.map(project => `
        <div class="project-card fade-in-up" onclick="openProjectModal(${project.id})">
            <img src="${project.image}" alt="${project.title} - AI/ML Project by Utkarsh Dimri" class="project-image" loading="lazy">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-stats">
                <div class="stat-group">
                    <div class="stat-item">
                        <i class="fas fa-star"></i>
                        <span>${project.stats.stars}</span>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-code-branch"></i>
                        <span>${project.stats.forks}</span>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-eye"></i>
                        <span>${project.stats.views}</span>
                    </div>
                </div>
                <div class="project-actions">
                    ${project.github ? `<a href="${project.github}" class="action-btn" target="_blank" rel="noopener" aria-label="View project on GitHub"><i class="fab fa-github"></i></a>` : ''}
                    ${project.demo ? `<a href="${project.demo}" class="action-btn" target="_blank" rel="noopener" aria-label="View live demo"><i class="fas fa-external-link-alt"></i></a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Project modal functionality
function openProjectModal(projectId) {
    const project = findProjectById(projectId);
    if (!project) return;

    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');

    modalTitle.textContent = project.title;
    modalContent.innerHTML = `
        <div class="modal-project-details">
            <img src="${project.image}" alt="${project.title}" class="modal-project-image" loading="lazy">
            <div class="modal-project-info">
                <p class="modal-project-description">${project.longDescription}</p>
                <div class="modal-project-tech">
                    <h4>Technologies Used:</h4>
                    <div class="tech-tags">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                <div class="modal-project-stats">
                    <div class="stat-item">
                        <i class="fas fa-star"></i>
                        <span>${project.stats.stars} Stars</span>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-code-branch"></i>
                        <span>${project.stats.forks} Forks</span>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-eye"></i>
                        <span>${project.stats.views} Views</span>
                    </div>
                </div>
                <div class="modal-project-links">
                    ${project.github ? `<a href="${project.github}" class="btn btn-outline" target="_blank" rel="noopener"><i class="fab fa-github"></i> View Code</a>` : ''}
                    ${project.demo ? `<a href="${project.demo}" class="btn btn-primary" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

// Close modal when clicking outside
document.getElementById('project-modal').addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        closeProjectModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

// Contact form handling
function handleContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    event.target.reset();
    
    // In a real application, you would send this data to a server
    console.log('Contact form data:', data);
}

// Scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadSkills();
    loadFeaturedProjects();
    handleScrollAnimations();
    
    // Add stagger animation to elements
    const staggerElements = document.querySelectorAll('.stagger-animation > *');
    staggerElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
});

// Update hero stats counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        let current = 0;
        const increment = target / 50;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + (counter.textContent.includes('+') ? '+' : '');
                setTimeout(updateCounter, 50);
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when hero section is visible
const heroSection = document.querySelector('.hero-section');
if (heroSection) {
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                heroObserver.unobserve(entry.target);
            }
        });
    });
    
    heroObserver.observe(heroSection);
}

// Performance optimization: Lazy load images
document.addEventListener('DOMContentLoaded', () => {
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
});


// ============================================
// EMAILJS INTEGRATION v4
// ============================================

// Initialize EmailJS v4
// IMPORTANT: Replace with your actual EmailJS Public Key
const EMAILJS_PUBLIC_KEY = "uarj-QsOXRFb0t8Eg";
const EMAILJS_SERVICE_ID = "service_9xai406";
const EMAILJS_TEMPLATE_ID = "template_r0kd02c";

// Initialize EmailJS on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your Public Key
    emailjs.init({
        publicKey: EMAILJS_PUBLIC_KEY,
        blockHeadless: true,
        blockList: {
            list: ['foo@emailjs.com', 'bar@emailjs.com']
        },
        limitRate: {
            id: 'app',
            throttle: 10000 // 10 seconds
        }
    });
    
    console.log("✅ EmailJS v4 initialized");
    
    // Test connection
    testEmailJSConnection();
    
    // Setup contact form
    setupContactForm();
});

// Test EmailJS connection
async function testEmailJSConnection() {
    try {
        // Test if EmailJS is loaded
        if (typeof emailjs === 'undefined') {
            console.error("❌ EmailJS SDK not loaded");
            showNotification("Email service not loaded. Please refresh the page.", "error");
            return false;
        }
        
        console.log("🔗 EmailJS v4 loaded successfully");
        console.log("📊 Available methods:", Object.keys(emailjs).filter(key => typeof emailjs[key] === 'function'));
        
        return true;
    } catch (error) {
        console.error("❌ EmailJS connection test failed:", error);
        return false;
    }
}

// Setup contact form with EmailJS v4
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) {
        console.error("❌ Contact form not found!");
        return;
    }
    
    console.log("📝 Setting up contact form...");
    
    // Remove any existing event listeners
    const newForm = contactForm.cloneNode(true);
    contactForm.parentNode.replaceChild(newForm, contactForm);
    
    // Add submit event listener to the new form
    newForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        try {
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Get form data
            const formData = {
                from_name: this.querySelector('#name').value,
                from_email: this.querySelector('#email').value,
                subject: this.querySelector('#subject').value,
                message: this.querySelector('#message').value,
                reply_to: this.querySelector('#email').value,
                to_name: "Utkarsh Dimri",
                date: new Date().toLocaleString(),
                portfolio_url: window.location.href
            };
            
            console.log("📤 Preparing to send email with data:", formData);
            
            // Validate required fields
            if (!formData.from_name || !formData.from_email || !formData.message) {
                throw new Error("Please fill in all required fields");
            }
            
            // Send email using EmailJS v4
            console.log("🚀 Sending email via EmailJS v4...");
            
            const response = await emailjs.send(
                EMAILJS_SERVICE_ID,      // Service ID
                EMAILJS_TEMPLATE_ID,     // Template ID
                formData
            );
            
            console.log('✅ Email sent successfully!', response);
            console.log('📧 Response:', response.text);
            
            // Show success message
            showNotification('✅ Message sent successfully! I\'ll get back to you within 24 hours.', 'success');
            
            // Reset form
            this.reset();
            
            // Remove validation classes
            this.querySelectorAll('.valid, .invalid').forEach(el => {
                el.classList.remove('valid', 'invalid');
            });
            
        } catch (error) {
            console.error('❌ EmailJS Error:', error);
            
            let errorMessage = 'Failed to send message. ';
            let userMessage = '';
            
            // Parse error for user-friendly message
            if (error.message) {
                if (error.message.includes("template")) {
                    userMessage = 'Template configuration error. Please check your EmailJS template.';
                } else if (error.message.includes("service")) {
                    userMessage = 'Email service error. Please check your EmailJS service configuration.';
                } else if (error.message.includes("public")) {
                    userMessage = 'Authentication error. Please check your EmailJS public key.';
                } else {
                    userMessage = error.message;
                }
            } else if (error.text) {
                try {
                    const errorData = JSON.parse(error.text);
                    userMessage = errorData.message || errorData.error || 'Unknown error occurred';
                } catch (e) {
                    userMessage = error.text;
                }
            } else if (error.status) {
                switch (error.status) {
                    case 400:
                        userMessage = 'Bad request. Check your form data.';
                        break;
                    case 401:
                        userMessage = 'Unauthorized. Invalid public key.';
                        break;
                    case 404:
                        userMessage = 'Service or template not found. Check your EmailJS IDs.';
                        break;
                    case 429:
                        userMessage = 'Too many requests. Please try again later.';
                        break;
                    default:
                        userMessage = `Error ${error.status}: Please try again.`;
                }
            }
            
            console.log('🔧 Troubleshooting Info:', {
                serviceId: EMAILJS_SERVICE_ID,
                templateId: EMAILJS_TEMPLATE_ID,
                error: error
            });
            
            showNotification(`❌ ${userMessage}`, 'error');
            
            // Fallback: Open email client after 2 seconds
            setTimeout(() => {
                const name = this.querySelector('#name').value;
                const email = this.querySelector('#email').value;
                const subject = this.querySelector('#subject').value;
                const message = this.querySelector('#message').value;
                
                const mailtoLink = `mailto:dimriutkarsh55@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                
                if (name && email && message) {
                    showNotification('Opening email client as backup...', 'info');
                    setTimeout(() => {
                        window.open(mailtoLink, '_blank');
                    }, 1000);
                }
            }, 2000);
            
        } finally {
            // Reset button state
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
    
    // Add real-time validation
    addFormValidation(newForm);
}

// Add form validation
function addFormValidation(form) {
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.trim() === '') {
                this.classList.remove('valid', 'invalid');
            } else if (this.checkValidity()) {
                this.classList.remove('invalid');
                this.classList.add('valid');
            } else {
                this.classList.remove('valid');
                this.classList.add('invalid');
            }
        });
        
        input.addEventListener('blur', function() {
            if (!this.value.trim() && this.hasAttribute('required')) {
                this.classList.add('invalid');
            }
        });
    });
}

// Enhanced notification function for EmailJS
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.email-notification');
    existingNotifications.forEach(notif => {
        notif.style.animation = 'slideOutRight 0.3s ease forwards';
        setTimeout(() => notif.remove(), 300);
    });
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `email-notification email-notification-${type}`;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'assertive');
    
    const icons = {
        success: '✅',
        error: '❌',
        info: 'ℹ️',
        warning: '⚠️'
    };
    
    notification.innerHTML = `
        <span class="notification-icon">${icons[type] || '💬'}</span>
        <span class="notification-text">${message}</span>
        <button class="notification-close" aria-label="Close notification">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles if not already added
    if (!document.querySelector('#email-notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'email-notification-styles';
        styles.textContent = `
            .email-notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: #10b981;
                color: white;
                padding: 16px 20px;
                border-radius: 12px;
                display: flex;
                align-items: center;
                gap: 12px;
                box-shadow: 0 8px 25px rgba(0,0,0,0.25);
                z-index: 9999;
                animation: slideInRight 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
                max-width: 450px;
                font-family: 'Inter', sans-serif;
                font-size: 15px;
                font-weight: 500;
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255,255,255,0.1);
            }
            .email-notification-error {
                background: linear-gradient(135deg, #ef4444, #dc2626);
            }
            .email-notification-info {
                background: linear-gradient(135deg, #3b82f6, #2563eb);
            }
            .email-notification-warning {
                background: linear-gradient(135deg, #f59e0b, #d97706);
            }
            .notification-icon {
                font-size: 18px;
                filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
            }
            .notification-text {
                flex: 1;
                line-height: 1.5;
            }
            .notification-close {
                background: rgba(255,255,255,0.15);
                border: none;
                color: white;
                cursor: pointer;
                padding: 6px 10px;
                border-radius: 6px;
                font-size: 14px;
                transition: all 0.2s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                min-width: 32px;
                min-height: 32px;
            }
            .notification-close:hover {
                background: rgba(255,255,255,0.25);
                transform: scale(1.05);
            }
            @keyframes slideInRight {
                0% {
                    transform: translateX(100%) scale(0.8);
                    opacity: 0;
                }
                70% {
                    transform: translateX(-10px) scale(1.05);
                }
                100% {
                    transform: translateX(0) scale(1);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0) scale(1);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%) scale(0.8);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Add close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease forwards';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    });
    
    // Auto remove after appropriate duration
    const durations = {
        success: 5000,
        error: 8000,
        info: 6000,
        warning: 7000
    };
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease forwards';
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }
    }, durations[type] || 5000);
}

// Debug and test function
function debugEmailJS() {
    console.group('🔍 EmailJS Debug Info');
    console.log('SDK Version:', emailjs.version);
    console.log('Public Key:', EMAILJS_PUBLIC_KEY);
    console.log('Service ID:', EMAILJS_SERVICE_ID);
    console.log('Template ID:', EMAILJS_TEMPLATE_ID);
    console.log('Form Element:', document.getElementById('contact-form'));
    console.groupEnd();
    
    // Check if IDs are properly formatted
    const checks = {
        'Public Key exists': EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY.length > 10,
        'Service ID starts with service_': EMAILJS_SERVICE_ID && EMAILJS_SERVICE_ID.startsWith('service_'),
        'Template ID starts with template_': EMAILJS_TEMPLATE_ID && EMAILJS_TEMPLATE_ID.startsWith('template_')
    };
    
    console.log('✅ Configuration Checks:', checks);
    
    return checks;
}

// Make debug function available globally
window.debugEmailJS = debugEmailJS;