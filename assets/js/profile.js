import { checkAuth, initTheme, initHeader } from './utils.js';

(async () => {
    // 1. Auth and Theme check
    const user = checkAuth();
    if (!user) return;
    initTheme();
    initHeader(user);

    // 2. Populate Fields
    if (user) {
        const names = user.full_name.split(' ');
        document.getElementById('p-first-name').value = names[0] || '';
        document.getElementById('p-middle-name').value = names[1] || '';
        document.getElementById('p-last-name').value = names[names.length - 1] || '';
        document.getElementById('p-email').value = user.email || '';
        document.getElementById('p-mobile').value = user.mobile || '+91 9876543210';
    }

    // 3. Tab Switching Logic
    const navItems = document.querySelectorAll('.nav-item');
    const personalTab = document.getElementById('personal-tab');
    const otherTabs = document.getElementById('other-tabs');
    const breadcrumbCurrent = document.querySelector('.breadcrumb span:last-child');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const tabName = item.dataset.tab;
            const tabTitle = item.innerText;

            // Update Nav
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Update Breadcrumb
            breadcrumbCurrent.innerText = tabTitle;

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
