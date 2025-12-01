// Portfolio Data - Central database for all projects, skills, and information

const portfolioData = {
    // Personal Information
    personal: {
        name: "Utkarsh Dimri",
        title: "AI Engineer & Machine Learning Developer",
        email: "utkarsh.dimri@email.com",
        location: "India",
        bio: "Passionate AI Engineer and Machine Learning Developer with expertise in artificial intelligence, deep learning, data science, and software development. Specializes in building innovative AI solutions that solve real-world problems using cutting-edge machine learning technologies.",
        socialLinks: {
            linkedin: "https://linkedin.com/in/utkarsh-dimri",
            github: "https://github.com/utkarsh-dimri",
            twitter: "https://twitter.com/utkarsh_dimri",
            email: "mailto:utkarsh.dimri@email.com"
        }
    },

    // Skills organized by category
    skills: {
        "AI/ML Frameworks": [
            {
                name: "TensorFlow",
                level: "Expert",
                progress: 90,
                icon: "fas fa-brain",
                description: "Deep learning model development and deployment"
            },
            {
                name: "PyTorch",
                level: "Advanced",
                progress: 85,
                icon: "fas fa-fire",
                description: "Neural network research and development"
            },
            {
                name: "Scikit-learn",
                level: "Expert",
                progress: 95,
                icon: "fas fa-chart-line",
                description: "Machine learning algorithms and model evaluation"
            },
            {
                name: "OpenCV",
                level: "Advanced",
                progress: 80,
                icon: "fas fa-eye",
                description: "Computer vision and image processing"
            },
            {
                name: "Hugging Face",
                level: "Intermediate",
                progress: 75,
                icon: "fas fa-robot",
                description: "Natural language processing and transformers"
            }
        ],
        "Programming Languages": [
            {
                name: "Python",
                level: "Expert",
                progress: 95,
                icon: "fab fa-python",
                description: "Advanced proficiency in Python for AI/ML development"
            },
            {
                name: "JavaScript",
                level: "Advanced",
                progress: 85,
                icon: "fab fa-js-square",
                description: "Full-stack web development and data visualization"
            },
            {
                name: "R",
                level: "Intermediate",
                progress: 75,
                icon: "fab fa-r-project",
                description: "Statistical analysis and data science"
            },
            {
                name: "SQL",
                level: "Advanced",
                progress: 85,
                icon: "fas fa-database",
                description: "Database design and complex queries"
            },
            {
                name: "Java",
                level: "Intermediate",
                progress: 70,
                icon: "fab fa-java",
                description: "Object-oriented programming and software development"
            }
        ],
        "Data Science Tools": [
            {
                name: "Pandas",
                level: "Expert",
                progress: 95,
                icon: "fas fa-table",
                description: "Data manipulation and analysis"
            },
            {
                name: "NumPy",
                level: "Expert",
                progress: 95,
                icon: "fas fa-calculator",
                description: "Numerical computing and array operations"
            },
            {
                name: "Matplotlib",
                level: "Advanced",
                progress: 90,
                icon: "fas fa-chart-bar",
                description: "Data visualization and plotting"
            },
            {
                name: "Seaborn",
                level: "Advanced",
                progress: 85,
                icon: "fas fa-chart-pie",
                description: "Statistical data visualization"
            },
            {
                name: "Jupyter",
                level: "Expert",
                progress: 95,
                icon: "fas fa-book",
                description: "Interactive data science notebooks"
            }
        ],
        "Web Technologies": [
            {
                name: "HTML/CSS",
                level: "Expert",
                progress: 90,
                icon: "fab fa-html5",
                description: "Modern web development and responsive design"
            },
            {
                name: "Flask",
                level: "Advanced",
                progress: 85,
                icon: "fas fa-flask",
                description: "Web application development and API creation"
            },
            {
                name: "React",
                level: "Intermediate",
                progress: 75,
                icon: "fab fa-react",
                description: "Frontend development and component-based architecture"
            },
            {
                name: "Node.js",
                level: "Intermediate",
                progress: 70,
                icon: "fab fa-node-js",
                description: "Backend development and server-side JavaScript"
            }
        ]
    },

    // Projects data
    projects: [
        {
            id: 1,
            title: "AI-Powered Sentiment Analysis Tool",
            category: "machine-learning",
            description: "A sophisticated sentiment analysis application that processes text data to determine emotional tone and sentiment patterns using advanced NLP techniques and machine learning algorithms.",
            longDescription: "This project implements a comprehensive sentiment analysis system using state-of-the-art natural language processing techniques. The application can analyze text from various sources including social media, reviews, and documents to provide detailed sentiment insights with high accuracy.",
            image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=600",
            technologies: ["Python", "TensorFlow", "NLTK", "Flask", "React"],
            featured: true,
            stats: {
                stars: 45,
                forks: 12,
                views: 1250
            },
            github: "https://github.com/utkarsh-dimri/sentiment-analysis",
            demo: "https://sentiment-demo.utkarsh-dimri.dev",
            date: "2024-01-15"
        },
        {
            id: 2,
            title: "Deep Learning Stock Price Prediction",
            category: "machine-learning",
            description: "Advanced machine learning model that predicts stock prices using historical data, technical indicators, LSTM networks, and market sentiment analysis for improved accuracy.",
            longDescription: "A comprehensive stock price prediction system that combines multiple data sources including historical prices, technical indicators, news sentiment, and market volatility to forecast stock movements using deep learning techniques.",
            image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600",
            technologies: ["Python", "PyTorch", "Pandas", "yfinance", "Streamlit"],
            featured: true,
            stats: {
                stars: 67,
                forks: 23,
                views: 2100
            },
            github: "https://github.com/utkarsh-dimri/stock-prediction",
            demo: "https://stock-prediction.utkarsh-dimri.dev",
            date: "2024-02-20"
        },
        {
            id: 3,
            title: "Computer Vision Object Detection System",
            category: "machine-learning",
            description: "Real-time object detection system using YOLO algorithm and deep learning for identifying and tracking multiple objects in video streams with high precision.",
            longDescription: "An advanced computer vision application that can detect and track multiple objects in real-time video streams. The system uses the YOLO (You Only Look Once) algorithm optimized for speed and accuracy in various environments.",
            image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600",
            technologies: ["Python", "OpenCV", "YOLO", "TensorFlow", "Flask"],
            featured: true,
            stats: {
                stars: 52,
                forks: 18,
                views: 1400
            },
            github: "https://github.com/utkarsh-dimri/object-detection",
            demo: null,
            date: "2024-01-30"
        },
        {
            id: 4,
            title: "Interactive Data Visualization Dashboard",
            category: "data-analysis",
            description: "Dynamic dashboard for exploring and visualizing complex datasets with interactive charts, real-time filters, and advanced analytics capabilities.",
            longDescription: "A powerful data visualization platform that allows users to upload datasets and create interactive visualizations with drag-and-drop functionality. Features include real-time data updates, multiple chart types, and advanced filtering capabilities.",
            image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
            technologies: ["JavaScript", "D3.js", "React", "Node.js", "MongoDB"],
            featured: false,
            stats: {
                stars: 34,
                forks: 8,
                views: 890
            },
            github: "https://github.com/utkarsh-dimri/data-dashboard",
            demo: "https://dashboard.utkarsh-dimri.dev",
            date: "2024-03-10"
        },
        {
            id: 5,
            title: "AI Chatbot Assistant",
            category: "machine-learning",
            description: "Intelligent chatbot powered by natural language processing and machine learning for customer service automation and information retrieval.",
            longDescription: "An AI-powered chatbot that can handle customer inquiries, provide information, and assist with various tasks using advanced natural language processing and machine learning techniques including intent recognition and context understanding.",
            image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
            technologies: ["Python", "Rasa", "spaCy", "Flask", "WebSocket"],
            featured: false,
            stats: {
                stars: 41,
                forks: 14,
                views: 1050
            },
            github: "https://github.com/utkarsh-dimri/ai-chatbot",
            demo: "https://chatbot.utkarsh-dimri.dev",
            date: "2024-04-20"
        },
        {
            id: 6,
            title: "Machine Learning Recommendation Engine",
            category: "machine-learning",
            description: "Scalable recommendation system using collaborative filtering and content-based algorithms to provide personalized suggestions for e-commerce platforms.",
            longDescription: "A comprehensive recommendation system that combines collaborative filtering and content-based approaches to provide personalized recommendations. The system includes matrix factorization, deep learning embeddings, and real-time inference capabilities.",
            image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
            technologies: ["Python", "TensorFlow", "PostgreSQL", "Redis", "Docker"],
            featured: false,
            stats: {
                stars: 33,
                forks: 10,
                views: 740
            },
            github: "https://github.com/utkarsh-dimri/recommendation-engine",
            demo: null,
            date: "2024-03-25"
        },
        {
            id: 7,
            title: "NLP Text Summarization Tool",
            category: "machine-learning",
            description: "Advanced NLP application that automatically generates concise summaries of long documents using transformer models and extractive/abstractive techniques.",
            longDescription: "An intelligent text summarization tool that uses advanced transformer models including BERT and GPT to generate concise, coherent summaries of long documents. Supports multiple languages and various summary lengths with quality scoring.",
            image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=600",
            technologies: ["Python", "Transformers", "Hugging Face", "Streamlit", "NLTK"],
            featured: false,
            stats: {
                stars: 36,
                forks: 11,
                views: 780
            },
            github: "https://github.com/utkarsh-dimri/text-summarizer",
            demo: "https://summarizer.utkarsh-dimri.dev",
            date: "2024-04-12"
        },
        {
            id: 8,
            title: "Fraud Detection ML System",
            category: "machine-learning",
            description: "Machine learning system for detecting fraudulent transactions using anomaly detection, ensemble methods, and real-time monitoring capabilities.",
            longDescription: "An advanced fraud detection system that uses multiple machine learning algorithms including anomaly detection, random forests, and neural networks to identify potentially fraudulent transactions in real-time with high precision and low false positive rates.",
            image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=600",
            technologies: ["Python", "Scikit-learn", "XGBoost", "FastAPI", "Docker"],
            featured: false,
            stats: {
                stars: 49,
                forks: 16,
                views: 1200
            },
            github: "https://github.com/utkarsh-dimri/fraud-detection",
            demo: null,
            date: "2024-01-10"
        }
    ]
};

// Helper functions to access data
function getAllProjects() {
    return portfolioData.projects;
}

function getFeaturedProjects() {
    return portfolioData.projects.filter(project => project.featured);
}

function getProjectsByCategory(category) {
    if (category === 'all') {
        return portfolioData.projects;
    }
    return portfolioData.projects.filter(project => project.category === category);
}

function findProjectById(id) {
    return portfolioData.projects.find(project => project.id === id);
}

function getProjectStats() {
    const projects = getAllProjects();
    const technologies = new Set();
    
    projects.forEach(project => {
        project.technologies.forEach(tech => technologies.add(tech));
    });

    return {
        totalProjects: projects.length,
        totalTechnologies: technologies.size,
        featuredProjects: getFeaturedProjects().length,
        categories: [...new Set(projects.map(p => p.category))].length
    };
}

function getSkillsByCategory(category) {
    return portfolioData.skills[category] || [];
}

function getAllSkills() {
    const allSkills = [];
    Object.values(portfolioData.skills).forEach(categorySkills => {
        allSkills.push(...categorySkills);
    });
    return allSkills;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}