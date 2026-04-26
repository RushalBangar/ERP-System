import { checkAuth, initTheme, initHeader } from './utils.js';

// 1. Initial Setup
const user = checkAuth();
if (!user) {
    window.location.href = '../index.html';
}
initTheme();
initHeader(user);

// 2. Module Definition
const modules = [
    { id: "admission", name: "Admission", icon: "https://img.icons8.com/fluency/96/registration.png", link: "profile.html" },
    { id: "academics", name: "Academics", icon: "https://img.icons8.com/fluency/96/education.png", link: "academics.html" },
    { id: "examination", name: "Examination", icon: "https://img.icons8.com/fluency/96/test-results.png", link: "examination.html" },
    { id: "accounts", name: "Accounts", icon: "https://img.icons8.com/fluency/96/bank-card-backside.png", link: "accounts.html" },
    { id: "asportal", name: "ASPORTAL", icon: "https://img.icons8.com/fluency/96/task.png", link: "asportal.html" },
    { id: "career", name: "Career", icon: "https://img.icons8.com/fluency/96/briefcase.png" },
    { id: "certificates", name: "Certificates", icon: "https://img.icons8.com/fluency/96/certificate.png" },
    { id: "feedback", name: "Feedback", icon: "https://img.icons8.com/fluency/96/survey.png" },
    { id: "grievance", name: "Grievance", icon: "https://img.icons8.com/fluency/96/complaint.png" },
    { 
        id: "ptg", name: "PTG", 
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
    },
    { id: "project", name: "Project Monitoring", icon: "https://img.icons8.com/fluency/96/management.png" },
    { id: "quiz", name: "Quiz", icon: "https://img.icons8.com/fluency/96/quiz.png", link: "quiz.html" },
    { 
        id: "resource", name: "Resource Sharing", 
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>`
    },
    { id: "subject", name: "Subject Registration Form", icon: "https://img.icons8.com/fluency/96/edit-file.png" },
    { id: "timetable", name: "TimeTable", icon: "https://img.icons8.com/fluency/96/calendar.png", link: "timetable.html" },
    { id: "transport", name: "Transport", icon: "https://img.icons8.com/fluency/96/bus.png" }
];

const grid = document.getElementById("modules-grid");
const searchInput = document.getElementById("module-search");

function renderModules(list) {
    if (!grid) return;
    grid.innerHTML = "";
    list.forEach(mod => {
        const card = document.createElement("a");
        card.href = mod.link || "#";
        card.className = "module-card";
        
        const iconHtml = mod.icon.startsWith('<svg') ? mod.icon : `<img src="${mod.icon}" alt="${mod.name}">`;

        card.innerHTML = `
            <div class="card-top">
                <div class="icon-container">
                    ${iconHtml}
                </div>
            </div>
            <div class="card-bottom">
                <div class="card-title">${mod.name}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// 3. Search Functionality
if (searchInput) {
    searchInput.addEventListener("input", (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = modules.filter(m => m.name.toLowerCase().includes(term));
        renderModules(filtered);
    });
}

// 4. Render Initial Grid
renderModules(modules);
