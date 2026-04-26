import { checkAuth, initTheme, initHeader } from './utils.js';

(async () => {
    // 1. Auth and Theme check
    const user = checkAuth();
    if (!user) return;
    initTheme();
    initHeader(user);

    // 2. Populate Badges
    const badgesList = document.getElementById('badges-list');
    const badges = [
        { name: "Punctual", icon: "⏰" },
        { name: "Scholar", icon: "🎓" },
        { name: "Sporty", icon: "⚽" },
        { name: "Helpful", icon: "🤝" }
    ];

    if (badgesList) {
        badgesList.innerHTML = badges.map(b => `
            <div class="badge-item">
                <div class="badge-icon">${b.icon}</div>
                <div class="badge-name">${b.name}</div>
            </div>
        `).join('');
    }

    // 3. Populate Events
    const eventsList = document.getElementById('events-list');
    const events = [
        { day: "28", month: "Apr", title: "Cultural Fest", desc: "Annual cultural competition at Main Hall" },
        { day: "02", month: "May", title: "Tech Workshop", desc: "AI & Machine Learning hands-on session" },
        { day: "15", month: "May", title: "Sports Meet", desc: "Inter-college cricket tournament" }
    ];

    if (eventsList) {
        eventsList.innerHTML = events.map(e => `
            <div class="event-item">
                <div class="event-date">
                    <span class="day">${e.day}</span>
                    <span class="month">${e.month}</span>
                </div>
                <div class="event-info">
                    <h3>${e.title}</h3>
                    <p>${e.desc}</p>
                </div>
            </div>
        `).join('');
    }
})();
