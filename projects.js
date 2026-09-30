/**
 * OVERAH CORE — PROJECTS & PORTFOLIO INTERACTIVE SCRIPT
 * Vanilla JavaScript | Filtering & Editorial Rendering
 */

// Project Data Store (Easily updatable)
const projectsData = [
    {
        id: "project-02",
        number: "02",
        title: "Corporate Business Website",
        category: "websites",
        categoryLabel: "Websites",
        description: "A refined corporate web presence engineered for an enterprise consultancy, focusing on high-speed asset delivery and professional brand authority.",
        image: "assets/images/projects/project-02.jpg",
        technologies: "HTML, CSS, JavaScript",
        link: "https://overahcore.vercel.app/project-detail.html?project=project-02",
        isLarge: false
    },
    {
        id: "project-03",
        number: "03",
        title: "E-commerce Experience",
        category: "ecommerce",
        categoryLabel: "E-commerce",
        description: "A secure, high-conversion digital storefront built with optimized frontend architecture and streamlined checkout workflows.",
        image: "assets/images/projects/project-03.jpg",
        technologies: "Frontend, Secure API, Payments",
        link: "https://overahcore.vercel.app/project-detail.html?project=project-03",
        isLarge: false
    },
    {
        id: "project-04",
        number: "04",
        title: "Organization Management Portal",
        category: "portals",
        categoryLabel: "Portals",
        description: "A secure institutional portal designed to manage member credentials, internal documents, and administrative communication channels.",
        image: "assets/images/projects/project-04.jpg",
        technologies: "Backend API, Database, Auth",
        link: "https://overahcore.vercel.app/project-detail.html?project=project-04",
        isLarge: true
    },
    {
        id: "project-05",
        number: "05",
        title: "Community & Religious Website",
        category: "organizations",
        categoryLabel: "Organizations",
        description: "An accessible, informative digital platform connecting community members with schedules, resources, and live broadcast integrations.",
        image: "assets/images/projects/project-05.jpg",
        technologies: "HTML, CSS, Responsive UI",
        link: "https://overahcore.vercel.app/project-detail.html?project=project-02",
        isLarge: false
    },
    {
        id: "project-06",
        number: "06",
        title: "Custom Business Dashboard",
        category: "applications",
        categoryLabel: "Web Applications",
        description: "An analytical web application offering real-time operational insights, data visualization, and custom management controls.",
        image: "assets/images/projects/project-06.jpg",
        technologies: "JavaScript, API Integration",
        link: "https://overahcore.vercel.app/project-detail.html?project=project-02",
        isLarge: false
    },
    {
        id: "project-07",
        number: "07",
        title: "Professional Services Redesign",
        category: "redesigns",
        categoryLabel: "Redesigns",
        description: "Complete legacy modernization transforming an outdated professional services site into a modern, high-performance touchpoint.",
        image: "assets/images/projects/project-07.jpg",
        technologies: "Architecture, Vitals Tuning",
        link: "https://overahcore.vercel.app/project-detail.html?project=project-02",
        isLarge: false
    },
    {
        id: "project-08",
        number: "08",
        title: "Secure Client Portal",
        category: "portals",
        categoryLabel: "Portals",
        description: "A dedicated client communication and project delivery hub providing secure document exchange and milestone tracking.",
        image: "assets/images/projects/project-08.jpg",
        technologies: "Secure Node Backend, Frontend",
        link: "contact.html",
        isLarge: false
    }
];

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sticky Header Scroll Effect
    const header = document.getElementById('header');
    
    const handleScroll = () => {
        if (window.scrollY > 30) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // 2. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            const spans = mobileToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'translateY(8px) rotate(45deg)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'translateY(-8px) rotate(-45deg)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // 3. Render Projects Grid
    const projectsGrid = document.getElementById('projectsGrid');

    const renderProjects = (filterCategory = 'all') => {
        if (!projectsGrid) return;
        
        projectsGrid.innerHTML = '';

        const filtered = filterCategory === 'all' 
            ? projectsData 
            : projectsData.filter(p => p.category === filterCategory);

        if (filtered.length === 0) {
            projectsGrid.innerHTML = '<div style="grid-column: span 2; text-align: center; padding: 4rem; color: var(--text-muted);">No projects currently listed in this category.</div>';
            return;
        }

        filtered.forEach(project => {
            const card = document.createElement('div');
            card.className = `project-card ${project.isLarge ? 'large' : ''}`;
            card.setAttribute('data-category', project.category);

            // Fallback SVG generator if image is missing
            const fallbackSvg = `data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22500%22 viewBox=%220 0 800 500%22%3E%3Crect fill=%22%230E1626%22 width=%22800%22 height=%22500%22/%3E%3Ctext fill=%22%2394A3B8%22 font-family=%22sans-serif%22 font-size=%2220%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3E${encodeURIComponent(project.title)} Preview%3C/text%3E%3C/svg%3E`;

            card.innerHTML = `
                <div class="pc-image-wrapper">
                    <img src="${project.image}" alt="${project.title}" class="pc-img" onerror="this.onerror=null; this.src='${fallbackSvg}';">
                </div>
                <div class="pc-content">
                    <div class="pc-header">
                        <span class="pc-num">${project.number}</span>
                        <span class="pc-cat">${project.categoryLabel}</span>
                    </div>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="pc-footer">
                        <span class="pc-tech">${project.technologies}</span>
                        <a href="${project.link}" class="pc-link">View Project &rarr;</a>
                    </div>
                </div>
            `;
            projectsGrid.appendChild(card);
        });
    };

    renderProjects('all');

    // 4. Project Filtering System
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');

            const category = btn.getAttribute('data-filter');
            renderProjects(category);
        });
    });

    // 5. Scroll Reveal Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observeTargets = document.querySelectorAll(
        '.featured-project-wrapper, .project-card, .cs-card, .tech-cat-card, .confidentiality-banner'
    );
    
    observeTargets.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(el);
    });

});