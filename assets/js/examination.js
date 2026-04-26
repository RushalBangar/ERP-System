import { supabase } from '../../config/db-config.js';
import { checkAuth, initTheme, initHeader } from './utils.js';

(async () => {
    // 1. Auth and Theme check
    const user = checkAuth();
    if (!user) return;
    initTheme();
    initHeader(user);

    const statRow = document.getElementById('stat-row');
    const resultsTable = document.getElementById('results-table');
    if (!statRow || !resultsTable) return;

    const { data: results, error } = await supabase
        .from('exam_results')
        .select('*, subjects(title, course_code, credits)')
        .eq('student_prn', user.prn_number)
        .order('grade_points', { ascending: true });

    if (error || !results || results.length === 0) {
        resultsTable.innerHTML = `<div class="loading-state"><p>No exam results found for your PRN (${user.prn_number}).<br>Please contact the examination cell.</p></div>`;
        return;
    }

    // Compute SGPA
    let totalPoints = 0, totalCredits = 0;
    results.forEach(r => {
        const credits = r.subjects?.credits || 4;
        totalPoints += r.grade_points * credits;
        totalCredits += credits;
    });
    const sgpa = (totalPoints / totalCredits).toFixed(2);

    const gradeCount = results.reduce((acc, r) => ({ ...acc, [r.grade]: (acc[r.grade] || 0) + 1 }), {});
    const topGrade = Object.entries(gradeCount).sort((a,b) => b[1]-a[1])[0]?.[0];

    statRow.innerHTML = `
        <div class="stat-card">
            <span class="stat-label">Semester SGPA</span>
            <div class="stat-value purple">${sgpa}</div>
        </div>
        <div class="stat-card">
            <span class="stat-label">Subjects Cleared</span>
            <div class="stat-value">  ${results.filter(r => r.grade_points >= 4).length} / ${results.length}</div>
        </div>
        <div class="stat-card">
            <span class="stat-label">Highest Score</span>
            <div class="stat-value">${Math.max(...results.map(r => r.marks_obtained))}</div>
        </div>
        <div class="stat-card">
            <span class="stat-label">Most Common Grade</span>
            <div class="stat-value">${topGrade || '—'}</div>
        </div>`;

    const gradeClassMap = { 'O': 'grade-O', 'A+': 'grade-Ap', 'A': 'grade-A', 'B+': 'grade-Bp', 'B': 'grade-B', 'F': 'grade-F' };
    const rows = results.sort((a,b) => b.marks_obtained - a.marks_obtained).map(r => {
        const gradeClass = gradeClassMap[r.grade] || 'grade-B';
        const barWidth = (r.marks_obtained / r.max_marks) * 100;
        return `<tr>
            <td><strong>${r.subjects.title}</strong><br><span style="color: var(--text-tertiary); font-size: 12px;">${r.subjects.course_code} · ${r.subjects.credits} Credits</span></td>
            <td>${r.marks_obtained} / ${r.max_marks}</td>
            <td>
                <div class="grade-bar"><div class="grade-bar-fill" style="width: ${barWidth}%"></div></div>
            </td>
            <td><span class="grade-badge ${gradeClass}">${r.grade}</span></td>
            <td>${r.grade_points} / 10</td>
        </tr>`;
    }).join('');

    resultsTable.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Marks Obtained</th>
                    <th style="width: 120px;">Progress</th>
                    <th>Grade</th>
                    <th>Grade Points</th>
                </tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>`;
})();
