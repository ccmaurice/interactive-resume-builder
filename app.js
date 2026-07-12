// ==========================================
// Preloaded Resume Data (Default Sample Profile)
// ==========================================
const defaultResumeData = {
  name: "Chukwudebelu Chinedu Maurice",
  title: "FULL STACK DEVELOPER, IBDP/MYP COMPUTER TEACHER & IT ENGINEER",
  email: "mauricenex@gmail.com",
  phone: "+234 08162476247 | 0993-942-167",
  location: "Kinshasa, DRC | Lagos, Nigeria",
  summary: "Multifaceted educator, full-stack software engineer, and IT specialist with over 10 years of experience across web/mobile application development, UI/UX design, and technology instruction. Proven track record in designing and delivering production-grade multi-tenant SaaS products and modernizing educational platforms (LMS). Skilled in bridging the gap between complex engineering requirements and institutional leadership through clear communication, robust technical architecture, and pedagogical excellence. Passionate about classroom technology (AI, VR), coding, and physical well-being (certified fitness coach & kickboxing trainer) to drive holistic development.",
  competencies: {
    languages: "PHP (Expert), Python (Expert), JavaScript (Expert), HTML5/CSS3 (Expert)",
    frameworks: "Next.js (App Router), React, Tailwind CSS, Scratch",
    backend: "PostgreSQL, Prisma ORM, MySQL, Supabase, JWT Authentication, Vercel",
    systems: "Computer OS installation, software maintenance, hardware networking, and laptop repair",
    soft: ""
  },
  experience: [
    {
      role: "International Baccalaureate MYP/DP Computer Teacher",
      org: "Jewels International School of Kinshasa (JISK), Congo",
      date: "2023 – Present",
      bullets: [
        "Leads Digital and Product Design instruction for MYP 4, 5 (grades 9-10) and DP students",
        "Implements engaging lesson plans incorporating the MYP design cycle and multimedia resources",
        "Conducts formative and summative assessments to meet diverse learning needs"
      ]
    },
    {
      role: "Full Stack Developer",
      org: "SkillTech",
      date: "2022 – Present",
      bullets: [
        "Develops and manages online IT training programs and Python coding curriculum",
        "Engineered a production-ready Multi-Tenant SaaS LMS featuring data isolation and verifiable PDF certificates",
        "Project URL: https://skilltech.com.ng | GitHub: https://github.com/ccmaurice"
      ]
    },
    {
      role: "English, Computer, Biology and Civic Education Teacher",
      org: "Power Tech International English School, Kinshasa",
      date: "2022 – 2023",
      bullets: [
        "Taught English, Computer Science, Biology, and Civic Education for grades 7–12",
        "Spearheaded the integration of educational technology tools and Learning Management Systems (LMS)",
        "Collaborated with school administration to develop and implement a comprehensive technology plan"
      ]
    },
    {
      role: "ICT and STEM Educator / Senior Web Developer",
      org: "Mater Dei Schools, Lagos, Nigeria",
      date: "2016 – 2022",
      bullets: [
        "Taught ICT and STEM subjects (Computer Science, IT, and basic Science) to students in grades 6-12",
        "Developed a comprehensive school LMS and eBook application, managing databases, backup systems, and recovery",
        "Designed an audio book and painting application for preschool students"
      ]
    },
    {
      role: "Senior System Engineer",
      org: "ICT Expertz & CcMaurice Technologies",
      date: "2015 – Present",
      bullets: [
        "Delivers high-level ICT consultancy, including software development and laptop repairs",
        "Provides specialized training in computer programming and graphic animation"
      ]
    },
    {
      role: "Basic Technology and English Teacher",
      org: "National Youth Service Corps (NYSC), Jos, Nigeria",
      date: "2013 – 2014",
      bullets: [
        "Taught Basic Technology and English to students in grade 6-10, promoting digital literacy",
        "Developed and implemented engaging lesson plans, incorporating multimedia resources",
        "Assessed student progress and provided feedback, and adapted instruction to meet diverse learning needs"
      ]
    },
    {
      role: "Fitness Coach and Kickboxing Trainer",
      org: "Ginars Fitness Gym, Lagos, Nigeria",
      date: "2012 – 2021",
      bullets: [
        "Designed and delivered group fitness classes, personal training session, and kickboxing / self-defence programs",
        "Provided massage therapy sessions, swimming classes, and fitness well-being updates"
      ]
    }
  ],
  projects: [
    {
      name: "Multi-Tenant SaaS LMS",
      links: "Next.js, PostgreSQL, Prisma",
      bullets: [
        "A full-stack learning platform built with Next.js and PostgreSQL using Prisma",
        "Features role-based access control, tenant data isolation, and public verification of credentials via QR codes"
      ]
    }
  ],
  education: [
    {
      degree: "M.Sc. Information Technology (In View)",
      school: "Miva Open University",
      date: ""
    },
    {
      degree: "UK Teacher Certification Program Course",
      school: "Golden Links UK",
      date: "2023"
    },
    {
      degree: "B.Sc. Environmental Management Science",
      school: "Anambra State University, Uli",
      date: "2012"
    },
    {
      degree: "Diploma in Computer and Information Technology",
      school: "International Machine System (IMS), Lagos",
      date: "2008"
    },
    {
      degree: "St. Finbarr’s College of Science and Technology (SSLC)",
      school: "Akoka, Lagos, Nigeria",
      date: "2004"
    }
  ],
  certifications: [
    { name: "Agentic AI Certified Foundations Associate", issuer: "Oracle", date: "Jul 05, 2026" },
    { name: "Fundamentals of AI", issuer: "Cognitive Class - IBM Skills Network", date: "Jun 28, 2026" },
    { name: "AWS AI Practitioner Challenge", issuer: "Udacity", date: "Jun 23, 2026" },
    { name: "Prompt Engineering & Programming with OpenAI", issuer: "Columbia+", date: "Apr 07, 2026" },
    { name: "Software Engineering (CS302)", issuer: "Saylor Academy", date: "Mar 22, 2026" },
    { name: "Data Science with Python & AI", issuer: "Golden Links UK", date: "2023" },
    { name: "UK Teacher Certification", issuer: "Golden Links UK", date: "Dec 15, 2021" },
    { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft", date: "Dec 23, 2020" },
    { name: "Google IT Support Professional Certificate", issuer: "Google", date: "2019" },
    { name: "Certified Artificial Intelligence Professional", issuer: "IIEC", date: "2019" }
  ],
  hobbies: "Strategic Games (Chess, Scrabble), Sports (Football, Swimming), Martial Arts (Kick Boxing Trainer), Fitness Coaching. Spoken Languages: English, Igbo, Yoruba, Hausa, French",
  pageLimit: "fit-2"
};

// Current application state
let resumeData = JSON.parse(localStorage.getItem('saved_resume_v5')) || { ...defaultResumeData };
if (!resumeData.pageLimit) {
  resumeData.pageLimit = "fit-2";
}

// Query parameter override for testing or direct URL setting
const urlParams = new URLSearchParams(window.location.search);
const fitParam = urlParams.get('fit');
if (fitParam && ['fit-1', 'fit-2', 'fit-3'].includes(fitParam)) {
  resumeData.pageLimit = fitParam;
}

// ==========================================
// Initialization & Event Binding
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  setupAccordion();
  populateFormFields();
  setupEventListeners();
  renderResume();
});

// Accordion Toggle
function setupAccordion() {
  const headers = document.querySelectorAll('.accordion-header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');
      
      // Close all items
      document.querySelectorAll('.accordion-item').forEach(el => el.classList.remove('active'));
      
      // Toggle active status
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// Populate UI form inputs from state
function populateFormFields() {
  // Static Personal info
  document.getElementById('input-name').value = resumeData.name || '';
  document.getElementById('input-title').value = resumeData.title || '';
  document.getElementById('input-email').value = resumeData.email || '';
  document.getElementById('input-phone').value = resumeData.phone || '';
  document.getElementById('input-location').value = resumeData.location || '';
  document.getElementById('input-summary').value = resumeData.summary || '';
  
  // Competencies
  document.getElementById('input-comp-languages').value = resumeData.competencies?.languages || '';
  document.getElementById('input-comp-frameworks').value = resumeData.competencies?.frameworks || '';
  document.getElementById('input-comp-backend').value = resumeData.competencies?.backend || '';
  document.getElementById('input-comp-systems').value = resumeData.competencies?.systems || '';
  document.getElementById('input-comp-soft').value = resumeData.competencies?.soft || '';

  // Hobbies
  document.getElementById('input-hobbies').value = resumeData.hobbies || '';

  // Page limit
  document.getElementById('page-limit-select').value = resumeData.pageLimit || 'fit-2';
  updateSheetClasses();

  // Dynamic Lists
  renderDynamicList('experience', renderExperienceItemForm);
  renderDynamicList('projects', renderProjectItemForm);
  renderDynamicList('education', renderEducationItemForm);
  renderDynamicList('certifications', renderCertificationItemForm);
}

// Helper to keep template and fit classes synced on the resume sheet
function updateSheetClasses() {
  const sheet = document.getElementById('resume-sheet');
  const template = document.getElementById('template-select').value;
  const fit = document.getElementById('page-limit-select').value;
  sheet.className = `resume-sheet ${template} ${fit}`;
}

// Setup live update events and actions
function setupEventListeners() {
  // Basic input binding
  const inputs = [
    { id: 'input-name', key: 'name' },
    { id: 'input-title', key: 'title' },
    { id: 'input-email', key: 'email' },
    { id: 'input-phone', key: 'phone' },
    { id: 'input-location', key: 'location' },
    { id: 'input-summary', key: 'summary' },
    { id: 'input-hobbies', key: 'hobbies' }
  ];

  inputs.forEach(inp => {
    const el = document.getElementById(inp.id);
    el.addEventListener('input', (e) => {
      resumeData[inp.key] = e.target.value;
      saveState();
      renderResume();
    });
  });

  // Competency updates
  const comps = ['languages', 'frameworks', 'backend', 'systems', 'soft'];
  comps.forEach(comp => {
    const el = document.getElementById(`input-comp-${comp}`);
    el.addEventListener('input', (e) => {
      if (!resumeData.competencies) resumeData.competencies = {};
      resumeData.competencies[comp] = e.target.value;
      saveState();
      renderResume();
    });
  });

  // Template switching
  const templateSelect = document.getElementById('template-select');
  templateSelect.addEventListener('change', (e) => {
    updateSheetClasses();
    renderResume();
  });

  // Page limit switching
  const limitSelect = document.getElementById('page-limit-select');
  limitSelect.addEventListener('change', (e) => {
    resumeData.pageLimit = e.target.value;
    saveState();
    updateSheetClasses();
    renderResume();
  });

  // Action Bar Buttons
  document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);
  document.getElementById('print-btn').addEventListener('click', () => window.print());
  document.getElementById('reset-btn').addEventListener('click', resetToDemo);
  
  // Export/Import hooks
  document.getElementById('export-btn').addEventListener('click', exportData);
  document.getElementById('import-btn').addEventListener('click', () => {
    document.getElementById('import-file-input').click();
  });
  document.getElementById('import-file-input').addEventListener('change', importData);

  // Dynamic Add Buttons
  document.getElementById('add-experience-btn').addEventListener('click', () => {
    resumeData.experience.push({ role: '', org: '', date: '', bullets: [''] });
    saveState();
    populateFormFields();
    renderResume();
  });

  document.getElementById('add-project-btn').addEventListener('click', () => {
    resumeData.projects.push({ name: '', links: '', bullets: [''] });
    saveState();
    populateFormFields();
    renderResume();
  });

  document.getElementById('add-education-btn').addEventListener('click', () => {
    resumeData.education.push({ degree: '', school: '', date: '' });
    saveState();
    populateFormFields();
    renderResume();
  });

  document.getElementById('add-certification-btn').addEventListener('click', () => {
    resumeData.certifications.push({ name: '', issuer: '', date: '' });
    saveState();
    populateFormFields();
    renderResume();
  });
}

// Save state to local storage
function saveState() {
  localStorage.setItem('saved_resume_v5', JSON.stringify(resumeData));
}

// Toggle app theme (Light / Dark)
function toggleTheme() {
  const body = document.body;
  if (body.classList.contains('dark-theme')) {
    body.classList.replace('dark-theme', 'light-theme');
  } else {
    body.classList.replace('light-theme', 'dark-theme');
  }
}

// Reset data to defaults
function resetToDemo() {
  if (confirm("Reset everything to the default sample resume? Your current edits will be lost.")) {
    resumeData = JSON.parse(JSON.stringify(defaultResumeData));
    saveState();
    populateFormFields();
    renderResume();
  }
}

// Export state to JSON file
function exportData() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(resumeData, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `${resumeData.name.replace(/\s+/g, '_')}_resume.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

// Import JSON file to state
function importData(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const imported = JSON.parse(evt.target.result);
      if (imported.name) {
        resumeData = imported;
        saveState();
        populateFormFields();
        renderResume();
        alert("Resume JSON imported successfully!");
      } else {
        alert("Invalid JSON format.");
      }
    } catch (err) {
      alert("Error parsing JSON file.");
    }
  };
  reader.readAsText(file);
}

// ==========================================
// Dynamic List Renderer (Forms side)
// ==========================================
function renderDynamicList(key, itemRenderer) {
  const container = document.getElementById(`${key}-list`);
  container.innerHTML = '';
  
  if (!resumeData[key] || resumeData[key].length === 0) {
    container.innerHTML = `<p class="no-items text-muted" style="font-size: 13px;">No items added yet.</p>`;
    return;
  }

  resumeData[key].forEach((item, index) => {
    const itemEl = itemRenderer(item, index);
    container.appendChild(itemEl);
  });
}

function renderExperienceItemForm(item, index) {
  const el = document.createElement('div');
  el.className = 'dynamic-item';
  el.innerHTML = `
    <button class="remove-item-btn" onclick="removeItem('experience', ${index})">✕</button>
    <div class="form-grid">
      <div class="form-group col-12">
        <label>Job Title / Role</label>
        <input type="text" value="${item.role || ''}" oninput="updateItemField('experience', ${index}, 'role', this.value)">
      </div>
      <div class="form-group col-7">
        <label>Organization / Company</label>
        <input type="text" value="${item.org || ''}" oninput="updateItemField('experience', ${index}, 'org', this.value)">
      </div>
      <div class="form-group col-5">
        <label>Dates (e.g. 2022 - Pres)</label>
        <input type="text" value="${item.date || ''}" oninput="updateItemField('experience', ${index}, 'date', this.value)">
      </div>
      <div class="form-group col-12">
        <label>Bullet Points (one per line)</label>
        <textarea rows="3" oninput="updateBullets('experience', ${index}, this.value)">${(item.bullets || []).join('\n')}</textarea>
      </div>
    </div>
  `;
  return el;
}

function renderProjectItemForm(item, index) {
  const el = document.createElement('div');
  el.className = 'dynamic-item';
  el.innerHTML = `
    <button class="remove-item-btn" onclick="removeItem('projects', ${index})">✕</button>
    <div class="form-grid">
      <div class="form-group col-6">
        <label>Project Name</label>
        <input type="text" value="${item.name || ''}" oninput="updateItemField('projects', ${index}, 'name', this.value)">
      </div>
      <div class="form-group col-6">
        <label>Tech Stack / Links</label>
        <input type="text" value="${item.links || ''}" oninput="updateItemField('projects', ${index}, 'links', this.value)">
      </div>
      <div class="form-group col-12">
        <label>Details / Highlights (one per line)</label>
        <textarea rows="3" oninput="updateBullets('projects', ${index}, this.value)">${(item.bullets || []).join('\n')}</textarea>
      </div>
    </div>
  `;
  return el;
}

function renderEducationItemForm(item, index) {
  const el = document.createElement('div');
  el.className = 'dynamic-item';
  el.innerHTML = `
    <button class="remove-item-btn" onclick="removeItem('education', ${index})">✕</button>
    <div class="form-grid">
      <div class="form-group col-12">
        <label>Degree / Certificate</label>
        <input type="text" value="${item.degree || ''}" oninput="updateItemField('education', ${index}, 'degree', this.value)">
      </div>
      <div class="form-group col-8">
        <label>Institution / School</label>
        <input type="text" value="${item.school || ''}" oninput="updateItemField('education', ${index}, 'school', this.value)">
      </div>
      <div class="form-group col-4">
        <label>Graduation Year</label>
        <input type="text" value="${item.date || ''}" oninput="updateItemField('education', ${index}, 'date', this.value)">
      </div>
    </div>
  `;
  return el;
}

function renderCertificationItemForm(item, index) {
  const el = document.createElement('div');
  el.className = 'dynamic-item';
  el.innerHTML = `
    <button class="remove-item-btn" onclick="removeItem('certifications', ${index})">✕</button>
    <div class="form-grid">
      <div class="form-group col-12">
        <label>Certification Name</label>
        <input type="text" value="${item.name || ''}" oninput="updateItemField('certifications', ${index}, 'name', this.value)">
      </div>
      <div class="form-group col-8">
        <label>Issuing Organization</label>
        <input type="text" value="${item.issuer || ''}" oninput="updateItemField('certifications', ${index}, 'issuer', this.value)">
      </div>
      <div class="form-group col-4">
        <label>Year</label>
        <input type="text" value="${item.date || ''}" oninput="updateItemField('certifications', ${index}, 'date', this.value)">
      </div>
    </div>
  `;
  return el;
}

// Global update handlers for dynamic lists
window.removeItem = function(key, index) {
  resumeData[key].splice(index, 1);
  saveState();
  populateFormFields();
  renderResume();
};

window.updateItemField = function(key, index, field, value) {
  resumeData[key][index][field] = value;
  saveState();
  renderResume();
};

window.updateBullets = function(key, index, text) {
  resumeData[key][index].bullets = text.split('\n').filter(line => line.trim() !== '');
  saveState();
  renderResume();
};


// ==========================================
// Resume Template Rendering Engine
// ==========================================
function renderResume() {
  const container = document.getElementById('resume-sheet');
  const template = document.getElementById('template-select').value;
  
  if (template === 'modern-tech') {
    container.innerHTML = renderModernTechTemplate();
  } else if (template === 'minimalist') {
    container.innerHTML = renderMinimalistTemplate();
  } else if (template === 'executive') {
    container.innerHTML = renderExecutiveTemplate();
  }
}

// --- TEMPLATE 1: MODERN TECH SIDEBAR RENDERER ---
function renderModernTechTemplate() {
  return `
    <div class="sidebar">
      <div class="header-info">
        <div class="name">${resumeData.name}</div>
        <div class="title">${resumeData.title}</div>
      </div>
      
      <div class="contact-details">
        <div class="contact-item">📍 ${resumeData.location}</div>
        <div class="contact-item">✉️ <a href="mailto:${resumeData.email}">${resumeData.email}</a></div>
        <div class="contact-item">📞 ${resumeData.phone}</div>
      </div>

      <div class="sidebar-section">
        <div class="sidebar-section-title">Core Skills</div>
        ${renderSkillsListHtml(resumeData.competencies)}
      </div>

      <div class="sidebar-section">
        <div class="sidebar-section-title">Certifications</div>
        <div class="cert-list" style="display:flex; flex-direction:column; gap:5px; font-size:10.5px;">
          ${(resumeData.certifications || []).map(cert => `
            <div>
              <strong style="color:#0f172a;">${cert.name}</strong><span style="color:#475569;">${cert.issuer ? `, ${cert.issuer}` : ''}${cert.date ? ` (${cert.date})` : ''}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="sidebar-section">
        <div class="sidebar-section-title">Hobbies</div>
        <div style="font-size:11.5px; color:#475569; line-height:1.4;">
          ${resumeData.hobbies || ''}
        </div>
      </div>
    </div>

    <div class="main-content">
      <div class="section">
        <div class="section-title">Executive Summary</div>
        <div class="summary-text">${resumeData.summary}</div>
      </div>

      <div class="section">
        <div class="section-title">Professional Experience</div>
        <div class="experience-list" style="display:flex; flex-direction:column; gap:16px;">
          ${(resumeData.experience || []).map(exp => `
            <div class="timeline-item">
              <div class="timeline-header">
                <div class="item-role-org">${exp.role} <span>at ${exp.org}</span></div>
                <div class="item-date">${exp.date}</div>
              </div>
              <ul class="item-bullets">
                ${(exp.bullets || []).map(bullet => `<li>${bullet}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>

      ${resumeData.projects && resumeData.projects.length > 0 ? `
      <div class="section">
        <div class="section-title">Key Projects</div>
        <div class="project-list" style="display:flex; flex-direction:column; gap:14px;">
          ${(resumeData.projects || []).map(proj => `
            <div class="project-item">
              <div class="project-header">
                <div class="project-name">${proj.name} <span style="font-weight:400; font-size:11px; color:#64748b;">(${proj.links})</span></div>
              </div>
              <ul class="item-bullets" style="padding-left:18px; margin-top:2px;">
                ${(proj.bullets || []).map(bullet => `<li>${bullet}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>
      ` : ''}

      <div class="section">
        <div class="section-title">Education</div>
        <div class="education-list" style="display:flex; flex-direction:column; gap:8px;">
          ${(resumeData.education || []).map(edu => `
            <div style="display:flex; justify-content:space-between; align-items:baseline;">
              <div>
                <strong style="color:#0f172a; font-size:12.5px;">${edu.degree}</strong>
                <div style="font-size:11.5px; color:#475569;">${edu.school}</div>
              </div>
              <div style="font-size:11px; font-weight:600; color:#64748b;">${edu.date}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// Helper to render competencies as grouped pill tags
function renderSkillsListHtml(comps) {
  if (!comps) return '';
  const categories = [
    { label: 'Languages', value: comps.languages },
    { label: 'Frameworks', value: comps.frameworks },
    { label: 'Backend & Ops', value: comps.backend },
    { label: 'Systems', value: comps.systems }
  ];

  return categories.map(cat => {
    if (!cat.value) return '';
    // Split on commas (avoid splitting on parentheses)
    const skills = cat.value.split(',').map(s => s.trim());
    return `
      <div class="skill-group">
        <strong>${cat.label}</strong>
        <div class="skill-list">
          ${skills.map(s => `<span class="skill-badge">${s}</span>`).join('')}
        </div>
      </div>
    `;
  }).join('');
}


// --- TEMPLATE 2: MINIMALIST SANS RENDERER ---
function renderMinimalistTemplate() {
  return `
    <div class="header">
      <div class="name">${resumeData.name}</div>
      <div class="title">${resumeData.title}</div>
      <div class="contact-row">
        <div class="contact-item">📍 ${resumeData.location}</div>
        <div class="contact-item">✉️ <a href="mailto:${resumeData.email}">${resumeData.email}</a></div>
        <div class="contact-item">📞 ${resumeData.phone}</div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Executive Summary</div>
      <div class="summary-text">${resumeData.summary}</div>
    </div>

    <div class="section">
      <div class="section-title">Competencies</div>
      <div class="competency-list">
        ${Object.entries(resumeData.competencies || {}).map(([key, val]) => `
          <div class="competency-item">
            <strong>${key.toUpperCase()}:</strong> ${val}
          </div>
        `).join('')}
      </div>
    </div>

    <div class="section">
      <div class="section-title">Experience</div>
      <div class="list-container">
        ${(resumeData.experience || []).map(exp => `
          <div class="item-container">
            <div class="item-header">
              <div class="item-title">${exp.role} <span class="item-meta">at ${exp.org}</span></div>
              <div class="item-date">${exp.date}</div>
            </div>
            <ul class="item-bullets">
              ${(exp.bullets || []).map(bullet => `<li>${bullet}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>

    ${resumeData.projects && resumeData.projects.length > 0 ? `
    <div class="section">
      <div class="section-title">Key Projects</div>
      <div class="list-container">
        ${(resumeData.projects || []).map(proj => `
          <div class="item-container">
            <div class="item-header">
              <div class="item-title">${proj.name} <span class="item-meta">(${proj.links})</span></div>
            </div>
            <ul class="item-bullets">
              ${(proj.bullets || []).map(bullet => `<li>${bullet}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>
    ` : ''}

    <div class="section">
      <div class="section-title">Education</div>
      <div class="list-container">
        ${(resumeData.education || []).map(edu => `
          <div style="display:flex; justify-content:space-between; align-items:baseline;">
            <div>
              <strong style="font-size:12.5px; color:#0f172a;">${edu.degree}</strong>
              <div style="font-size:11.5px; color:#64748b;">${edu.school}</div>
            </div>
            <div style="font-size:11px; font-weight:600; color:#0f172a;">${edu.date}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="section">
      <div class="section-title">Certifications</div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px 20px; font-size:11.5px;">
        ${(resumeData.certifications || []).map(cert => `
          <div>⭐ <strong>${cert.name}</strong> ${cert.issuer ? `- ${cert.issuer}` : ''} ${cert.date ? `(${cert.date})` : ''}</div>
        `).join('')}
      </div>
    </div>
  `;
}


// --- TEMPLATE 3: EXECUTIVE SERIF RENDERER ---
function renderExecutiveTemplate() {
  return `
    <div class="header">
      <div class="name">${resumeData.name}</div>
      <div class="title">${resumeData.title}</div>
      <div class="contact-row">
        <div>📍 ${resumeData.location}</div>
        <div>|</div>
        <div>✉️ <a href="mailto:${resumeData.email}">${resumeData.email}</a></div>
        <div>|</div>
        <div>📞 ${resumeData.phone}</div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Executive Summary</div>
      <div class="summary-text">${resumeData.summary}</div>
    </div>

    <div class="section">
      <div class="section-title">Core Technical Competencies</div>
      <div class="competency-grid">
        ${Object.entries(resumeData.competencies || {}).map(([key, val]) => `
          <div class="competency-item">
            • <strong>${capitalizeFirstLetter(key)}:</strong> ${val}
          </div>
        `).join('')}
      </div>
    </div>

    <div class="section">
      <div class="section-title">Professional Experience</div>
      <div style="display:flex; flex-direction:column; gap:12px;">
        ${(resumeData.experience || []).map(exp => `
          <div class="timeline-item">
            <div class="timeline-header">
              <div class="item-title">${exp.org} | <em>${exp.role}</em></div>
              <div class="item-date">${exp.date}</div>
            </div>
            <ul class="item-bullets">
              ${(exp.bullets || []).map(bullet => `<li>${bullet}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>

    ${resumeData.projects && resumeData.projects.length > 0 ? `
    <div class="section">
      <div class="section-title">Key Projects</div>
      <div style="display:flex; flex-direction:column; gap:12px;">
        ${(resumeData.projects || []).map(proj => `
          <div class="timeline-item">
            <div class="timeline-header">
              <div class="item-title">${proj.name} | <em>${proj.links}</em></div>
            </div>
            <ul class="item-bullets">
              ${(proj.bullets || []).map(bullet => `<li>${bullet}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>
    ` : ''}

    <div class="section">
      <div class="section-title">Education</div>
      <div style="display:flex; flex-direction:column; gap:8px;">
        ${(resumeData.education || []).map(edu => `
          <div style="display:flex; justify-content:space-between; align-items:baseline;">
            <div style="font-size:12px; color:#1e293b;">
              • <strong>${edu.school}</strong> – <em>${edu.degree}</em>
            </div>
            <div style="font-size:11px; color:#475569;">${edu.date}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="section">
      <div class="section-title">Professional Certifications & Credentials</div>
      <ul style="padding-left:20px; font-size:11.5px; line-height:1.5;">
        ${(resumeData.certifications || []).map(cert => `
          <li style="margin-bottom:2px; color:#334155;">
            ${cert.name}${cert.issuer ? `, ${cert.issuer}` : ''}${cert.date ? ` (${cert.date})` : ''}
          </li>
        `).join('')}
      </ul>
    </div>

    <div class="section">
      <div class="section-title">Hobbies & Extra Curricula</div>
      <ul style="padding-left:20px; font-size:11.5px; line-height:1.5; color:#334155;">
        ${resumeData.hobbies.split(',').map(h => `<li>${h.trim()}</li>`).join('')}
      </ul>
    </div>
  `;
}

function capitalizeFirstLetter(str) {
  if (str === 'soft') return 'Soft Skills';
  if (str === 'comp') return 'Competencies';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
