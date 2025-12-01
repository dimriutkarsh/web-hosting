// Projects page specific JavaScript functionality

// Theme management (similar to main page)
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

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

if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Project filtering and search functionality
let allProjects = [];
let filteredProjects = [];
let currentCategory = 'all';
let currentSearchTerm = '';

// Initialize projects page
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.paddingTop = '100px';
    loadAllProjects();
    setupEventListeners();
    updateProjectStats();
});

function loadAllProjects() {
    allProjects = getAllProjects();
    filteredProjects = [...allProjects];
    displayProjects(filteredProjects);
    updateProjectCounts();
}

function displayProjects(projects) {
    const projectsGrid = document.getElementById('projects-grid');
    const emptyState = document.getElementById('empty-state');
    
    if (!projectsGrid) return;

    if (projects.length === 0) {
        projectsGrid.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }

    if (emptyState) emptyState.style.display = 'none';

    projectsGrid.innerHTML = projects.map(project => `
        <article class="project-card fade-in-up" onclick="openProjectModal(${project.id})" role="button" tabindex="0" aria-label="Open details for ${project.title}">
            <img src="${project.image}" alt="${project.title} - AI/ML Project by Utkarsh Dimri" class="project-image" loading="lazy">
            <h2 class="project-title">${project.title}</h2>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-stats">
                <div class="stat-group">
                    <div class="stat-item">
                        <i class="fas fa-star" aria-hidden="true"></i>
                        <span>${project.stats.stars}</span>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-code-branch" aria-hidden="true"></i>
                        <span>${project.stats.forks}</span>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-eye" aria-hidden="true"></i>
                        <span>${project.stats.views}</span>
                    </div>
                </div>
                <div class="project-actions">
                    ${project.github ? `<a href="${project.github}" class="action-btn" target="_blank" rel="noopener" aria-label="View ${project.title} on GitHub" onclick="event.stopPropagation()"><i class="fab fa-github"></i></a>` : ''}
                    ${project.demo ? `<a href="${project.demo}" class="action-btn" target="_blank" rel="noopener" aria-label="View ${project.title} live demo" onclick="event.stopPropagation()"><i class="fas fa-external-link-alt"></i></a>` : ''}
                </div>
            </div>
        </article>
    `).join('');

    // Add keyboard navigation for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });

    // Trigger scroll animations
    handleScrollAnimations();
}

function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('project-search');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Update current category
            currentCategory = button.getAttribute('data-category');
            
            // Filter and display projects
            filterProjects();
        });
    });
}

function handleSearch(e) {
    currentSearchTerm = e.target.value.toLowerCase();
    filterProjects();
}

function filterProjects() {
    filteredProjects = allProjects.filter(project => {
        // Category filter
        const categoryMatch = currentCategory === 'all' || project.category === currentCategory;
        
        // Search filter
        const searchMatch = currentSearchTerm === '' || 
            project.title.toLowerCase().includes(currentSearchTerm) ||
            project.description.toLowerCase().includes(currentSearchTerm) ||
            project.technologies.some(tech => tech.toLowerCase().includes(currentSearchTerm));
        
        return categoryMatch && searchMatch;
    });
    
    displayProjects(filteredProjects);
    updateProjectCounts();
}

function resetFilters() {
    // Reset category filter
    currentCategory = 'all';
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-category="all"]').classList.add('active');
    
    // Reset search
    currentSearchTerm = '';
    const searchInput = document.getElementById('project-search');
    if (searchInput) searchInput.value = '';
    
    // Filter and display projects
    filterProjects();
}

function updateProjectCounts() {
    const totalProjectsEl = document.getElementById('total-projects');
    const filteredProjectsEl = document.getElementById('filtered-projects');
    
    if (totalProjectsEl) totalProjectsEl.textContent = allProjects.length;
    if (filteredProjectsEl) filteredProjectsEl.textContent = filteredProjects.length;
}

function updateProjectStats() {
    const stats = getProjectStats();
    
    // Animate the total projects counter
    const totalProjectsEl = document.getElementById('total-projects');
    if (totalProjectsEl) {
        animateCounter(totalProjectsEl, stats.totalProjects);
    }
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 30;
    
    const updateCounter = () => {
        if (current < target) {
            current += increment;
            element.textContent = Math.ceil(current);
            setTimeout(updateCounter, 50);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

// Project modal functionality (reused from main page)
function openProjectModal(projectId) {
    const project = findProjectById(projectId);
    if (!project) return;

    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');

    modalTitle.textContent = project.title;
    modalContent.innerHTML = `
        <div class="modal-project-details">
            <img src="${project.image}" alt="${project.title} - AI/ML Project Screenshot" class="modal-project-image" loading="lazy">
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
                    <div class="stat-item">
                        <i class="fas fa-calendar"></i>
                        <span>Created: ${new Date(project.date).toLocaleDateString()}</span>
                    </div>
                </div>
                <div class="modal-project-links">
                    ${project.github ? `<a href="${project.github}" class="btn btn-outline" target="_blank" rel="noopener" aria-label="View source code on GitHub"><i class="fab fa-github"></i> View Source Code</a>` : ''}
                    ${project.demo ? `<a href="${project.demo}" class="btn btn-primary" target="_blank" rel="noopener" aria-label="View live demo"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Focus management for accessibility
    modalTitle.focus();
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

// Scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Performance optimization: Lazy load images
document.addEventListener('DOMContentLoaded', () => {
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.src;
        });
    }
});

// Add smooth scrolling for any anchor links
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

// Header background on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});