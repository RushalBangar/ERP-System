const SUPABASE_URL = 'https://ztdofuomqbkxjutgtuxt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0ZG9mdW9tcWJreGp1dGd0dXh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1NjIxNTAsImV4cCI6MjA4NTEzODE1MH0.lUH-pyxpMbwFZU9t6z-5nNJVV3YevhV5RAHeobAiH9s'; 

async function fetchQuestions(subject) {
    const endpoint = `${SUPABASE_URL}/rest/v1/questions?subject=eq.${subject}&select=question,options`;

    const response = await fetch(endpoint, {
        headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error(`Supabase error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (!data || data.length === 0) {
        throw new Error(`No questions found for subject: "${subject}"`);
    }

    return data;
}

// ============================================================
// Supabase Table Setup (run this SQL in Supabase SQL Editor)
// ============================================================
/*
-- 1. Create the questions table
CREATE TABLE questions (
    id      BIGSERIAL PRIMARY KEY,
    subject TEXT NOT NULL,          -- 'fds', 'oop', 'iot', 'math'
    question TEXT NOT NULL,
    options  JSONB NOT NULL          -- [{"text":"...", "isCorrect": true/false}, ...]
);

-- 2. Enable Row Level Security
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;

-- 3. Allow anyone (anon key) to read questions
CREATE POLICY "Public read access"
    ON questions FOR SELECT
    USING (true);

-- 4. (Optional) Index for fast filtering by subject
CREATE INDEX idx_questions_subject ON questions (subject);
*/
