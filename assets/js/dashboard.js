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
    { id: "admission", name: "Admission", icon: "https://img.icons8.com/external-flat-icons-inmotus-design/96/external-Admission-post-office-flat-icons-inmotus-design.png" },
    { id: "career", name: "Career", icon: "https://img.icons8.com/external-flat-icons-inmotus-design/96/external-Career-climbing-stairs-flat-icons-inmotus-design.png" },
    { id: "certificates", name: "Certificates", icon: "https://img.icons8.com/fluency/96/diploma.png" },
    { id: "examination", name: "Examination", icon: "https://img.icons8.com/fluency/96/test-partial-passed.png", link: "examination.html" },
    { id: "feedback", name: "Feedback", icon: "https://img.icons8.com/fluency/96/customer-feedback.png" },
    { id: "grievance", name: "Grievance", icon: "https://img.icons8.com/fluency/96/complaint.png" },
    { id: "ptg", name: "PTG", icon: "https://img.icons8.com/fluency/96/family-association.png" },
    { id: "project", name: "Project Monitoring", icon: "https://img.icons8.com/fluency/96/management.png" },
    { id: "quiz", name: "Quiz", icon: "https://img.icons8.com/fluency/96/online-test.png" },
    { id: "resource", name: "Resource Sharing", icon: "https://img.icons8.com/fluency/96/shared-document.png" },
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
        card.innerHTML = `
            <div class="card-top">
                <div class="icon-container">
                    <img src="${mod.icon}" alt="${mod.name}">
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
