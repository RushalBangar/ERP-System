import { supabase } from '../../config/db-config.js';
import { checkAuth, initTheme } from './utils.js';

(async () => {
    // 1. Auth and Theme check
    const user = checkAuth();
    if (!user) return;
    initTheme();

    const subtitle = document.getElementById('page-subtitle');
    if (subtitle) subtitle.innerText = `${user.branch} · ${user.year}`;

    const container = document.getElementById('subjects-container');
    if (!container) return;

    // 2. Fetch subjects matching user's branch and year
    const { data: subjects, error } = await supabase
        .from('subjects')
        .select('*')
        .eq('branch', user.branch)
        .eq('year', user.year)
        .order('type', { ascending: false }); // Theory first

    if (error || !subjects || subjects.length === 0) {
        container.innerHTML = `
            <div class="no-data" style="grid-column: 1/-1;">
                <h3>No subjects found</h3>
                <p>No subjects are currently assigned to your branch and year (${user.branch} - ${user.year}).<br>Please contact the academic office or run the database.sql script.</p>
            </div>`;
        return;
    }

    // 3. Render subject cards
    container.innerHTML = '';
    subjects.forEach(sub => {
        const initials = sub.instructor_name.split(' ').filter(n => n !== 'Dr.' && n !== 'Prof.').map(n => n[0]).join('').substring(0, 2).toUpperCase();
        const typeClass = sub.type === 'Lab' ? 'lab-badge' : 'theory-badge';
        const actionLabel = sub.type === 'Lab' ? 'Lab Manual' : 'Notes';

        container.innerHTML += `
            <div class="subject-card">
                <div class="card-header">
                    <div class="subject-info">
                        <h3>${sub.title}</h3>
                        <p>Code: ${sub.course_code}</p>
                    </div>
                    <span class="type-badge ${typeClass}">${sub.type}</span>
                </div>
                <div class="card-instructor">
                    <div class="instructor-avatar">${initials}</div>
                    <div>
                        <div class="instructor-name">${sub.instructor_name}</div>
                        <div class="instructor-role">${sub.instructor_role}</div>
                    </div>
                    <span class="credits-chip">${sub.credits} Credits</span>
                </div>
                <div class="card-actions">
                    <a href="#" class="btn">Syllabus</a>
                    <a href="#" class="btn">${actionLabel}</a>
                </div>
            </div>`;
    });
})();
