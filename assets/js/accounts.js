import { supabase } from '../../config/db-config.js';
import { checkAuth, initTheme } from './utils.js';

(async () => {
    // 1. Auth and Theme check
    const user = checkAuth();
    if (!user) return;
    initTheme();

    const statRow = document.getElementById('stat-row-container');
    const tableWrapper = document.querySelector('.table-wrapper');
    if (!statRow || !tableWrapper) return;

    const { data: transactions, error } = await supabase
        .from('fee_transactions')
        .select('*')
        .eq('student_prn', user.prn_number)
        .order('date', { ascending: false });

    if (error || !transactions || transactions.length === 0) {
        tableWrapper.innerHTML = `<div class="loading-state"><p>No fee records found for your PRN (${user.prn_number}).<br>Please contact the accounts office.</p></div>`;
        statRow.innerHTML = '';
        return;
    }

    // Calculate totals
    let totalInvoiced = 0, totalPaid = 0, totalPending = 0;
    transactions.forEach(t => {
        if (t.transaction_type === 'Invoice') {
            totalInvoiced += parseFloat(t.amount);
            if (t.status === 'Pending') totalPending += parseFloat(t.amount);
            else totalPaid += parseFloat(t.amount);
        }
    });
    const fmt = (v) => '₹ ' + v.toLocaleString('en-IN', { minimumFractionDigits: 0 });

    statRow.innerHTML = `
        <div class="stat-card">
            <span class="stat-label">Total Invoiced</span>
            <div class="stat-value">${fmt(totalInvoiced)}</div>
        </div>
        <div class="stat-card">
            <span class="stat-label">Amount Paid</span>
            <div class="stat-value success">${fmt(totalPaid)}</div>
        </div>
        <div class="stat-card">
            <span class="stat-label">Outstanding Due</span>
            <div class="stat-value ${totalPending > 0 ? 'danger' : 'success'}">${fmt(totalPending)}</div>
        </div>`;

    // Build transaction table
    const rows = transactions.map(t => {
        const typeClass = t.transaction_type === 'Invoice' ? 'type-invoice' : 'type-payment';
        const prefix = t.transaction_type === 'Payment' ? '-' : '';
        const statusClass = t.status === 'Paid' ? 'status-paid' : 'status-pending';
        const dateStr = new Date(t.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
        return `<tr>
            <td>${dateStr}</td>
            <td>${t.description}</td>
            <td><span class="${typeClass}">${t.transaction_type}</span></td>
            <td>${t.semester || '—'}</td>
            <td>${prefix}${fmt(t.amount)}</td>
            <td><span class="${statusClass}">${t.status}</span></td>
        </tr>`;
    }).join('');

    tableWrapper.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Semester</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>`;
})();
