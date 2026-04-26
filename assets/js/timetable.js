import { checkAuth, initTheme, initHeader } from './utils.js';

(async () => {
    // 1. Auth and Theme check
    const user = checkAuth();
    if (!user) return;
    initTheme();
    initHeader(user);

    // 2. Mock Schedule Data
    const slots = ["08:10 - 09:05", "09:05 - 10:00", "10:15 - 11:10", "11:10 - 12:05", "12:45 - 01:40", "01:40 - 02:35"];
    const schedule = {
        "Monday": [
            { type: 'theory', subject: 'AI', faculty: 'YNR', room: '104' },
            { type: 'theory', subject: 'ML', faculty: 'SBV', room: '104' },
            { type: 'lab', subject: 'AI Lab', faculty: 'YNR', room: 'Lab 1' },
            { type: 'lab', subject: 'AI Lab', faculty: 'YNR', room: 'Lab 1' },
            { type: 'theory', subject: 'SE', faculty: 'VMK', room: '104' }
        ],
        "Tuesday": [
            { type: 'theory', subject: 'PM', faculty: 'PSP', room: '104' },
            { type: 'theory', subject: 'AI', faculty: 'YNR', room: '104' },
            { type: 'lab', subject: 'ML Lab', faculty: 'SBV', room: 'Lab 2' },
            { type: 'lab', subject: 'ML Lab', faculty: 'SBV', room: 'Lab 2' }
        ],
        // Adding more days...
    };

    const tableBody = document.getElementById('timetable-body');
    if (tableBody) {
        tableBody.innerHTML = slots.map((slot, index) => {
            return `
                <tr>
                    <td class="slot-time">${slot}</td>
                    ${["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(day => {
                        const lecture = schedule[day] ? schedule[day][index] : null;
                        if (!lecture) return '<td></td>';
                        return `
                            <td>
                                <div class="cell-content type-${lecture.type}">
                                    <span class="faculty">${lecture.faculty}</span>
                                    <span class="subject">${lecture.subject}</span>
                                    <span class="room">Room: ${lecture.room}</span>
                                </div>
                            </td>
                        `;
                    }).join('')}
                </tr>
            `;
        }).join('');
    }
})();
