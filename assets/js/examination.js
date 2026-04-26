import { checkAuth, initTheme, initHeader } from './utils.js';

(async () => {
    // 1. Auth and Theme check
    const user = checkAuth();
    if (!user) return;
    initTheme();
    initHeader(user);

    // 2. Populate Student Info
    document.getElementById('info-prn').innerText = user.prn_number || 'N/A';
    document.getElementById('info-course').innerText = user.branch || 'N/A';
    document.getElementById('info-year').innerText = user.year || 'N/A';

    // 3. Mock Result Data
    const results = [
        { srNo: 1, code: "CS401", name: "Artificial Intelligence", type: "Regular", sem: 1, cat1: 24, cat2: 26, ese: 62, total: 88, grade: "O" },
        { srNo: 2, code: "CS402", name: "Machine Learning Lab", type: "Regular", sem: 1, cat1: "--", cat2: "--", ese: 45, total: 90, grade: "O" },
        { srNo: 3, code: "CS403", name: "Software Engineering", type: "Regular", sem: 1, cat1: 22, cat2: 21, ese: 58, total: 79, grade: "A+" }
    ];

    const tableBody = document.getElementById('results-body');
    if (tableBody) {
        tableBody.innerHTML = results.map(r => `
            <tr>
                <td>${r.srNo}</td>
                <td>${r.code}</td>
                <td>${r.name}</td>
                <td>${r.type}</td>
                <td>${r.sem}</td>
                <td>${r.cat1}</td>
                <td>${r.cat2}</td>
                <td>${r.ese}</td>
                <td><strong>${r.total}</strong></td>
                <td><span class="grade-badge ${r.grade === 'O' || r.grade === 'A+' ? 'grade-a' : 'grade-b'}">${r.grade}</span></td>
            </tr>
        `).join('');
    }

    // 4. Toggle Results Section
    const viewResultsBtn = document.getElementById('view-results-btn');
    const resultsSection = document.getElementById('results-section');

    if (viewResultsBtn && resultsSection) {
        viewResultsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            resultsSection.style.display = resultsSection.style.display === 'none' ? 'block' : 'none';
            resultsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
})();
