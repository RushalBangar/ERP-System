import { checkAuth, initTheme, initHeader } from './utils.js';

(async () => {
    // 1. Auth and Theme check
    const user = checkAuth();
    if (!user) return;
    initTheme();
    initHeader(user);

    // 2. Mock Quiz Data
    const quizzes = [
        { 
            id: 1, course: "AI", program: "B.Tech", year: "FY", 
            title: "CAT 1 Assessment", date: "15-Feb-2026", 
            start: "10:30 AM", end: "11:30 AM", marks: "18 / 20" 
        },
        { 
            id: 2, course: "ML", program: "B.Tech", year: "FY", 
            title: "Weekly Quiz 4", date: "10-Feb-2026", 
            start: "02:00 PM", end: "02:30 PM", marks: "10 / 10" 
        },
        { 
            id: 3, course: "SE", program: "B.Tech", year: "FY", 
            title: "Agile Concepts", date: "02-Feb-2026", 
            start: "11:00 AM", end: "11:45 AM", marks: "14 / 15" 
        }
    ];

    const tableBody = document.getElementById('quiz-body');
    if (tableBody) {
        tableBody.innerHTML = quizzes.map(q => `
            <tr>
                <td>${q.id}</td>
                <td style="font-weight: 600;">${q.course}</td>
                <td>${q.program}</td>
                <td>${q.year}</td>
                <td>${q.title}</td>
                <td>${q.date}</td>
                <td>${q.start}</td>
                <td>${q.end}</td>
                <td><strong>${q.marks}</strong></td>
                <td><button class="action-btn">View Response</button></td>
            </tr>
        `).join('');
    }
})();
