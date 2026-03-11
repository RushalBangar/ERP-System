// db-config.js
// Import Supabase from the CDN (Content Delivery Network)
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// REPLACE THESE WITH YOUR ACTUAL KEYS FROM SUPABASE DASHBOARD
const SUPABASE_URL = 'https://ldfrlcxqftejbkwnzvje.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkZnJsY3hxZnRlamJrd256dmplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyMjQ0MDksImV4cCI6MjA4ODgwMDQwOX0.fjqxrHemr6ucpa9pwIgq91oKPM8CoeZ8X1NN1IULm1I'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)