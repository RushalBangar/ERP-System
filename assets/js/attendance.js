import { checkAuth, initTheme, initHeader } from './utils.js';

(async () => {
    // 1. Auth and Theme check
    const user = checkAuth();
    if (!user) return;
    initTheme();
    initHeader(user);

    // 2. Populate Student Info Bar
    document.getElementById('info-prn').innerText = user.prn_number || 'N/A';
    document.getElementById('info-teacher').innerText = 'Prof. S. B. Borse'; // Mock
    document.getElementById('info-year').innerText = user.year || 'N/A';
    document.getElementById('info-div').innerText = 'F'; // Mock
    document.getElementById('info-roll').innerText = '25'; // Mock

    // 3. Mock Attendance Data
    const attendanceData = [
        { 
            faculty: "10026 / Yogita Nitin Rajole", code: "310241", name: "Artificial Intelligence", 
            type: "Theory", ratio: "26 / 30", percent: 86 
        },
        { 
            faculty: "10152 / Amrita Amol Ahire", code: "310242", name: "Machine Learning Lab", 
            type: "Lab", ratio: "12 / 12", percent: 100 
        },
        { 
            faculty: "10084 / Swapnil S. Patil", code: "310243", name: "Software Engineering", 
            type: "Theory", ratio: "18 / 22", percent: 81 
        },
        { 
            faculty: "10121 / Priyanka S. Pawar", code: "310244", name: "Project Management", 
            type: "Theory", ratio: "15 / 20", percent: 75 
        }
    ];

    const grid = document.getElementById('attendance-list');
    
    function renderAttendance(data) {
        if (!grid) return;
        grid.innerHTML = data.map(item => {
            const offset = 220 - (220 * item.percent) / 100;
            return `
                <div class="att-card">
                    <div class="att-card-header">${item.faculty}</div>
                    <div class="att-card-body">
                        <div class="progress-circle">
                            <svg>
                                <circle class="progress-bg" cx="40" cy="40" r="35"></circle>
                                <circle class="progress-bar" cx="40" cy="40" r="35" 
                                    style="stroke-dasharray: 220; stroke-dashoffset: ${offset};"></circle>
                            </svg>
                            <div class="percentage">${item.percent}%</div>
                        </div>
                        <div class="att-details">
                            <div class="course-code">${item.code}</div>
                            <div class="course-name">${item.name}</div>
                            <div class="session-chip">${item.type}</div>
                        </div>
                    </div>
                    <div class="att-card-footer">
                        Attendance Ratio: ${item.ratio}
                    </div>
                </div>
            `;
        }).join('');
    }

    renderAttendance(attendanceData);

    // Filter Logic
    document.getElementById('fetch-attendance').addEventListener('click', () => {
        grid.innerHTML = '<div class="loading-state"><div class="spinner"></div><p>Fetching records...</p></div>';
        setTimeout(() => renderAttendance(attendanceData), 600);
    });

})();
