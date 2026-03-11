# Supabase Setup Guide for Matoshri ERP

## Step 1: Create a Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Sign up/Login to your account
3. Click "New Project"
4. Fill in your project details and create the project

## Step 2: Get Your Project Credentials
1. In your Supabase dashboard, go to Settings > API
2. Copy the "Project URL" and "anon public" key
3. Replace the placeholders in `db-config.js`:
   - `YOUR_SUPABASE_PROJECT_URL` → Your Project URL
   - `YOUR_SUPABASE_ANON_KEY` → Your anon public key

## Step 3: Create the Database Table
1. In Supabase dashboard, go to the SQL Editor
2. Run this SQL to create the students table:

```sql
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    prn_number VARCHAR(50) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    branch VARCHAR(100),
    year VARCHAR(50),
    attendance_percent DECIMAL(5,2) DEFAULT 0,
    fees_pending DECIMAL(10,2) DEFAULT 0,
    cgpa DECIMAL(3,2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);
```

## Step 4: Configure Row Level Security (RLS) (CRITICAL)
Because students will be creating their own accounts directly from the login page, you must tell Supabase that this is allowed.
1. In your Supabase dashboard, go to **Authentication** > **Policies** (under Configuration).
2. Under the `students` table, click **Create Policy**.
3. Select **"For full customization"**.
4. Policy Name: `Allow public inserts`
5. Allowed Operation: **INSERT**
6. Target Roles: `anon`, `authenticated`
7. Under "WITH CHECK expression", type: `true`
8. Save the policy. Repeat this process to create an `Allow public select` policy (Allowed Operation: SELECT, expression: `true`) so users can log in.

## Step 5: (Optional) Adding Users Manually
**While students can now register themselves**, you can still manually create users:
1. In your Supabase dashboard, go to **Authentication** > **Users**
2. Click **Add User** > **Create New User**
3. Add a student (make sure to uncheck "Auto Confirm User" or manually confirm them so they can log in without email verification):
   - **Email:** `rushalbangar19@gmail.com`
   - **Password:** `25EN02U009F` (Use the student's PRN as the password)
4. Add another test student:
   - **Email:** `student2@example.com`
   - **Password:** `25EN02U010F`

## Step 5: Add Profile Data to Database
Now insert their related profile details into the `students` table. *Note: The email and PRN here must match the Auth users created in Step 4 exactly.*

```sql
INSERT INTO students (email, prn_number, full_name, branch, year, attendance_percent, fees_pending, cgpa) VALUES
('rushalbangar19@gmail.com', '25EN02U009F', 'Rushal Bangar', 'Computer Engineering', '3rd Year', 85.5, 15000.00, 8.64),
('student2@example.com', '25EN02U010F', 'John Doe', 'Mechanical Engineering', '2nd Year', 92.0, 0.00, 8.11);
```

## Step 6: Test the Connection
1. Open `test.html` in your browser (you may need to serve it locally)
2. Check if the connection works and data loads

## Step 7: Test Login
1. Open `index.html` in your browser
2. Try logging in with the sample credentials

## Troubleshooting
- If you get CORS errors, make sure you're accessing the files through a local server (not file://)
- Check the browser console for JavaScript errors
- Verify your Supabase keys are correct and the project is active