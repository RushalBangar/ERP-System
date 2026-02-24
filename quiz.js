const SUPABASE_URL = 'https://supabase-proxy.rushalbangar19.workers.dev';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0ZG9mdW9tcWJreGp1dGd0dXh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1NjIxNTAsImV4cCI6MjA4NTEzODE1MH0.lUH-pyxpMbwFZU9t6z-5nNJVV3YevhV5RAHeobAiH9s';

async function fetchQuestions(subject) {
    // Calling the new RPC function to get questions without 'isCorrect' values
    const endpoint = `${SUPABASE_URL}/rest/v1/rpc/get_quiz_questions`;

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ p_subject: subject })
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

// Function to check the answer securely on the backend
async function verifyAnswer(questionId, optionIndex) {
    const endpoint = `${SUPABASE_URL}/rest/v1/rpc/check_quiz_answer`;

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            p_question_id: questionId,
            p_option_index: optionIndex
        })
    });

    if (!response.ok) {
        throw new Error(`Failed to check answer: ${response.status}`);
    }

    const data = await response.json();
    return data; // returns { isCorrect: boolean, correctIndex: integer }
}

// ============================================================
// Supabase Table Setup (run this SQL in Supabase SQL Editor)
// ============================================================
/*
-- 1. Create the questions table
CREATE TABLE questions (
    id      BIGSERIAL PRIMARY KEY,
    subject TEXT NOT NULL,          -- 'fds', 'oop', 'iot', 'math'
    question TEXT NOT NULL
);

-- 2. Create the options table
CREATE TABLE options (
    id BIGSERIAL PRIMARY KEY,
    question_id BIGINT REFERENCES questions(id) ON DELETE CASCADE,
    option_text TEXT NOT NULL,
    is_correct BOOLEAN NOT NULL DEFAULT false
);

-- 3. Enable Row Level Security
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE options ENABLE ROW LEVEL SECURITY;

-- 4. Allow anyone (anon key) to read
CREATE POLICY "Public read access" ON questions FOR SELECT USING (true);
CREATE POLICY "Public read access" ON options FOR SELECT USING (true);

-- 5. (Optional) Index for fast filtering by subject
CREATE INDEX idx_questions_subject ON questions (subject);
*/
