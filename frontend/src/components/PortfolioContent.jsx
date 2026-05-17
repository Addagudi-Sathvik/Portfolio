import React from "react";
import photo from '../assets/photo.png';

export default function PortfolioContent() {
  const handleSendMessage = () => {
    alert('Message sent! (Connect your backend to make this live)');
  };

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-follower" id="cursor-follower"></div>
      
      {/* NAV */}
      <nav id="navbar">
        <a href="#hero" className="nav-logo">AS / PORTFOLIO</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a className="nav-resume-btn" href="https://drive.google.com/file/d/15G-UcHY6MHkdOVaNvoFh9xi4SiXRtC_a/view?usp=drivesdk" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="12" y1="18" x2="12" y2="12"/>
                <line x1="9" y1="15" x2="15" y2="15"/>
              </svg>
              Résumé
            </a>
          </li>
        </ul>
      </nav>
      
      {/* HERO */}
      <section id="hero">
        <canvas id="canvas-bg"></canvas>
        <div className="hero-content">
          <p className="hero-tag">Full Stack Developer · Hyderabad, India</p>
          <h1 className="hero-name">
            Addagudi
            <span>Sathvik</span>
          </h1>
          <p className="hero-role">React · Node.js · MongoDB · Python · ML</p>
          <div className="hero-cta">
            <a className="hero-resume-btn" href="https://drive.google.com/file/d/15G-UcHY6MHkdOVaNvoFh9xi4SiXRtC_a/view?usp=drivesdk" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '15px', height: '15px' }}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="12" y1="18" x2="12" y2="12"/>
                <line x1="9" y1="15" x2="15" y2="15"/>
              </svg>
              View Résumé
            </a>
            <a className="hero-resume-ghost" href="#contact">Get in Touch</a>
          </div>
        </div>
        <div className="photo-strip">
          <div className="photo-frame">
            <img src={photo} alt="Addagudi Sathvik"/>
          </div>
          <p className="photo-caption">Sathvik · 2024</p>
        </div>
        <div className="hero-scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>
      
      {/* ABOUT */}
      <section id="about">
        <div className="section-header reveal">
          <span className="section-num">01</span>
          <div className="section-line"></div>
          <h2 className="section-title">About</h2>
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            <p>I'm <strong>Addagudi Sathvik</strong>, a Full Stack Developer and B.E. Information Technology student at CBIT Hyderabad, passionate about building modern, scalable, and user-focused web applications. I transform ideas into functional digital experiences by combining clean design with efficient engineering.</p>
            <p>I work across <strong>Frontend and Backend Technologies</strong> — crafting responsive interfaces and reliable systems with the MERN stack. I'm driven by a strong interest in <strong>problem-solving, real-world software, and continuously raising my craft.</strong></p>
            <p>I'm also exploring <strong>Machine Learning and Generative AI</strong>, always looking for opportunities to learn, build, and create meaningful solutions that matter.</p>
            <div className="about-stats">
              <div className="stat-item reveal reveal-delay-1">
                <div className="stat-num">4+</div>
                <div className="stat-label">Projects Shipped</div>
              </div>
              <div className="stat-item reveal reveal-delay-2">
                <div className="stat-num">9.21</div>
                <div className="stat-label">CGPA / 10</div>
              </div>
              <div className="stat-item reveal reveal-delay-3">
                <div className="stat-num">10+</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-item reveal reveal-delay-4">
                <div className="stat-num">∞</div>
                <div className="stat-label">Ideas in Progress</div>
              </div>
            </div>
          </div>
          <div className="about-image-wrap reveal reveal-delay-2">
            <div className="about-img-frame">
              <img src={photo} alt="Sathvik"/>
            </div>
            <div className="about-img-overlay">Addagudi Sathvik<br/>Full Stack Developer</div>
          </div>
        </div>
      </section>
      
      {/* SKILLS */}
      <section id="skills">
        <div className="section-header reveal">
          <span className="section-num">02</span>
          <div className="section-line"></div>
          <h2 className="section-title">Skills</h2>
        </div>
        <div className="skills-grid">
          <div className="skill-card reveal">
            <span className="skill-icon">⚛️</span>
            <div className="skill-name">React.js</div>
            <div className="skill-desc">Component-driven UIs, hooks, state management, real-time dashboards</div>
            <div className="skill-bar-wrap"><div className="skill-bar-track"><div className="skill-bar-fill" data-width="88"></div></div></div>
          </div>
          <div className="skill-card reveal reveal-delay-1">
            <span className="skill-icon">🟢</span>
            <div className="skill-name">Node / Express</div>
            <div className="skill-desc">RESTful APIs, JWT Auth, Socket.io, middleware pipelines</div>
            <div className="skill-bar-wrap"><div className="skill-bar-track"><div className="skill-bar-fill" data-width="85"></div></div></div>
          </div>
          <div className="skill-card reveal reveal-delay-2">
            <span className="skill-icon">🍃</span>
            <div className="skill-name">MongoDB</div>
            <div className="skill-desc">Schema design, Mongoose, CRUD operations, Atlas</div>
            <div className="skill-bar-wrap"><div className="skill-bar-track"><div className="skill-bar-fill" data-width="83"></div></div></div>
          </div>
          <div className="skill-card reveal reveal-delay-3">
            <span className="skill-icon">🔷</span>
            <div className="skill-name">JavaScript</div>
            <div className="skill-desc">ES6+, async/await, algorithms, data structures</div>
            <div className="skill-bar-wrap"><div className="skill-bar-track"><div className="skill-bar-fill" data-width="90"></div></div></div>
          </div>
          <div className="skill-card reveal">
            <span className="skill-icon">🐍</span>
            <div className="skill-name">Python / ML</div>
            <div className="skill-desc">Scikit-learn, TensorFlow, Generative AI, data pipelines</div>
            <div className="skill-bar-wrap"><div className="skill-bar-track"><div className="skill-bar-fill" data-width="78"></div></div></div>
          </div>
          <div className="skill-card reveal reveal-delay-1">
            <span className="skill-icon">☕</span>
            <div className="skill-name">Java / C++</div>
            <div className="skill-desc">OOP principles, DSA, competitive programming foundations</div>
            <div className="skill-bar-wrap"><div className="skill-bar-track"><div className="skill-bar-fill" data-width="75"></div></div></div>
          </div>
          <div className="skill-card reveal reveal-delay-2">
            <span className="skill-icon">🎨</span>
            <div className="skill-name">HTML / CSS / Tailwind</div>
            <div className="skill-desc">Responsive layouts, Bootstrap, TailwindCSS, design systems</div>
            <div className="skill-bar-wrap"><div className="skill-bar-track"><div className="skill-bar-fill" data-width="92"></div></div></div>
          </div>
          <div className="skill-card reveal reveal-delay-3">
            <span className="skill-icon">🛠️</span>
            <div className="skill-name">Tools &amp; DB</div>
            <div className="skill-desc">Git, GitHub, VS Code, SQL, Oracle, Socket.io</div>
            <div className="skill-bar-wrap"><div className="skill-bar-track"><div className="skill-bar-fill" data-width="82"></div></div></div>
          </div>
        </div>
      </section>
      
      {/* PROJECTS */}
      <section id="projects">
        <div className="section-header reveal">
          <span className="section-num">03</span>
          <div className="section-line"></div>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="projects-list">
      
          {/* Project 01 — Civic Issue Reporting System (LIVE) */}
          <a className="project-item reveal" href="https://civic-issue-reporting-system-six.vercel.app/" target="_blank" rel="noopener">
            <div className="project-num">01</div>
            <div className="project-info">
              <div className="project-title">Civic Issue Reporting System</div>
              <p className="project-desc">A full-stack platform enabling citizens to report civic issues — potholes, garbage, streetlights, water leaks — with photos, GPS location, and descriptions. Features a real-time issue map view, admin dashboard, and status tracking for faster resolution.</p>
              <div className="project-tags">
                <span className="project-tag">React</span>
                <span className="project-tag">Node.js / Express</span>
                <span className="project-tag">MongoDB</span>
                <span className="project-tag">Google Maps API</span>
                <span className="project-tag-live">● Live</span>
              </div>
            </div>
            <div className="project-arrow">↗</div>
          </a>
      
          {/* Project 02 — Expense Tracker (Live) */}
          <a
            className="project-item reveal reveal-delay-1"
            href="https://khatatrack.vercel.app/"
            target="_blank"
            rel="noopener"
          >
            <div className="project-num">02</div>

            <div className="project-info">
              <div className="project-title">
                Real-Time Expense Tracker & Budget Planner
              </div>

              <p className="project-desc">
                A full-stack personal finance application designed for tracking daily
                expenses, managing monthly budgets, categorizing transactions, and
                visualizing spending patterns through interactive dashboards. Includes
                secure JWT authentication, automated monthly reports, budget alerts,
                and a responsive modern UI for better financial management.
              </p>

              <div className="project-tags">
                <span className="project-tag">React</span>
                <span className="project-tag">Chart.js</span>
                <span className="project-tag">Node.js</span>
                <span className="project-tag">MongoDB</span>
                <span className="project-tag">JWT</span>
                <span className="project-tag-live">● Live</span>
              </div>
            </div>

            <div className="project-arrow">↗</div>
          </a>
      
          {/* Project 03 — Event Management System (LIVE) */}
          <a className="project-item reveal reveal-delay-2" href="https://event-management-system-ivory-ten.vercel.app/" target="_blank" rel="noopener">
            <div className="project-num">03</div>
            <div className="project-info">
              <div className="project-title">Event Management System</div>
              <p className="project-desc">A full-stack college event platform for booking, registering, and verifying events via QR code scanning. Attendees register online and receive a unique QR code; organisers scan codes at entry for instant verification — eliminating manual check-ins and reducing queues at college fests.</p>
              <div className="project-tags">
                <span className="project-tag">React</span>
                <span className="project-tag">Node.js / Express</span>
                <span className="project-tag">MongoDB</span>
                <span className="project-tag">QR Code API</span>
                <span className="project-tag">JWT</span>
                <span className="project-tag-live">● Live</span>
              </div>
            </div>
            <div className="project-arrow">↗</div>
          </a>
      
          {/* Project 04 — Smart Canteen (no live link) */}
          <div className="project-item reveal reveal-delay-3">
            <div className="project-num">04</div>
            <div className="project-info">
              <div className="project-title">Smart Canteen — College Food Booking System</div>
              <p className="project-desc">A college welfare e-commerce platform that lets students pre-order canteen meals online, choose pick-up slots, and pay digitally — drastically cutting physical queues and wait times. Features a real-time order dashboard for canteen staff, menu management, and order history for students.</p>
              <div className="project-tags">
                <span className="project-tag">MERN Stack</span>
                <span className="project-tag">Razorpay / UPI</span>
                <span className="project-tag">React</span>
                <span className="project-tag">Node.js</span>
                <span className="project-tag">MongoDB</span>
                <span className="project-tag">Tailwind</span>
              </div>
            </div>
            <div className="project-arrow-soon">Soon</div>
          </div>
      
        </div>
      </section>
      
      {/* EDUCATION */}
      <section id="education">
        <div className="section-header reveal">
          <span className="section-num">04</span>
          <div className="section-line"></div>
          <h2 className="section-title">Education</h2>
        </div>
        <div className="edu-timeline">
      
          <div className="edu-item reveal">
            <div className="edu-year">Sep 2024 — Present</div>
            <div className="edu-dot-col">
              <div className="edu-dot"></div>
              <div className="edu-vline"></div>
            </div>
            <div className="edu-body">
              <div className="edu-degree">B.E. — Information Technology</div>
              <div className="edu-school">Chaitanya Bharathi Institute of Technology · Hyderabad, Telangana, India</div>
              <p className="edu-desc">Specialising in Full Stack Development and exploring Machine Learning &amp; Generative AI. Active hackathon participant and builder of real-world software projects throughout the programme.</p>
              <div className="edu-tags">
                <span className="edu-tag">CGPA — 9.21 / 10</span>
                <span className="edu-tag">MERN Stack Focus</span>
                <span className="edu-tag">ML &amp; Gen AI</span>
              </div>
            </div>
          </div>
      
          <div className="edu-item reveal reveal-delay-1">
            <div className="edu-year">Jun 2022 — Mar 2024</div>
            <div className="edu-dot-col">
              <div className="edu-dot"></div>
              <div className="edu-vline"></div>
            </div>
            <div className="edu-body">
              <div className="edu-degree">Intermediate — MPC (Class XII)</div>
              <div className="edu-school">Valley Oak Junior College · Manikonda, Hyderabad, India</div>
              <p className="edu-desc">Secured strong marks in Mathematics, Physics, and Chemistry. Built first web projects during this period, developing a solid foundation in programming logic and problem-solving.</p>
              <div className="edu-tags">
                <span className="edu-tag">948 / 1000</span>
                <span className="edu-tag">94.8 %</span>
              </div>
            </div>
          </div>
      
          <div className="edu-item reveal reveal-delay-2">
            <div className="edu-year">2019</div>
            <div className="edu-dot-col">
              <div className="edu-dot"></div>
            </div>
            <div className="edu-body">
              <div className="edu-degree">Class X — CBSE</div>
              <div className="edu-school">Greenwood High School · Warangal, Telangana, India</div>
              <p className="edu-desc">Strong academic record with top scores in Mathematics and Science. First exposure to programming through the school's technology club, sparking a lasting passion for software development.</p>
              <div className="edu-tags">
                <span className="edu-tag">443 / 500</span>
                <span className="edu-tag">88.6 %</span>
              </div>
            </div>
          </div>
      
        </div>
      </section>
      
      {/* EXPERIENCE */}
      <section id="experience">
        <div className="section-header reveal">
          <span className="section-num">05</span>
          <div className="section-line"></div>
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="exp-list">
      
          <div className="exp-item reveal">
            <div className="exp-year">2025</div>
            <div className="exp-dot-col">
              <div className="exp-dot"></div>
              <div className="exp-vline"></div>
            </div>
            <div className="exp-body">
              <div className="exp-title">Smart India Hackathon (SIH) 2025</div>
              <div className="exp-org">Ministry of Education · National Level</div>
              <ul className="exp-desc">
                <li>Collaborated on innovative solutions for real-world problems under tight deadlines at a national-level hackathon.</li>
                <li>Gained hands-on experience in rapid prototyping, system design, and presenting to a panel of judges.</li>
              </ul>
            </div>
          </div>
      
          <div className="exp-item reveal reveal-delay-1">
            <div className="exp-year">2025</div>
            <div className="exp-dot-col">
              <div className="exp-dot"></div>
              <div className="exp-vline"></div>
            </div>
            <div className="exp-body">
              <div className="exp-title">Ethical Hacking Workshop</div>
              <div className="exp-org">Cybersecurity Training · 2025</div>
              <ul className="exp-desc">
                <li>Attended an intensive workshop covering ethical hacking, penetration testing, and web application security.</li>
                <li>Performed practical labs on vulnerability assessment and applied secure coding principles to real scenarios.</li>
              </ul>
            </div>
          </div>
      
          <div className="exp-item reveal reveal-delay-2">
            <div className="exp-year">Feb 2026</div>
            <div className="exp-dot-col">
              <div className="exp-dot"></div>
            </div>
            <div className="exp-body">
              <div className="exp-title">Hackathon Conductor — Sudhee Tech Fest</div>
              <div className="exp-org">CBIT Annual Tech Fest · Sudhee · February 2026</div>
              <ul className="exp-desc">
                <li>Organised and conducted the hackathon event at Sudhee, CBIT's annual technical festival, coordinating participant registrations, problem statement releases, and judging logistics.</li>
                <li>Managed teams, maintained event timelines, and ensured smooth execution of the coding competition from start to finish.</li>
              </ul>
            </div>
          </div>
      
        </div>
      </section>
      
      {/* CERTIFICATES */}
      <section id="certificates">
        <div className="section-header reveal">
          <span className="section-num">06</span>
          <div className="section-line"></div>
          <h2 className="section-title">Certificates</h2>
        </div>
        <div className="cert-grid">
      
          <a className="cert-card reveal" href="https://drive.google.com/file/d/14OHq50tj7lZpb3MMxOtDJdn4DQe-t3U8/view?usp=drivesdk" target="_blank" rel="noopener">
            <div className="cert-logo">🎓</div>
            <div className="cert-issuer">Udemy</div>
            <div className="cert-name">Full Stack Web Development Certification</div>
            <div className="cert-date">Sep 2025 – Oct 2025 · Udemy</div>
            <div className="cert-badge cert-badge--link">↗ View Certificate</div>
          </a>
      
          <a className="cert-card reveal reveal-delay-1" href="https://drive.google.com/file/d/1BEUpfPdTKzNfyQiuas7Ss3g6EWG5jQvb/view?usp=drivesdk" target="_blank" rel="noopener">
            <div className="cert-logo">🤖</div>
            <div className="cert-issuer">NPTEL</div>
            <div className="cert-name">Programming with Generative AI</div>
            <div className="cert-date">Jul 2025 – Oct 2025 · NPTEL</div>
            <div className="cert-badge cert-badge--link">↗ View Certificate</div>
          </a>
      
          <a className="cert-card reveal reveal-delay-2" href="https://drive.google.com/file/d/12JV2lvEQ8Bev7g4I7fA6DiqHy9fTriQe/view?usp=drivesdk" target="_blank" rel="noopener">
            <div className="cert-logo">☁️</div>
            <div className="cert-issuer">Oracle</div>
            <div className="cert-name">Oracle Cloud Infrastructure Foundations Associate</div>
            <div className="cert-date">Oracle University</div>
            <div className="cert-badge cert-badge--link">↗ View Certificate</div>
          </a>
      
          <a className="cert-card reveal reveal-delay-3" href="https://drive.google.com/file/d/1CPBu0Yu6jXI5nrdUp_C5mZsKiS6Bc1I_/view?usp=drivesdk" target="_blank" rel="noopener">
            <div className="cert-logo">🍃</div>
            <div className="cert-issuer">MongoDB University</div>
            <div className="cert-name">MongoDB Node.js Developer Path</div>
            <div className="cert-date">MongoDB University</div>
            <div className="cert-badge cert-badge--link">↗ View Certificate</div>
          </a>
      
          <a className="cert-card reveal" href="https://drive.google.com/file/d/1jcbpBTYUr7jc5H4liMaF4cJl75bkk1Qo/view?usp=drivesdk" target="_blank" rel="noopener">
            <div className="cert-logo">🐍</div>
            <div className="cert-issuer">Python Institute</div>
            <div className="cert-name">Foundations of Python Programming</div>
            <div className="cert-date">Python Institute / PCEP</div>
            <div className="cert-badge cert-badge--link">↗ View Certificate</div>
          </a>
      
        </div>
      </section>
      
      {/* ACHIEVEMENTS */}
      <section id="achievements">
        <div className="section-header reveal">
          <span className="section-num">07</span>
          <div className="section-line"></div>
          <h2 className="section-title">Achievements</h2>
        </div>
        <div className="ach-list">
      
          <div className="ach-item reveal">
            <div className="ach-icon">🏆</div>
            <div className="ach-content">
              <div className="ach-title">JEE Mains Qualified</div>
              <div className="ach-sub">National Entrance Examination · 2024</div>
              <p className="ach-desc">Achieved All India Rank 52,616 in JEE Mains among more than 16 lakh candidates nationwide — a rigorous test of Mathematics, Physics, and Chemistry at the national level.</p>
            </div>
            <div className="ach-rank">AIR<br/>52,616</div>
          </div>
      
          <div className="ach-item reveal reveal-delay-1">
            <div className="ach-icon">⭐</div>
            <div className="ach-content">
              <div className="ach-title">Elite + Silver Badge — NPTEL</div>
              <div className="ach-sub">Programming with Generative AI · NPTEL · 2025</div>
              <p className="ach-desc">Earned the prestigious Elite + Silver Badge in the NPTEL course on Programming with Generative AI, recognising outstanding performance in assessments and project submissions.</p>
            </div>
            <div className="ach-rank">Elite+<br/>Silver</div>
          </div>
      
          <div className="ach-item reveal reveal-delay-2">
            <div className="ach-icon">📈</div>
            <div className="ach-content">
              <div className="ach-title">Academic Excellence — CGPA 9.21</div>
              <div className="ach-sub">Chaitanya Bharathi Institute of Technology · 2024 – Present</div>
              <p className="ach-desc">Maintaining a strong CGPA of 9.21/10 in B.E. Information Technology, consistently improving through dedicated academic effort and applied software project work each semester.</p>
            </div>
            <div className="ach-rank">9.21<br/>/10</div>
          </div>
      
          <div className="ach-item reveal reveal-delay-3">
            <div className="ach-icon">🏏</div>
            <div className="ach-content">
              <div className="ach-title">Team Winners — Inter-College Cricket Tournament</div>
              <div className="ach-sub">Finals 2026 · Extracurricular</div>
              <p className="ach-desc">Part of the winning team in the Inter-College Cricket Tournament Finals 2026, demonstrating teamwork, leadership, and performance under pressure beyond academics.</p>
            </div>
            <div className="ach-rank">🥇<br/>Winners</div>
          </div>
      
          <div className="ach-item reveal">
            <div className="ach-icon">💡</div>
            <div className="ach-content">
              <div className="ach-title">Open Source &amp; Community Contributor</div>
              <div className="ach-sub">GitHub · Coding Competitions · College Events · 2023 – Present</div>
              <p className="ach-desc">Participated in multiple coding competitions and college cultural events. Contributed to organising college fests and technical workshops, building leadership and collaboration skills.</p>
            </div>
            <div className="ach-rank">OSS</div>
          </div>
      
        </div>
      </section>
      
      {/* CONTACT */}
      <section id="contact">
        <div className="section-header reveal">
          <span className="section-num">08</span>
          <div className="section-line"></div>
          <h2 className="section-title">Contact</h2>
        </div>
        <div className="contact-wrap">
          <div className="reveal">
            <h3 className="contact-headline">Let's build something <em>extraordinary</em></h3>
            <p className="contact-sub">Open to full-stack roles, internships, freelance projects, and collaborations. If you have a vision, I have the code to make it real.</p>
            <div className="contact-links">
              <a className="contact-link" href="https://github.com/Addagudi-Sathvik" target="_blank" rel="noopener noreferrer">
                <div className="contact-link-icon">⌥</div>
                <div>
                  <div className="contact-link-text">GitHub</div>
                  <div className="contact-link-sub">github.com/Addagudi-Sathvik</div>
                </div>
              </a>
              <a className="contact-link" href="https://www.linkedin.com/in/addagudi-sathvik" target="_blank" rel="noopener noreferrer">
                <div className="contact-link-icon">in</div>
                <div>
                  <div className="contact-link-text">LinkedIn</div>
                  <div className="contact-link-sub">linkedin.com/in/addagudi-sathvik</div>
                </div>
              </a>
              <a className="contact-link" href="tel:+919848016444">
                <div className="contact-link-icon">📞</div>
                <div>
                  <div className="contact-link-text">Phone</div>
                  <div className="contact-link-sub">+91 98480 16444</div>
                </div>
              </a>
              <a className="contact-link" href="mailto:addagudisathvik@gmail.com">
                <div className="contact-link-icon">@</div>
                <div>
                  <div className="contact-link-text">Email</div>
                  <div className="contact-link-sub">addagudisathvik@gmail.com</div>
                </div>
              </a>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="John Doe"/>
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com"/>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell me about your project..."></textarea>
            </div>
            <button className="btn-send" onClick={handleSendMessage}>
              Send Message <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer>
        <div className="footer-logo">Addagudi Sathvik</div>
        <div className="footer-copy">© 2025 · All Rights Reserved</div>
        <div className="footer-socials">
          <a href="https://github.com/Addagudi-Sathvik" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/addagudi-sathvik" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:addagudisathvik@gmail.com">Email</a>
        </div>
      </footer>
      
      {/* FLOATING RESUME FAB */}
      <a className="resume-fab" href="https://drive.google.com/file/d/15G-UcHY6MHkdOVaNvoFh9xi4SiXRtC_a/view?usp=drivesdk" target="_blank" rel="noopener" title="View Résumé">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="12" y1="18" x2="12" y2="12"/>
          <line x1="9" y1="15" x2="15" y2="15"/>
        </svg>
        <span className="resume-fab-label">Résumé</span>
      </a>
    </>
  );
}
