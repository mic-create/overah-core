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
    },
    "project-05": {
        id: "project-05",
        number: "05",
        title: "Community & Religious Website",
        category: "Organizations / Community",
        industry: "Community & Religious Organizations",
        services: "Website Design & Development",
        timeline: "6 Weeks",
        status: "Completed",
        confidential: false,
        summary: "An accessible and informative digital platform designed to help a community organization communicate schedules, resources, announcements, and important information to its members.",
        overview: "A responsive community-focused website developed to create a central digital presence for an organization while making schedules, activities, resources, announcements, and other important information easier to access.",
        challenge: "The organization required a clearer digital platform through which members and visitors could easily find schedules, announcements, organizational information, and other important resources.",
        objective: [
            "Create a clear and accessible online presence for the organization.",
            "Make schedules, announcements, and important information easier to discover.",
            "Provide a responsive experience for members accessing the website from mobile devices.",
            "Create a flexible content structure that can be maintained and expanded over time."
        ],
        approach: [
            { step: "01", title: "Content Planning", desc: "Organizing the organization's information, schedules, resources, and communication requirements." },
            { step: "02", title: "Information Architecture", desc: "Creating a clear navigation structure that allows visitors to find important information quickly." },
            { step: "03", title: "Interface Development", desc: "Building an accessible responsive interface with a visual direction appropriate for the organization." },
            { step: "04", title: "Integration & Testing", desc: "Testing responsive layouts, content sections, navigation, and supported digital integrations." }
        ],
        solution: "Developed a responsive community website with structured information architecture, organizational resources, schedules, announcements, and support for relevant digital and live-broadcast integrations.",
        features: [
            { title: "Information Hub", desc: "A centralized location for organizational information, announcements, schedules, and resources." },
            { title: "Responsive Interface", desc: "A mobile-friendly experience designed for visitors using phones, tablets, and desktop devices." },
            { title: "Schedule Presentation", desc: "Clear presentation of important activities, services, meetings, and organizational schedules." },
            { title: "Resource Sections", desc: "Dedicated areas for important documents, information, announcements, and community resources." },
            { title: "Digital Broadcast Integration", desc: "Support for connecting visitors with relevant live or digital broadcast experiences where applicable." }
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Web Design", "Media Integration"],
        outcome: "Delivered a structured digital platform that gives the organization a professional online presence while making important community information easier to access.",
        mainImage: "assets/images/projects/project-05.jpg",
        gallery: [
            "assets/images/projects/project-05-01.jpg",
            "assets/images/projects/project-05-02.jpg",
            "assets/images/projects/project-05-03.jpg"
        ],
        liveUrl: "",
        repositoryUrl: ""
    },
    "project-06": {
        id: "project-06",
        number: "06",
        title: "Custom Business Dashboard",
        category: "Web Applications / Business",
        industry: "Business Operations",
        services: "Dashboard Design & Web Application Development",
        timeline: "12 Weeks",
        status: "Completed",
        confidential: false,
        summary: "A custom business dashboard designed to bring operational information, key metrics, data visualization, and management controls into a centralized digital workspace.",
        overview: "A purpose-built web application designed to provide business users with a centralized interface for viewing operational information, monitoring selected metrics, and managing relevant business activities.",
        challenge: "The business required a more organized way to access operational information and management controls without relying on disconnected tools and manually compiled information.",
        objective: [
            "Centralize important operational information within one interface.",
            "Present relevant data in a clear and understandable format.",
            "Provide appropriate management controls for authorized users.",
            "Create a scalable interface that can accommodate additional business functionality."
        ],
        approach: [
            { step: "01", title: "Requirements Mapping", desc: "Identifying the business information, user roles, workflows, and dashboard functions required." },
            { step: "02", title: "Dashboard Architecture", desc: "Structuring the application around clear navigation, information hierarchy, and modular dashboard components." },
            { step: "03", title: "Data Integration", desc: "Connecting the interface to relevant APIs and structured data sources where required." },
            { step: "04", title: "Testing & Refinement", desc: "Testing dashboard interactions, data presentation, responsiveness, and key management workflows." }
        ],
        solution: "Developed a centralized business dashboard combining operational summaries, data visualization, management controls, and responsive application interfaces.",
        features: [
            { title: "Operational Dashboard", desc: "A centralized overview designed to present relevant business information in an organized format." },
            { title: "Data Visualization", desc: "Visual presentation of selected data to make important information easier to understand." },
            { title: "Management Controls", desc: "Interface controls designed around the administrative requirements of the application." },
            { title: "API Integration", desc: "Structured integration with application data sources where required." },
            { title: "Responsive Application", desc: "A flexible interface designed to remain usable across different screen sizes." }
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "API Integration", "Data Visualization", "Web Application Architecture"],
        outcome: "Delivered a centralized business application that provides a clearer operational interface and brings selected business information and controls into one digital environment.",
        mainImage: "assets/images/projects/project-06.jpg",
        gallery: [
            "assets/images/projects/project-06-01.jpg",
            "assets/images/projects/project-06-02.jpg",
            "assets/images/projects/project-06-03.jpg"
        ],
        liveUrl: "",
        repositoryUrl: ""
    },
    "project-07": {
        id: "project-07",
        number: "07",
        title: "Professional Services Redesign",
        category: "Redesigns / Performance",
        industry: "Professional Services",
        services: "Website Redesign & Frontend Modernization",
        timeline: "8 Weeks",
        status: "Completed",
        confidential: false,
        summary: "A complete modernization of an existing professional services website, transforming an outdated digital experience into a cleaner, more responsive, and professionally structured platform.",
        overview: "A website redesign project focused on improving the visual hierarchy, content structure, responsive behavior, and overall usability of an existing professional services website.",
        challenge: "The existing website relied on an outdated visual structure and required improvements to its presentation, navigation, responsive behavior, and overall user experience.",
        objective: [
            "Modernize the visual presentation of the existing website.",
            "Improve navigation and content hierarchy.",
            "Create a stronger responsive experience across devices.",
            "Improve the maintainability and structure of the frontend.",
            "Preserve important existing information while presenting it more effectively."
        ],
        approach: [
            { step: "01", title: "Existing Site Review", desc: "Reviewing the current website structure, content, interface, and areas requiring improvement." },
            { step: "02", title: "Design Direction", desc: "Establishing a modern visual system around typography, spacing, layout, and brand consistency." },
            { step: "03", title: "Frontend Modernization", desc: "Rebuilding key interface sections using cleaner and more responsive frontend structures." },
            { step: "04", title: "Performance Refinement", desc: "Reviewing asset usage, layout behavior, and frontend implementation for a more efficient experience." }
        ],
        solution: "Modernized the existing website with a cleaner interface, improved information hierarchy, responsive layouts, refined visual presentation, and a more maintainable frontend structure.",
        features: [
            { title: "Modernized Interface", desc: "A refreshed visual direction designed to create a more contemporary professional experience." },
            { title: "Responsive Layout", desc: "Improved layouts that adapt more effectively across desktop, tablet, and mobile screens." },
            { title: "Improved Navigation", desc: "A clearer information structure designed to help visitors reach important content more efficiently." },
            { title: "Frontend Refinement", desc: "Cleaner interface structures and styling designed to improve maintainability." },
            { title: "Performance-Conscious Design", desc: "A more focused approach to assets, layouts, and frontend implementation." }
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Frontend Optimization"],
        outcome: "Delivered a modernized professional services website with a stronger visual identity, clearer structure, improved responsiveness, and a more contemporary user experience.",
        mainImage: "assets/images/projects/project-07.jpg",
        gallery: [
            "assets/images/projects/project-07-01.jpg",
            "assets/images/projects/project-07-02.jpg",
            "assets/images/projects/project-07-03.jpg"
        ],
        liveUrl: "",
        repositoryUrl: ""
    },
    "project-08": {
        id: "project-08",
        number: "08",
        title: "Secure Client Portal",
        category: "Portals / Web Applications",
        industry: "Professional Services",
        services: "Client Portal Design & Web Application Development",
        timeline: "14 Weeks",
        status: "Completed",
        confidential: true,
        summary: "A dedicated client portal designed to provide an organized digital environment for client communication, document exchange, project information, and milestone tracking.",
        overview: "A custom client-facing web application designed to provide clients with a centralized environment for accessing relevant project information, exchanging documents, and following selected project milestones.",
        challenge: "The project required a centralized and more organized way for clients and service providers to exchange information, manage documents, and maintain visibility throughout an ongoing engagement.",
        objective: [
            "Create a dedicated digital environment for client interactions.",
            "Provide a structured method for exchanging relevant project documents.",
            "Make project progress and milestone information easier to access.",
            "Implement controlled access to client-specific information.",
            "Create a professional interface suitable for long-term client use."
        ],
        approach: [
            { step: "01", title: "Workflow Analysis", desc: "Understanding the client communication, document exchange, and project tracking requirements." },
            { step: "02", title: "Access Architecture", desc: "Planning authentication and access structures around client-specific information." },
            { step: "03", title: "Portal Development", desc: "Building the client-facing interface and core application workflows." },
            { step: "04", title: "Testing & Deployment", desc: "Testing authentication flows, portal interactions, responsiveness, and core functionality." }
        ],
        solution: "Developed a dedicated client portal that brings communication, document exchange, project information, and milestone visibility into a structured web-based environment.",
        features: [
            { title: "Client Authentication", desc: "Controlled access functionality designed to protect client-specific portal areas." },
            { title: "Document Exchange", desc: "Structured functionality for sharing and accessing relevant project documents." },
            { title: "Project Milestones", desc: "A clear interface for presenting selected stages and progress information." },
            { title: "Client Dashboard", desc: "A centralized client-facing overview of relevant project information and activities." },
            { title: "Responsive Portal", desc: "A responsive interface designed for convenient access across desktop and mobile devices." }
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "REST API", "Authentication", "Database Integration"],
        outcome: "Delivered a structured client portal designed to improve the organization of client-facing project information, communication, document exchange, and milestone visibility.",
        mainImage: "assets/images/projects/project-08.jpg",
        gallery: [
            "assets/images/projects/project-08-01.jpg",
            "assets/images/projects/project-08-02.jpg",
            "assets/images/projects/project-08-03.jpg"
        ],
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
        const relatedKeys = projectKeys.filter(k => k !== p.id).slice(0, 7);
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