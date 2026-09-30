/**
 * OVERAH CORE — PROJECT DETAILS & CASE STUDY DATABASE & RENDERER
 * Vanilla JavaScript | Dynamic URL Parameter Resolution & Editorial Layouts
 */

// Comprehensive Project Database (Easily expandable)
const projectsDatabase = {
    "healthcare-platform": {
        id: "healthcare-platform",
        number: "01",
        title: "Healthcare Digital Platform",
        category: "Web Applications / Healthcare",
        industry: "Healthcare & Life Sciences",
        services: "UI/UX Design & Full-Stack Development",
        timeline: "14 Weeks",
        status: "Completed / Ongoing Maintenance",
        confidential: true,
        summary: "A modern digital experience designed and engineered for a healthcare organization, focusing on accessibility, clear information architecture, and responsive performance.",
        overview: "The Healthcare Digital Platform was conceptualized to streamline patient engagement, enhance accessibility across devices, and establish a high-trust digital touchpoint for a prominent healthcare organization.",
        challenge: "The organization faced severe legacy constraints: slow page load times, non-compliant accessibility standards, and a fragmented information architecture that created friction for patients seeking critical care resources.",
        objective: [
            "Achieve WCAG-compliant digital accessibility across all primary user touchpoints.",
            "Restructure the information architecture for intuitive patient navigation.",
            "Deliver an impeccably responsive experience across mobile and desktop devices.",
            "Establish secure, reliable backend infrastructure to support high-volume inquiries."
        ],
        approach: [
            { step: "01", title: "Discovery & Audit", desc: "Comprehensive review of legacy bottlenecks, security audits, and stakeholder interviews." },
            { step: "02", title: "Architecture Planning", desc: "Mapping user journeys, information hierarchies, and secure data flow structures." },
            { step: "03", title: "Interface Design", desc: "Crafting a clean, authoritative corporate aesthetic aligned with medical trust and clarity." },
            { step: "04", title: "Engineering & Testing", desc: "Building modular components with rigorous performance optimization and cross-device testing." }
        ],
        solution: "Engineered a robust, high-performance web platform utilizing clean semantic HTML5, modular CSS3, and secure API integration. The solution eliminated legacy lag and established an impenetrable security posture.",
        features: [
            { title: "Responsive Interface", desc: "Fluid layouts optimized seamlessly for desktop workstations, tablets, and mobile devices." },
            { title: "Advanced Information Architecture", desc: "Streamlined navigation routing users instantly to specialized medical services and resources." },
            { title: "Secure API Integration", desc: "Robust data exchange channels protecting sensitive patient inquiries and administrative logs." },
            { title: "Performance Optimization", desc: "Lightning-fast asset delivery yielding exceptional Core Web Vitals metrics." }
        ],
        technologies: ["HTML5", "Modern CSS3", "Vanilla JavaScript", "Secure REST API", "Node.js", "PostgreSQL"],
        outcome: "Delivered a structured, high-performance digital platform fully aligned with the organization's rigorous operational and compliance requirements.",
        mainImage: "assets/images/projects/project-01.jpg",
        gallery: [
            "assets/images/projects/project-01-01.jpg",
            "assets/images/projects/project-01-02.jpg"
        ],
        liveUrl: "",
        repositoryUrl: ""
    },
    "project-02": {
        id: "project-02",
        number: "02",
        title: "Corporate Business Website",
        category: "Websites / Enterprise",
        industry: "Corporate Consulting",
        services: "Brand Engineering & Web Development",
        timeline: "8 Weeks",
        status: "Completed",
        confidential: false,
        summary: "A refined corporate web presence engineered for an enterprise consultancy, focusing on high-speed asset delivery and professional brand authority.",
        overview: "An elite corporate platform designed to reflect top-tier advisory competence, executive thought leadership, and institutional stability.",
        challenge: "The client's previous web presence failed to communicate their high-end market position, suffering from generic templates and sluggish server response times.",
        objective: [
            "Elevate brand perception through bespoke editorial web design.",
            "Optimize asset loading to achieve instant navigation.",
            "Provide an easily maintainable content structure for executive briefings."
        ],
        approach: [
            { step: "01", title: "Brand Alignment", desc: "Translating executive positioning into visual typography and grid systems." },
            { step: "02", title: "Wireframing", desc: "Designing high-conversion editorial layouts." },
            { step: "03", title: "Development", desc: "Writing lightweight, zero-bloat HTML/CSS/JS codebases." },
            { step: "04", title: "Deployment", desc: "Configuring global CDN distribution for maximum speed." }
        ],
        solution: "Built a lightning-fast static-first corporate website backed by modular styling and clean semantic markup.",
        features: [
            { title: "Executive Typography", desc: "Carefully curated font pairing establishing professional authority." },
            { title: "Global CDN Integration", desc: "Sub-second load times worldwide." },
            { title: "Responsive Grid", desc: "Fluid adaptability across widescreen monitors and mobile screens." }
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "Global CDN"],
        outcome: "Delivered a prestigious digital flagship that significantly strengthened the firm's online credibility.",
        mainImage: "assets/images/projects/project-02.jpg",
        gallery: [],
        liveUrl: "",
        repositoryUrl: ""
    },
    "project-03": {
        id: "project-03",
        number: "03",
        title: "E-commerce Experience",
        category: "E-commerce",
        industry: "Retail & Commerce",
        services: "UI/UX & Secure Checkout Engineering",
        timeline: "10 Weeks",
        status: "Completed",
        confidential: false,
        summary: "A secure, high-conversion digital storefront built with optimized frontend architecture and streamlined checkout workflows.",
        overview: "A sophisticated e-commerce platform engineered for luxury goods retail, emphasizing frictionless checkout and immersive product storytelling.",
        challenge: "High cart abandonment rates driven by cluttered checkout steps and slow image rendering across mobile networks.",
        objective: [
            "Streamline the checkout journey into a unified, secure flow.",
            "Implement lazy-loading image galleries for ultra-fast catalog browsing.",
            "Ensure rigorous payment gateway security."
        ],
        approach: [
            { step: "01", title: "UX Flow Mapping", desc: "Reducing checkout friction points." },
            { step: "02", title: "Visual Design", desc: "High-end minimalist product presentation." },
            { step: "03", title: "API Integration", desc: "Connecting secure payment processors." },
            { step: "04", title: "Load Testing", desc: "Simulating high traffic volume." }
        ],
        solution: "A high-performance digital storefront featuring optimized asset pipelines and military-grade encryption.",
        features: [
            { title: "One-Page Checkout", desc: "Frictionless transaction completion." },
            { title: "Dynamic Catalog", desc: "Instant filtering and category sorting." }
        ],
        technologies: ["Frontend Architecture", "Secure API", "Payment Gateways"],
        outcome: "Successfully delivered an elegant, secure e-commerce platform built for scale.",
        mainImage: "assets/images/projects/project-03.jpg",
        gallery: [],
        liveUrl: "",
        repositoryUrl: ""
    },
    "project-04": {
        id: "project-04",
        number: "04",
        title: "Organization Management Portal",
        category: "Portals / Organizations",
        industry: "Institutional Management",
        services: "Full-Stack Portal Development",
        timeline: "16 Weeks",
        status: "Completed",
        confidential: true,
        summary: "A secure institutional portal designed to manage member credentials, internal documents, and administrative communication channels.",
        overview: "An enterprise-grade internal portal built to centralize organizational workflows, member directories, and secure document repositories.",
        challenge: "Fragmented communication channels and insecure file sharing exposed the institution to operational delays and data leakage risks.",
        objective: [
            "Centralize document management behind strict role-based access control.",
            "Automate member directory updates.",
            "Provide an intuitive administrative dashboard."
        ],
        approach: [
            { step: "01", title: "Security Audit", desc: "Defining strict access permissions." },
            { step: "02", title: "Database Architecture", desc: "Structuring relational data securely." },
            { step: "03", title: "Dashboard UI", desc: "Designing clear administrative views." },
            { step: "04", title: "Deployment", desc: "Rigorous staging and penetration testing." }
        ],
        solution: "Engineered a secure, encrypted portal featuring granular permissions and real-time administrative logs.",
        features: [
            { title: "Role-Based Access", desc: "Granular security permissions for members and admins." },
            { title: "Document Vault", desc: "Encrypted file storage and retrieval." }
        ],
        technologies: ["Node.js", "Secure Database", "Authentication API"],
        outcome: "Delivered a bulletproof internal portal streamlining all institutional administration.",
        mainImage: "assets/images/projects/project-04.jpg",
        gallery: [],
        liveUrl: "",
        repositoryUrl: ""
    }
};

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
    }

    // 3. URL Parameter Handling & Project Resolution
    const urlParams = new URLSearchParams(window.location.search);
    let projectId = urlParams.get('project');

    // Default to first project or healthcare-platform if parameter missing
    if (!projectId || !projectsDatabase[projectId]) {
        projectId = "healthcare-platform";
    }

    const project = projectsDatabase[projectId];
    const projectContainer = document.getElementById('projectContainer');
    const notFoundState = document.getElementById('notFoundState');

    if (!project) {
        if (projectContainer) projectContainer.style.display = 'none';
        if (notFoundState) notFoundState.style.display = 'block';
        return;
    }

    // Update Page Title and Meta Tags
    document.title = `${project.title} — OVERAH CORE Case Study`;
    const ogTitle = document.getElementById('ogTitle');
    const ogDesc = document.getElementById('ogDesc');
    const ogImage = document.getElementById('ogImage');
    if (ogTitle) ogTitle.setAttribute('content', `${project.title} — OVERAH CORE`);
    if (ogDesc) ogDesc.setAttribute('content', project.summary);
    if (ogImage) ogImage.setAttribute('content', project.mainImage);

    // 4. Render Dynamic Case Study Content
    const renderCaseStudy = (p) => {
        const fallbackSvg = `data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22500%22 viewBox=%220 0 800 500%22%3E%3Crect fill=%22%230E1626%22 width=%22800%22 height=%22500%22/%3E%3Ctext fill=%22%2394A3B8%22 font-family=%22sans-serif%22 font-size=%2220%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3E${encodeURIComponent(p.title)} Preview%3C/text%3E%3C/svg%3E`;

        // Build Approach Timeline HTML
        let approachHtml = '';
        if (p.approach && p.approach.length > 0) {
            approachHtml = `
                <section class="section">
                    <div class="container">
                        <div class="section-header">
                            <span class="section-tag">Methodical Execution</span>
                            <h2 class="section-title">The Approach</h2>
                            <p class="section-subtitle">How OVERAH CORE engineered the solution from concept to completion.</p>
                        </div>
                        <div class="timeline-grid">
                            ${p.approach.map(item => `
                                <div class="timeline-card">
                                    <span class="timeline-num">${item.step}</span>
                                    <h3>${item.title}</h3>
                                    <p>${item.desc}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>
            `;
        }

        // Build Features HTML
        let featuresHtml = '';
        if (p.features && p.features.length > 0) {
            featuresHtml = `
                <section class="section">
                    <div class="container">
                        <div class="section-header">
                            <span class="section-tag">Key Capabilities</span>
                            <h2 class="section-title">Project Features</h2>
                            <p class="section-subtitle">Architectural highlights integrated into the final solution.</p>
                        </div>
                        <div class="features-grid">
                            ${p.features.map(f => `
                                <div class="feature-card">
                                    <h3>${f.title}</h3>
                                    <p>${f.desc}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>
            `;
        }

        // Build Technologies HTML
        let techHtml = '';
        if (p.technologies && p.technologies.length > 0) {
            techHtml = `
                <section class="section">
                    <div class="container">
                        <div class="editorial-grid">
                            <div class="editorial-left">
                                <span class="section-tag">Engineering Stack</span>
                                <h2>Technologies Utilized</h2>
                            </div>
                            <div class="editorial-right">
                                <p>We selected robust, battle-tested technologies tailored specifically to the project's performance and security requirements.</p>
                                <div class="tech-stack-row">
                                    ${p.technologies.map(t => `<div class="tech-badge">${t}</div>`).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `;
        }

        // Build Gallery HTML (Filtering out missing or invalid images gracefully)
        let galleryHtml = '';
        if (p.gallery && p.gallery.length > 0) {
            galleryHtml = `
                <section class="section">
                    <div class="container">
                        <div class="section-header">
                            <span class="section-tag">Visual Showcase</span>
                            <h2 class="section-title">Project Gallery</h2>
                            <p class="section-subtitle">Selected interface views and architectural screens.</p>
                        </div>
                        <div class="gallery-grid">
                            ${p.gallery.map(img => `
                                <div class="gallery-item">
                                    <img src="${img}" alt="${p.title} Interface" class="gallery-img" onerror="this.closest('.gallery-item').style.display='none';">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>
            `;
        }

        // Build Confidentiality Notice HTML
        let confHtml = '';
        if (p.confidential) {
            confHtml = `
                <div class="confidential-notice-box">
                    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                    <div><strong>Client Confidentiality:</strong> Certain proprietary details, internal metrics, and client names have been withheld to respect confidentiality agreements.</div>
                </div>
            `;
        }

        // Build External Links HTML
        let linksHtml = '';
        if (p.liveUrl || p.repositoryUrl) {
            linksHtml = `
                <div class="cs-actions-row">
                    ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener" class="btn btn-primary">Visit Live Project &rarr;</a>` : ''}
                    ${p.repositoryUrl ? `<a href="${p.repositoryUrl}" target="_blank" rel="noopener" class="btn btn-secondary">View Repository</a>` : ''}
                </div>
            `;
        }

        // Determine Previous and Next Projects dynamically
        const projectKeys = Object.keys(projectsDatabase);
        const currentIndex = projectKeys.indexOf(p.id);
        const prevKey = currentIndex > 0 ? projectKeys[currentIndex - 1] : null;
        const nextKey = currentIndex < projectKeys.length - 1 ? projectKeys[currentIndex + 1] : null;
        const prevProject = prevKey ? projectsDatabase[prevKey] : null;
        const nextProject = nextKey ? projectsDatabase[nextKey] : null;

        let paginationHtml = `
            <div class="project-pagination">
                <div class="container pagination-grid">
                    <div>
                        ${prevProject ? `
                            <a href="project-detail.html?project=${prevProject.id}" class="pagination-btn">
                                <span>&larr; Previous Project</span>
                                <strong>${prevProject.title}</strong>
                            </a>
                        ` : ''}
                    </div>
                    <div>
                        ${nextProject ? `
                            <a href="project-detail.html?project=${nextProject.id}" class="pagination-btn" style="text-align: right;">
                                <span>Next Project &rarr;</span>
                                <strong>${nextProject.title}</strong>
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;

        // Build Related Projects (Pick up to 3 other projects)
        const relatedKeys = projectKeys.filter(k => k !== p.id).slice(0, 3);
        let relatedHtml = `
            <section class="related-projects-section">
                <div class="container">
                    <div class="section-header text-center">
                        <span class="section-tag">More Portfolio Work</span>
                        <h2 class="section-title">Explore Other Projects</h2>
                    </div>
                    <div class="related-grid">
                        ${relatedKeys.map(k => {
                            const rp = projectsDatabase[k];
                            return `
                                <div class="related-card">
                                    <img src="${rp.mainImage}" alt="${rp.title}" class="rc-img" onerror="this.onerror=null; this.src='${fallbackSvg}';">
                                    <div class="rc-body">
                                        <span class="rc-cat">${rp.category}</span>
                                        <h3>${rp.title}</h3>
                                        <p>${rp.summary}</p>
                                        <a href="project-detail.html?project=${rp.id}" class="rc-link">View Case Study &rarr;</a>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </section>
        `;

        // Construct Full Page HTML
        projectContainer.innerHTML = `
            <!-- Hero Section -->
            <section class="cs-hero-section">
                <div class="container">
                    ${confHtml}
                    <div class="cs-hero-grid">
                        <div class="cs-hero-content">
                            <div class="cs-meta-top">
                                <span class="cs-num">PROJECT ${p.number}</span>
                                <span class="cs-cat">${p.category}</span>
                            </div>
                            <h1 class="cs-hero-title">${p.title}</h1>
                            <p class="lead-text">${p.summary}</p>
                            
                            <div class="cs-spec-grid">
                                <div class="cs-spec-item">
                                    <span>Project Type</span>
                                    <strong>${p.services}</strong>
                                </div>
                                <div class="cs-spec-item">
                                    <span>Industry</span>
                                    <strong>${p.industry}</strong>
                                </div>
                                <div class="cs-spec-item">
                                    <span>Timeline</span>
                                    <strong>${p.timeline}</strong>
                                </div>
                                <div class="cs-spec-item">
                                    <span>Status</span>
                                    <strong>${p.status}</strong>
                                </div>
                            </div>
                            ${linksHtml}
                        </div>
                        <div class="cs-hero-visual">
                            <div class="cs-hero-image-wrapper">
                                <img src="${p.mainImage}" alt="${p.title}" class="cs-hero-img" onerror="this.onerror=null; this.src='${fallbackSvg}';">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Overview Section -->
            <section class="cs-content-section">
                <div class="container">
                    <div class="editorial-grid">
                        <div class="editorial-left">
                            <span class="section-tag">Context & Vision</span>
                            <h2>Project Overview</h2>
                        </div>
                        <div class="editorial-right">
                            <p>${p.overview}</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- The Challenge Section -->
            <section class="cs-content-section">
                <div class="container">
                    <div class="editorial-grid">
                        <div class="editorial-left">
                            <span class="section-tag">Friction & Problem</span>
                            <h2>The Challenge</h2>
                        </div>
                        <div class="editorial-right">
                            <p>"Every digital project begins with a problem worth solving."</p>
                            <p style="margin-top: 1rem;">${p.challenge}</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- The Objective Section -->
            <section class="cs-content-section">
                <div class="container">
                    <div class="editorial-grid">
                        <div class="editorial-left">
                            <span class="section-tag">Goals & Directives</span>
                            <h2>The Objective</h2>
                        </div>
                        <div class="editorial-right">
                            <ul style="display: flex; flex-direction: column; gap: 1rem;">
                                ${p.objective.map(obj => `
                                    <li style="display: flex; gap: 0.75rem; align-items: flex-start; color: var(--text-muted);">
                                        <span style="color: var(--accent-blue); font-weight: bold;">&bull;</span>
                                        <span>${obj}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Approach Timeline -->
            ${approachHtml}

            <!-- Solution Section -->
            <section class="cs-content-section">
                <div class="container">
                    <div class="editorial-grid">
                        <div class="editorial-left">
                            <span class="section-tag">Engineering Execution</span>
                            <h2>The Solution</h2>
                        </div>
                        <div class="editorial-right">
                            <p>${p.solution}</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Project Gallery -->
            ${galleryHtml}

            <!-- Features Section -->
            ${featuresHtml}

            <!-- Technology Stack -->
            ${techHtml}

            <!-- Outcome Section -->
            <section class="cs-content-section">
                <div class="container">
                    <div class="editorial-grid">
                        <div class="editorial-left">
                            <span class="section-tag">Impact & Delivery</span>
                            <h2>Result & Outcome</h2>
                        </div>
                        <div class="editorial-right">
                            <p>${p.outcome}</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Previous / Next Pagination -->
            ${paginationHtml}

            <!-- Related Projects -->
            ${relatedHtml}

            <!-- Final CTA Section -->
            <section class="section final-cta-section">
                <div class="container text-center">
                    <div class="cta-card">
                        <span class="section-tag">Initiate Partnership</span>
                        <h2 class="section-title">Have a Project Worth Building?</h2>
                        <p class="section-subtitle">Tell OVERAH CORE what you're trying to build, improve or maintain.</p>
                        <div class="hero-cta-group justify-center mt-4" style="display: flex; gap: 1rem; justify-content: center;">
                            <a href="contact.html" class="btn btn-primary btn-lg">Start a Project</a>
                            <a href="services.html" class="btn btn-secondary btn-lg">Explore Services</a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    };

    renderCaseStudy(project);

});