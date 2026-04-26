import { supabase } from '../../config/db-config.js';
import { checkAuth, initTheme, initHeader } from './utils.js';

(async () => {
    // 1. Auth and Theme check
    const user = checkAuth();
    if (!user) return;
    initTheme();
    initHeader(user);

    const subtitle = document.getElementById('page-subtitle');
    if (subtitle) subtitle.innerText = `Academic Year 2025-26 · ${user.branch}`;

    const container = document.getElementById('subjects-container');
    const statRow = document.getElementById('stat-row-container');
    const alertBox = document.getElementById('alert-container');
    if (!container || !statRow || !alertBox) return;

    // Fetch all attendance records joined with subject names
    const { data: records, error } = await supabase
        .from('attendance_records')
        .select('*, subjects(title, course_code)')
        .eq('student_prn', user.prn_number)
        .order('date', { ascending: false });

    if (error || !records || records.length === 0) {
        container.innerHTML = `<div class="loading-state"><p>No attendance records found for your PRN (${user.prn_number}).<br>Please contact the academic office.</p></div>`;
        return;
    }

    // Group records by subject
    const bySubject = {};
    let totalPresent = 0, totalCount = 0;

    records.forEach(r => {
        const subId = r.subject_id;
        if (!bySubject[subId]) {
            bySubject[subId] = { title: r.subjects.title, code: r.subjects.course_code, present: 0, total: 0 };
        }
        bySubject[subId].total++;
        totalCount++;
        if (r.status === 'Present' || r.status === 'Late') {
            bySubject[subId].present++;
            totalPresent++;
        }
    });

    const overallPct = totalCount > 0 ? ((totalPresent / totalCount) * 100).toFixed(1) : 0;
    const isLow = overallPct < 75;

    // Overall Stats
    statRow.innerHTML = `
        <div class="stat-card">
            <span class="stat-label">Overall Attendance</span>
            <span class="stat-value ${overallPct >= 75 ? 'good' : 'bad'}">${overallPct}%</span>
            <span class="stat-note">${isLow ? '⚠ Below 75% threshold' : '✓ Attendance is satisfactory'}</span>
        </div>
        <div class="stat-card">
            <span class="stat-label">Total Classes Held</span>
            <span class="stat-value">${totalCount}</span>
        </div>
        <div class="stat-card">
            <span class="stat-label">Classes Attended</span>
            <span class="stat-value good">${totalPresent}</span>
        </div>
        <div class="stat-card">
            <span class="stat-label">Classes Missed</span>
            <span class="stat-value ${totalCount - totalPresent > 0 ? 'bad' : ''}">${totalCount - totalPresent}</span>
        </div>`;

    // Alert
    alertBox.innerHTML = isLow
        ? `<div class="alert-banner alert-danger"><strong>⚠ Attendance Warning:</strong> Your overall attendance is ${overallPct}%, which is below the required 75%. Please attend more lectures to avoid being detained.</div>`
        : `<div class="alert-banner alert-success">✓ Your attendance is ${overallPct}%, which is above the 75% requirement.</div>`;

    // Subject rows
    container.innerHTML = '';
    Object.values(bySubject).sort((a,b) => (a.present/a.total) - (b.present/b.total)).forEach(sub => {
        const pct = ((sub.present / sub.total) * 100).toFixed(1);
        const color = pct >= 75 ? '#059669' : '#DC2626';
        container.innerHTML += `
            <div class="subject-row">
                <div class="row-header">
                    <div>
                        <div class="row-title">${sub.title}</div>
                        <div class="row-counts">${sub.present} / ${sub.total} classes attended</div>
                    </div>
                    <div class="row-pct" style="color:${color}">${pct}%</div>
                </div>
                <div class="progress-track">
                    <div class="progress-fill" style="width:${pct}%; background:${color};"></div>
                </div>
            </div>`;
    });
})();
