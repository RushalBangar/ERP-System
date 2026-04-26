import { checkAuth, initTheme, initHeader } from './utils.js';

(async () => {
    // 1. Auth and Theme check
    const user = checkAuth();
    if (!user) return;
    initTheme();
    initHeader(user);

    // 2. Populate Student Info Bar
    document.getElementById('info-prn').innerText = user.prn_number || 'N/A';
    document.getElementById('info-branch').innerText = user.branch || 'N/A';

    // 3. Mock Data
    const pendingFees = [
        { srNo: 1, type: "Admission Fees", desc: "Balance Admission Fees", ay: "2025-26", sem: "2", amount: 45000 },
        { srNo: 2, type: "Library Fees", desc: "Annual Library Deposit", ay: "2025-26", sem: "All", amount: 2500 }
    ];

    const receipts = [
        { ay: "2025-26", sem: "1", no: "RCP-2025-0042", date: "15-Jul-2025", amount: 75000 },
        { ay: "2024-25", sem: "2", no: "RCP-2024-0891", date: "10-Jan-2025", amount: 65000 },
        { ay: "2024-25", sem: "1", no: "RCP-2024-0120", date: "12-Jul-2024", amount: 75000 }
    ];

    // 4. Render Functions
    const pendingBody = document.getElementById('pending-body');
    const receiptsBody = document.getElementById('receipts-body');

    if (pendingBody) {
        pendingBody.innerHTML = pendingFees.map(f => `
            <tr>
                <td>${f.srNo}</td>
                <td>${f.type}</td>
                <td>${f.desc}</td>
                <td>${f.ay}</td>
                <td>${f.sem}</td>
                <td><strong>₹ ${f.amount.toLocaleString()}</strong></td>
                <td><button class="action-btn-sm">Pay Now</button></td>
            </tr>
        `).join('');
    }

    if (receiptsBody) {
        receiptsBody.innerHTML = receipts.map(r => `
            <tr>
                <td>${r.ay}</td>
                <td>${r.sem}</td>
                <td>${r.no}</td>
                <td>${r.date}</td>
                <td><strong>₹ ${r.amount.toLocaleString()}</strong></td>
                <td><button class="action-btn-sm receipt-btn">View Receipt</button></td>
            </tr>
        `).join('');
    }

    // 5. Tab Switching Logic
    const navButtons = document.querySelectorAll('.acc-nav-btn');
    const sections = {
        pending: document.getElementById('pending-section'),
        receipts: document.getElementById('receipts-section')
    };

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;
            
            // Update buttons
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update sections
            Object.values(sections).forEach(s => s.style.display = 'none');
            sections[target].style.display = 'block';
        });
    });

})();
