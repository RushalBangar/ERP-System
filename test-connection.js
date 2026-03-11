// test-connection.js
import { supabase } from './db-config.js';

async function testConnection() {
    try {
        console.log('Testing Supabase connection...');

        // Test basic connection
        const { data, error } = await supabase
            .from('students')
            .select('count')
            .limit(1);

        if (error) {
            console.error('Connection error:', error);
            return;
        }

        console.log('Connection successful!');
        console.log('Data:', data);

    } catch (err) {
        console.error('Test failed:', err);
    }
}

testConnection();