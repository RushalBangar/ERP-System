import { checkAuth, initTheme, initHeader } from './utils.js';

const userData = checkAuth();
if (!userData) {
    window.location.href = '../index.html';
} else {
    initTheme();
    initHeader(userData);
}

const modules = [
    { id: "asportal", name: "ASPORTAL", icon: "https://img.icons8.com/fluency/96/checklist.png" },
    { id: "academics", name: "Academics", icon: "https://img.icons8.com/fluency/96/university.png", link: "academics.html" },
    { id: "accounts", name: "Accounts", icon: "https://img.icons8.com/fluency/96/calculator.png", link: "accounts.html" },
    { 
        id: "admission", name: "Admission", 
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
    },
    { 
        id: "career", name: "Career", 
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><path d="M18 13l4-4-4-4"/><path d="M2 20l7-7 7 7"/><path d="M9 13l4-4-4-4"/><path d="M2 13l7-7 7 7"/></svg>`
    },
    { id: "certificates", name: "Certificates", icon: "https://img.icons8.com/fluency/96/diploma.png" },
    { id: "examination", name: "Examination", icon: "https://img.icons8.com/fluency/96/test-partial-passed.png", link: "examination.html" },
    { 
        id: "feedback", name: "Feedback", 
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`
    },
    { id: "grievance", name: "Grievance", icon: "https://img.icons8.com/fluency/96/complaint.png" },
    { 
        id: "ptg", name: "PTG", 
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
    },
    { id: "project", name: "Project Monitoring", icon: "https://img.icons8.com/fluency/96/management.png" },
    { 
        id: "quiz", name: "Quiz", 
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
    },
    { 
        id: "resource", name: "Resource Sharing", 
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>`
    },
    { id: "subject", name: "Subject Registration Form", icon: "https://img.icons8.com/fluency/96/edit-file.png" },
    { id: "timetable", name: "TimeTable", icon: "https://img.icons8.com/fluency/96/calendar.png", link: "attendance.html" },
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
        
        // Detect if icon is a URL or SVG string
        const iconHtml = mod.icon.startsWith('<svg') ? mod.icon : `<img src="${mod.icon}" alt="${mod.name}">`;

        card.innerHTML = `
            <div class="card-top">
                <div class="icon-container">
                    ${iconHtml}
                </div>
                <div class="card-wave"></div>
            </div>
            <div class="card-bottom">
                <div class="card-title">${mod.name}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

renderModules(modules);

// Search logic
if (searchInput) {
    searchInput.addEventListener("input", (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = modules.filter(m => m.name.toLowerCase().includes(term));
        renderModules(filtered);
    });
}

// Fullscreen logic
window.toggleFullscreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
};
