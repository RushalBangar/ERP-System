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
    return isDark;
}
