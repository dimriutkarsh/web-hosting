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