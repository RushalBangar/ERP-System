import { checkAuth, initTheme, initHeader } from './utils.js';

(async () => {
    // 1. Auth and Theme check
    const user = checkAuth();
    if (!user) return;
    initTheme();
    initHeader(user);

    // 2. Populate Student info bar
    document.getElementById('info-branch').innerText = user.branch || 'N/A';
    document.getElementById('info-year').innerText = user.year || 'N/A';
    document.getElementById('info-div').innerText = 'F'; // Mock division

    // 3. Mock Assignment Data
    const assignments = [
        { 
            srNo: 1, code: "CS401", name: "Artificial Intelligence", 
            type: "Theory", batch: "All", faculty: "Dr. A. P. Joshi", allocation: "Allocated" 
        },
        { 
            srNo: 2, code: "CS402", name: "Machine Learning Lab", 
            type: "Lab", batch: "B1", faculty: "Prof. S. R. Patil", allocation: "Allocated" 
        },
        { 
            srNo: 3, code: "CS403", name: "Software Engineering", 
            type: "Theory", batch: "All", faculty: "Dr. V. M. Kulkarni", allocation: "Not Allocated" 
        }
    ];

    const tableBody = document.getElementById('assignment-body');
    if (tableBody) {
        tableBody.innerHTML = assignments.map(a => `
            <tr>
                <td>${a.srNo}</td>
                <td>${a.code}</td>
                <td>${a.name}</td>
                <td>${a.type}</td>
                <td>${a.batch}</td>
                <td>${a.faculty}</td>
                <td><span style="color: ${a.allocation === 'Allocated' ? '#10b981' : '#f59e0b'}; font-weight: 600;">${a.allocation}</span></td>
                <td><button class="action-btn">Proceed</button></td>
            </tr>
        `).join('');
    }

    // 4. Populate Course Dropdown
    const courseSelect = document.getElementById('course-select');
    if (courseSelect) {
        const uniqueCourses = [...new Set(assignments.map(a => a.name))];
        uniqueCourses.forEach(c => {
            const opt = document.createElement('option');
            opt.value = c;
            opt.innerText = c;
            courseSelect.appendChild(opt);
        });
    }
})();
