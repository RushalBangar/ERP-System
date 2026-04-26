import { checkAuth, initTheme } from './utils.js';

window.onload = function() {
    // 1. Auth and Theme check
    const user = checkAuth();
    if (!user) return;
    initTheme();

    // Update Header
    const nameEl = document.getElementById('p-name');
    const branchEl = document.getElementById('p-branch');
    const initialsEl = document.getElementById('p-initials');

    if (nameEl) nameEl.innerText = user.full_name;
    if (branchEl) branchEl.innerText = user.branch + " • " + user.year;
    if (initialsEl) {
        const initials = user.full_name.match(/\b(\w)/g).join('').substring(0,2);
        initialsEl.innerText = initials;
    }

    // Update Inputs
    const inName = document.getElementById('in-name');
    const inPrn = document.getElementById('in-prn');
    const inEmail = document.getElementById('in-email');
    const inPhone = document.getElementById('in-phone');
    const inAddress = document.getElementById('in-address');

    if (inName) inName.value = user.full_name;
    if (inPrn) inPrn.value = user.prn_number;
    if (inEmail) inEmail.value = user.email || "";
    if (inPhone) inPhone.value = user.phone || "";
    if (inAddress) inAddress.value = user.address || "";
}
