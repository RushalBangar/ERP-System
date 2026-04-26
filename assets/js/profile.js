import { checkAuth, initTheme, initHeader } from './utils.js';

(async () => {
    // 1. Auth and Theme check
    const user = checkAuth();
    if (!user) return;
    initTheme();
    initHeader(user);

    // 2. Populate Fields
    if (user) {
        document.getElementById('p-first-name').value = user.full_name.split(' ')[0] || '';
        document.getElementById('p-middle-name').value = user.full_name.split(' ')[1] || '';
        document.getElementById('p-last-name').value = user.full_name.split(' ')[2] || '';
        document.getElementById('p-email').value = user.email || '';
        document.getElementById('p-mobile').value = user.mobile || '+91 9876543210';
        
        // Category can be dynamic if in user data
        if (user.category) document.getElementById('p-category').value = user.category;
    }

    // 3. Tab Switching Logic
    const navItems = document.querySelectorAll('.nav-item');
    const personalTab = document.getElementById('personal-tab');
    const otherTabs = document.getElementById('other-tabs');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const tabName = item.dataset.tab;

            // Update Nav
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Update Content
            if (tabName === 'personal') {
                personalTab.classList.add('active');
                otherTabs.classList.remove('active');
            } else {
                personalTab.classList.remove('active');
                otherTabs.classList.add('active');
            }
        });
    });
})();
