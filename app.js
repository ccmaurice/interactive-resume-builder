// ==========================================
// Preloaded Resume Data (Default Sample Profile)
// ==========================================
const defaultResumeData = {
  name: "Alex Carter",
  title: "Senior Full Stack Engineer & Cloud Architect",
  email: "alex.carter@example.com",
  phone: "+1 (555) 019-2834",
  location: "San Francisco, CA | Remote",
  summary: "Innovative and results-driven Senior Full Stack Engineer with over 8 years of experience designing, building, and deploying robust web applications and cloud infrastructure. Specializes in React, Node.js, and multi-tenant SaaS architecture. Proven record of leading cross-functional teams, optimizing system performance, and scaling cloud-native services. Passionate about developer experience, clean code, and mentoring junior developers.",
  competencies: {
    languages: "JavaScript (Expert), TypeScript (Expert), Python (Advanced), HTML5/CSS3 (Expert)",
    frameworks: "React, Next.js, Node.js, Express, Tailwind CSS",
    backend: "PostgreSQL, MongoDB, Redis, AWS (S3, EC2, Lambda), Docker",
    systems: "Linux Systems, CI/CD Pipelines (GitHub Actions), Git, Docker Containerization",
    soft: "Technical Leadership, Team Mentorship, Agile Methodologies, Clear Communication, Problem Solving"
  },
  experience: [
    {
      role: "Lead Full Stack Engineer",
      org: "CloudScale Solutions, San Francisco, CA",
      date: "2023 – Present",
      bullets: [
        "Architected and deployed a multi-tenant SaaS analytics platform using Next.js, TypeScript, and AWS, improving page load speeds by 40%",
        "Led a team of 6 engineers, conducting code reviews, implementing CI/CD pipelines, and establishing coding best practices",
        "Reduced infrastructure costs by 25% through optimization of serverless functions and database queries"
      ]
    },
    {
      role: "Senior Software Engineer",
      org: "Apex Tech Systems, Austin, TX",
      date: "2020 – 2023",
      bullets: [
        "Developed scalable RESTful and GraphQL APIs in Node.js/Express, serving over 100k daily active users",
        "Migrated legacy monolithic application to a microservices architecture, increasing system uptime to 99.9%",
        "Collaborated with UX/UI designers to build a reusable design system in React, boosting frontend development velocity by 30%"
      ]
    },
    {
      role: "Software Engineer",
      org: "Innovate Web Lab, Boston, MA",
      date: "2018 – 2020",
      bullets: [
        "Built and maintained responsive frontend web interfaces using React and Redux",
        "Integrated third-party payment gateways (Stripe, PayPal) and social authentication systems",
        "Optimized SQL queries and database schemas in PostgreSQL, reducing query latency by 15%"
      ]
    }
  ],
  projects: [
    {
      name: "SaaS DevPortal",
      links: "React, Node.js, AWS, GitHub: github.com/example/devportal",
      bullets: [
        "An open-source developer portal hosting API documentation, interactive sandboxes, and rate-limiting controls",
        "Integrated custom Markdown rendering and real-time API logs visualization using WebSockets"
      ]
    },
    {
      name: "TaskFlow Manager",
      links: "TypeScript, Next.js, Tailwind CSS, Vercel",
      bullets: [
        "A lightweight, collaborative project management tool featuring drag-and-drop Kanban boards and interactive gantt charts"
      ]
    }
  ],
  education: [
    {
      degree: "B.S. in Computer Science",
      school: "Stanford University, Stanford, CA",
      date: "2014 – 2018"
    }
  ],
  certifications: [
    { name: "AWS Certified Solutions Architect - Associate", issuer: "Amazon Web Services", date: "2024" },
    { name: "Certified Kubernetes Administrator (CKA)", issuer: "Cloud Native Computing Foundation", date: "2023" },
    { name: "Professional Scrum Master (PSM I)", issuer: "Scrum.org", date: "2022" }
  ],
  hobbies: "Photography, Hiking, Playing Chess, Open Source Contribution. Spoken Languages: English (Native), Spanish (Conversational)"
};

// Current application state
let resumeData = JSON.parse(localStorage.getItem('saved_resume_v4')) || { ...defaultResumeData };

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

  // Dynamic Lists
  renderDynamicList('experience', renderExperienceItemForm);
  renderDynamicList('projects', renderProjectItemForm);
  renderDynamicList('education', renderEducationItemForm);
  renderDynamicList('certifications', renderCertificationItemForm);
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
    const sheet = document.getElementById('resume-sheet');
    sheet.className = `resume-sheet ${e.target.value}`;
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
  localStorage.setItem('saved_resume_v4', JSON.stringify(resumeData));
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
        <div style="display:flex; flex-direction:column; gap:8px; font-size:11px;">
          ${(resumeData.certifications || []).map(cert => `
            <div>
              <div style="font-weight:700; color:#0f172a;">${cert.name}</div>
              <div style="color:#64748b;">${cert.issuer ? cert.issuer : ''} ${cert.date ? `(${cert.date})` : ''}</div>
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
        <div style="display:flex; flex-direction:column; gap:16px;">
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
        <div style="display:flex; flex-direction:column; gap:14px;">
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
        <div style="display:flex; flex-direction:column; gap:8px;">
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
