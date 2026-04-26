// 1. Data and State
const userJson = localStorage.getItem("user_data");
const userData = userJson ? JSON.parse(userJson) : { full_name: "Student", prn_number: "N/A" };

if (!userJson && window.location.hostname !== 'localhost') {
    window.location.href = "../index.html"; // Path updated!
}

// Update UI with user data
const userDisplayName = document.getElementById("user-display-name");
const userInitials = document.getElementById("user-initials");
const userAvatarImg = document.getElementById("user-avatar-img");

if (userDisplayName) userDisplayName.innerText = userData.full_name;
if (userInitials) {
    const initials = userData.full_name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    userInitials.innerText = initials;
}
if (userAvatarImg) userAvatarImg.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.full_name)}&background=random`;

// Update Metadata Spans
const prnDisplay = document.getElementById("user-prn-display");
const courseDisplay = document.getElementById("user-course-display");
if (prnDisplay) prnDisplay.innerText = `Registration No: ${userData.prn_number || 'N/A'}`;
if (courseDisplay) courseDisplay.innerText = `${userData.branch || 'N/A'}`;

const modules = [
    { id: "asportal", name: "ASPORTAL", icon: "https://img.icons8.com/fluency/96/checklist.png" },
    { id: "academics", name: "Academics", icon: "https://img.icons8.com/fluency/96/university.png", link: "academics.html" },
    { id: "accounts", name: "Accounts", icon: "https://img.icons8.com/fluency/96/calculator.png", link: "accounts.html" },
    { id: "admission", name: "Admission", icon: "https://img.icons8.com/fluency/96/conference-call.png" },
    { id: "career", name: "Career", icon: "https://img.icons8.com/fluency/96/climbing-stairs.png" },
    { id: "certificates", name: "Certificates", icon: "https://img.icons8.com/fluency/96/diploma.png" },
    { id: "examination", name: "Examination", icon: "https://img.icons8.com/fluency/96/test-partial-passed.png", link: "examination.html" },
    { id: "feedback", name: "Feedback", icon: "https://img.icons8.com/fluency/96/customer-feedback.png" },
    { id: "grievance", name: "Grievance", icon: "https://img.icons8.com/fluency/96/complaint.png" },
    { id: "ptg", name: "PTG", icon: "https://img.icons8.com/fluency/96/user-groups.png" },
    { id: "project", name: "Project Monitoring", icon: "https://img.icons8.com/fluency/96/project.png" },
    { id: "quiz", name: "Quiz", icon: "https://img.icons8.com/fluency/96/online-test.png" },
    { id: "resource", name: "Resource Sharing", icon: "https://img.icons8.com/fluency/96/share.png" },
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
