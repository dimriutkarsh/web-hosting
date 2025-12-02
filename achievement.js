const achievementsData = [
            {
                id: 1,
                title: "Udbhav 2025 Winner",
                category: "competition",
                featured: true,
                description: "Won state level AI competition Udbhav 2025 organized by govt of Uttarakhand.",
                date: "2025-11-26",
                image: "./images/udbh1.jpg",
                skills: ["Machine Learning", "web Development", "IOT-integration", "API calling", "Data Analysis"],
                issuer: "ITDA, Govt of Uttarakhand",
                credentialId: "GCP-MLE-2023-12345",
                verifyUrl: "https://cloud.google.com/certification"
            },
            {
                id: 2,
                title: "Internal Hackathon - 1st Place",
                category: "competition",
                featured: false,
                description:"secured 1st position in college's internal hackathon and got selected for state-level.",
                date: "2023-10-20",
                image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=800",
                skills: ["AWS", "SageMaker", "ML Engineering", "Cloud Computing", "Data Science"],
                issuer: "Amazon Web Services",
                credentialId: "AWS-MLS-2023-67890",
                verifyUrl: "https://aws.amazon.com/certification"
            },
            {
                id: 3,
                title: "Kaggle AI Competition - 2nd Place",
                category: "competition",
                featured: false,
                description: "Secured 2nd position in the Kaggle AI Competition among 1500+ participants worldwide. Developed an innovative deep learning model for image classification with 94.7% accuracy.",
                date: "2023-08-05",
                image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
                skills: ["Deep Learning", "Computer Vision", "Python", "TensorFlow", "Keras"],
                issuer: "Kaggle",
                award: "2nd Place",
                participants: "1500+"
            },
            {
                id: 4,
                title: "Gemini for Data Scientists and Analysts",
                category: "certificate",
                featured: true,
                description: "Earned Googe certificate of Gemini for Data Scientists and Analysts .",
                date: "2025-07-21",
                image: "./images/gemini-ds.png",
                skills: ["Data Science", "Machine Learning", "AI Models", "Google Gemini", "Python"],
                issuer: "Google",
                credentialId: "17050453",
                verifyUrl: "https://www.skills.google/public_profiles/9607bb37-3b0e-40ac-b13f-ff75ddffdcde/badges/17050453"
            },
            {
                id: 6,
                title: "Python 101 for Data Science",
                category: "certificate",
                featured: false,
                description: "Completed the Python 101 for Data Science course, mastering essential Python programming skills and libraries such as Pandas, NumPy, and Matplotlib for effective data analysis and visualization.",
                date: "2025-07-21",
                image: "images/python.png",
                skills: ["Python"],
                issuer: "Cognitive Class",
                credentialId: "https://courses.cognitiveclass.ai/certificates/986d2d3b101a4371a470c4fe3f205d01",
                verifyUrl: "https://www.tensorflow.org/certificate"
            },
            {
                id: 7,
                title: "Hackathon Winner - AI for Social Good",
                category: "competition",
                featured: true,
                description: "Won first place in the AI for Social Good Hackathon with an innovative solution that helps detect deforestation using satellite imagery and advanced computer vision algorithms.",
                date: "2023-04-22",
                image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800",
                skills: ["Computer Vision", "Satellite Imagery", "Environmental AI", "FastAI", "PyTorch"],
                issuer: "Tech for Good Foundation",
                award: "1st Place",
                participants: "200+ teams"
            },
            {
                id: 8,
                title: "Data Science Course",
                category: "certificate",
                featured: false,
                description: "Completed data science course from code with harry and learned about different things like data visualization , data cleaning , machine learning, deep learning.",
                date: "2025-12-02",
                image: "images/cwh.png",
                skills: ["Machine learning","Deep Learning","Data Visualization","Data Cleaning","Pandas","Numpy","Matplotlib"],
                issuer: "codewithharry.com",
            },
            {
                id: 9,
                title: "Pandas",
                category: "certificate",
                featured: false,
                description: "completed pandas course in kaggle and earned a certificate of it.",
                date: "2025-07-15",
                image: "images/kaggle.png",
                skills: ["Research", "Neural Architecture Search", "AutoML", "Publications", "Academic Writing"],
                issuer: "ICML 2023",
                award: "Best Paper Award"
            },
            {
                id: 10,
                title: "SQL and Relational Databases 101",
                category: "certificate",
                featured: false,
                description: "Completed SQL and Relational Databases 101 course, gaining proficiency in SQL querying for effective data management and analysis.",
                date: "2025-08-25",
                image: "images/sql.png",
                skills: ["SQL and Relational Databases"],
                issuer: "IBM",
                credentialId: "f4b173beb87a4029a7a8462c3cbe72d9",
                verifyUrl: "https://courses.cognitiveclass.ai/certificates/f4b173beb87a4029a7a8462c3cbe72d9"
            },
            {
                id: 11,
                title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
                category: "certificate",
                featured: true,
                description: "Completed the Career Essentials in Generative AI course by Microsoft and LinkedIn, mastering the fundamentals of generative AI technologies and their applications in various industries.",
                date: "2025-07-20",
                image: "images/genAi.png",
                skills: ["Generative AI","AI Ethics", "Responsible AI", "Governance", "Fairness"],
                issuer: "Microsoft & LinkedIn",
                verifyUrl: "https://www.linkedin.com/learning/certificates/f2d98e7afe9a7506c3dddbca1e91a95f28b7e7446f5953b52fb169a8c284910c"
            },
            {
                id: 12,
                title: "Data Science Competition Winner",
                category: "competition",
                featured: false,
                description: "First place winner in the Global Data Science Challenge, developing predictive models for climate change impact assessment using advanced statistical methods.",
                date: "2022-09-14",
                image: "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=800",
                skills: ["Predictive Modeling", "Climate Data", "Statistical Analysis", "R", "Python"],
                issuer: "Global Data Science Society",
                award: "1st Place",
                participants: "800+ teams"
            }
        ];

        // DOM Elements
        const filterButtons = document.getElementById('filterButtons');
        const searchInput = document.getElementById('searchInput');
        const achievementsGrid = document.getElementById('achievementsGrid');
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        const loading = document.getElementById('loading');
        const modal = document.getElementById('achievementModal');
        const modalClose = document.getElementById('modalClose');
        const themeToggle = document.getElementById('themeToggle');
        const galleryTrack = document.getElementById('galleryTrack');
        const galleryPrev = document.getElementById('galleryPrev');
        const galleryNext = document.getElementById('galleryNext');
        const galleryIndicators = document.getElementById('galleryIndicators');

        // State
        let currentFilter = 'all';
        let currentSearch = '';
        let visibleCount = 6;
        let filteredAchievements = [];
        let currentSlide = 0;
        let galleryInterval;

        // Initialize
        function init() {
            updateStats();
            initGallery();
            filterAndRender();
            setupEventListeners();
            startGalleryAutoplay();
        }

        // Initialize Gallery
        function initGallery() {
            const featuredAchievements = achievementsData.filter(a => a.featured);
            
            // Create slides
            galleryTrack.innerHTML = featuredAchievements.map(achievement => `
                <div class="gallery-slide">
                    <img src="${achievement.image}" alt="${achievement.title}" class="gallery-image">
                    <div class="gallery-overlay">
                        <h3>${achievement.title}</h3>
                        <p>${achievement.description.substring(0, 100)}...</p>
                        <div style="margin-top: 1rem;">
                            <span style="background: rgba(255,255,255,0.2); padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.875rem;">
                                ${achievement.issuer}
                            </span>
                        </div>
                    </div>
                </div>
            `).join('');

            // Create indicators
            galleryIndicators.innerHTML = featuredAchievements.map((_, index) => `
                <div class="gallery-dot ${index === 0 ? 'active' : ''}" data-slide="${index}"></div>
            `).join('');

            updateGalleryPosition();
        }

        // Update gallery position
        function updateGalleryPosition() {
            const slideWidth = 100;
            galleryTrack.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
            
            // Update indicators
            document.querySelectorAll('.gallery-dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        // Next slide
        function nextSlide() {
            const featuredCount = achievementsData.filter(a => a.featured).length;
            currentSlide = (currentSlide + 1) % featuredCount;
            updateGalleryPosition();
        }

        // Previous slide
        function prevSlide() {
            const featuredCount = achievementsData.filter(a => a.featured).length;
            currentSlide = currentSlide === 0 ? featuredCount - 1 : currentSlide - 1;
            updateGalleryPosition();
        }

        // Go to specific slide
        function goToSlide(slideIndex) {
            currentSlide = slideIndex;
            updateGalleryPosition();
        }

        // Start gallery autoplay
        function startGalleryAutoplay() {
            galleryInterval = setInterval(nextSlide,5000);
        }

        // Stop gallery autoplay
        function stopGalleryAutoplay() {
            clearInterval(galleryInterval);
        }

        // Update statistics
        function updateStats() {
            const stats = {
                certificates: achievementsData.filter(a => a.category === 'certificate').length,
                awards: achievementsData.filter(a => a.category === 'award').length,
                competitions: achievementsData.filter(a => a.category === 'competition').length,
                publications: achievementsData.filter(a => a.category === 'publication').length,
                featured: achievementsData.filter(a => a.featured).length
            };

            document.getElementById('totalCertificates').textContent = stats.certificates + '+';
            document.getElementById('totalAwards').textContent = stats.awards;
            document.getElementById('totalCompetitions').textContent = stats.competitions;
            document.getElementById('featuredCount').textContent = stats.featured;

            // Update filter counts
            document.getElementById('countAll').textContent = achievementsData.length;
            document.getElementById('countCertificates').textContent = stats.certificates;
            document.getElementById('countAwards').textContent = stats.awards;
            document.getElementById('countCompetitions').textContent = stats.competitions;
            document.getElementById('countPublications').textContent = stats.publications;
        }

        // Filter achievements
        function filterAchievements() {
            filteredAchievements = achievementsData.filter(achievement => {
                const matchesCategory = currentFilter === 'all' || achievement.category === currentFilter;
                const matchesSearch = !currentSearch || 
                    achievement.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
                    achievement.description.toLowerCase().includes(currentSearch.toLowerCase()) ||
                    achievement.issuer.toLowerCase().includes(currentSearch.toLowerCase()) ||
                    achievement.skills.some(skill => skill.toLowerCase().includes(currentSearch.toLowerCase()));
                
                return matchesCategory && matchesSearch;
            });
        }

        // Render achievements
        function renderAchievements() {
            const achievementsToShow = filteredAchievements.slice(0, visibleCount);
            
            if (achievementsToShow.length === 0) {
                achievementsGrid.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-search"></i>
                        <h3>No achievements found</h3>
                        <p>Try adjusting your search terms or filter criteria</p>
                    </div>
                `;
                loadMoreBtn.style.display = 'none';
                return;
            }

            achievementsGrid.innerHTML = achievementsToShow.map(achievement => `
                <div class="achievement-card ${achievement.featured ? 'featured' : ''}" data-id="${achievement.id}">
                    ${achievement.featured ? '<div class="achievement-badge">Featured</div>' : ''}
                    <div class="achievement-image-container">
                        <img src="${achievement.image}" alt="${achievement.title}" class="achievement-image" loading="lazy">
                    </div>
                    <div class="achievement-content">
                        <div class="achievement-category">
                            <i class="${getCategoryIcon(achievement.category)}"></i>
                            ${achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}
                        </div>
                        <h3 class="achievement-title">${achievement.title}</h3>
                        <p class="achievement-description">${achievement.description.substring(0, 150)}${achievement.description.length > 150 ? '...' : ''}</p>
                        <div class="achievement-meta">
                            <div class="achievement-date">
                                <i class="fas fa-calendar-alt"></i>
                                ${formatDate(achievement.date)}
                            </div>
                            <div class="achievement-issuer">${achievement.issuer}</div>
                        </div>
                        <div class="achievement-skills">
                            ${achievement.skills.slice(0, 3).map(skill => `
                                <span class="skill-tag">${skill}</span>
                            `).join('')}
                            ${achievement.skills.length > 3 ? `<span class="skill-tag">+${achievement.skills.length - 3} more</span>` : ''}
                        </div>
                        <div class="achievement-actions">
                            <button class="btn btn-primary view-btn" data-id="${achievement.id}">
                                <i class="fas fa-eye"></i>
                                View Details
                            </button>
                            ${achievement.verifyUrl ? `
                                <a href="${achievement.verifyUrl}" class="btn btn-outline" target="_blank">
                                    <i class="fas fa-external-link-alt"></i>
                                    Verify
                                </a>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `).join('');

            // Show/hide load more button
            loadMoreBtn.style.display = visibleCount < filteredAchievements.length ? 'block' : 'none';

            // Add click event listeners
            document.querySelectorAll('.achievement-card').forEach(card => {
                card.addEventListener('click', (e) => {
                    if (!e.target.closest('.btn') && !e.target.closest('a')) {
                        const id = parseInt(card.dataset.id);
                        showModal(id);
                    }
                });
            });

            document.querySelectorAll('.view-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const id = parseInt(btn.dataset.id);
                    showModal(id);
                });
            });
        }

        // Filter and render
        function filterAndRender() {
            loading.classList.add('show');
            
            // Simulate loading delay
            setTimeout(() => {
                filterAchievements();
                renderAchievements();
                loading.classList.remove('show');
            }, 300);
        }

        // Show modal
        function showModal(id) {
            const achievement = achievementsData.find(a => a.id === id);
            if (!achievement) return;

            document.getElementById('modalTitle').textContent = achievement.title;
            document.getElementById('modalImage').src = achievement.image;
            document.getElementById('modalImage').alt = achievement.title;
            document.getElementById('modalDate').textContent = formatDate(achievement.date);
            document.getElementById('modalIssuer').textContent = achievement.issuer;
            document.getElementById('modalDescription').textContent = achievement.description;

            // Skills
            document.getElementById('modalSkills').innerHTML = `
                <h4 style="margin-bottom: 1rem; color: var(--primary-color);">Skills & Technologies</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    ${achievement.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            `;

            // Verify button
            const verifyBtn = document.getElementById('verifyBtn');
            if (achievement.verifyUrl) {
                verifyBtn.href = achievement.verifyUrl;
                verifyBtn.style.display = 'inline-flex';
            } else {
                verifyBtn.style.display = 'none';
            }

            // Download button
            document.getElementById('downloadBtn').onclick = () => {
                const link = document.createElement('a');
                link.href = achievement.image;
                link.download = `${achievement.title.replace(/\s+/g, '_')}.jpg`;
                link.click();
            };

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Close modal
        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Format date
        function formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }

        // Get category icon
        function getCategoryIcon(category) {
            const icons = {
                certificate: 'fas fa-certificate',
                award: 'fas fa-trophy',
                competition: 'fas fa-flag-checkered',
                publication: 'fas fa-file-alt'
            };
            return icons[category] || 'fas fa-star';
        }

        // Setup event listeners
        function setupEventListeners() {
            // Filter buttons
            filterButtons.addEventListener('click', (e) => {
                if (e.target.closest('.filter-btn')) {
                    const btn = e.target.closest('.filter-btn');
                    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    currentFilter = btn.dataset.category;
                    visibleCount = 6;
                    filterAndRender();
                }
            });

            // Search input
            searchInput.addEventListener('input', (e) => {
                currentSearch = e.target.value;
                visibleCount = 6;
                filterAndRender();
            });

            // Load more button
            loadMoreBtn.addEventListener('click', () => {
                visibleCount += 6;
                renderAchievements();
            });

            // Modal close
            modalClose.addEventListener('click', closeModal);
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal();
            });

            // Escape key to close modal
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modal.classList.contains('active')) {
                    closeModal();
                }
            });

            // Theme toggle
            themeToggle.addEventListener('click', () => {
                const isDark = document.body.hasAttribute('data-theme');
                if (isDark) {
                    document.body.removeAttribute('data-theme');
                    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                } else {
                    document.body.setAttribute('data-theme', 'dark');
                    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                }
            });

            // Gallery navigation
            galleryPrev.addEventListener('click', () => {
                stopGalleryAutoplay();
                prevSlide();
                startGalleryAutoplay();
            });

            galleryNext.addEventListener('click', () => {
                stopGalleryAutoplay();
                nextSlide();
                startGalleryAutoplay();
            });

            // Gallery indicators
            galleryIndicators.addEventListener('click', (e) => {
                if (e.target.classList.contains('gallery-dot')) {
                    stopGalleryAutoplay();
                    goToSlide(parseInt(e.target.dataset.slide));
                    startGalleryAutoplay();
                }
            });

            // Pause autoplay on hover
            document.getElementById('galleryCarousel').addEventListener('mouseenter', stopGalleryAutoplay);
            document.getElementById('galleryCarousel').addEventListener('mouseleave', startGalleryAutoplay);
        }

        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);