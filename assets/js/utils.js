// Utils.js

export function checkAuth(redirectPath = "../index.html") {
    const userJson = localStorage.getItem('user_data');
    if (!userJson) {
        window.location.href = redirectPath;
        return null;
    }
    return JSON.parse(userJson);
}

export function initTheme() {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        return true;
    }
    return false;
}

export function toggleTheme(themeBtn, sunIcon = "☀️", moonIcon = "🌙") {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    if (themeBtn) themeBtn.innerHTML = isDark ? sunIcon : moonIcon;
    localStorage.setItem('darkMode', isDark);
export function initHeader(userData) {
    if (!userData) return;
    
    // 1. Top Bar Elements
    const userInitials = document.getElementById("user-initials");
    if (userInitials) {
        const initials = userData.full_name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
        userInitials.innerText = initials;
    }

    // 2. Sub Header Elements
    const userDisplayName = document.getElementById("user-display-name");
    const userAvatarImg = document.getElementById("user-avatar-img");
    const prnDisplay = document.getElementById("user-prn-display");
    const courseDisplay = document.getElementById("user-course-display");

    if (userDisplayName) userDisplayName.innerText = userData.full_name;
    if (userAvatarImg) userAvatarImg.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.full_name)}&background=random`;
    if (prnDisplay) prnDisplay.innerText = `Registration No: ${userData.prn_number || 'N/A'}`;
    if (courseDisplay) courseDisplay.innerText = `${userData.branch || 'N/A'}`;

    // Fullscreen Toggle
    window.toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    };
}
